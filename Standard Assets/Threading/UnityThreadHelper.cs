using UnityEngine;
using System.Linq;
using System.Collections.Generic;

public class UnityThreadHelper : MonoBehaviour
{
    private static UnityThreadHelper instance = null;
    private static UnityThreadHelper Instance
    {
        get
        {
            if (null == (object)instance)
            {
                instance = FindObjectOfType(typeof(UnityThreadHelper)) as UnityThreadHelper;
                if (null == (object)instance)
                {
                    var go = new GameObject("UnityThreadHelper");
                    go.hideFlags = HideFlags.HideAndDontSave;
                    instance = go.AddComponent<UnityThreadHelper>();
                    instance.EnsureHelper();
                }
            }
            return instance;
        }
    }

    /// <summary>
    /// Returns the GUI/Main Dispatcher.
    /// </summary>
    public static UnityThreading.Dispatcher Dispatcher
    {
        get
        {
            return Instance.CurrentDispatcher;
        }
    }

    /// <summary>
    /// Returns the TaskDistributor.
    /// </summary>
    public static UnityThreading.TaskDistributor TaskDistributor
    {
        get
        {
            return Instance.CurrentTaskDistributor;
        }
    }

    private UnityThreading.Dispatcher dispatcher;
    public UnityThreading.Dispatcher CurrentDispatcher
    {
        get
        {
            return dispatcher;
        }
    }

    private UnityThreading.TaskDistributor taskDistributor;
    public UnityThreading.TaskDistributor CurrentTaskDistributor
    {
        get
        {
            return taskDistributor;
        }
    }

    private void EnsureHelper()
    {
        if (dispatcher == null)
            dispatcher = new UnityThreading.Dispatcher();

        if (taskDistributor == null)
            taskDistributor = new UnityThreading.TaskDistributor();
    }

    /// <summary>
    /// Creates new thread which runs the given action. The given action will be wrapped so that any exception will be catched and logged.
    /// </summary>
    /// <param name="action">The action which the new thread should run.</param>
    /// <param name="autoStartThread">True when the thread should start immediately after creation.</param>
    /// <returns>The instance of the created thread class.</returns>
    public static UnityThreading.ActionThread CreateThread(System.Action<UnityThreading.ActionThread> action, bool autoStartThread)
    {
        Instance.EnsureHelper();

        System.Action<UnityThreading.ActionThread> actionWrapper = currentThread =>
            {
                try
                {
                    action(currentThread);
                }
                catch (System.Exception ex)
                {
                    UnityEngine.Debug.LogError(ex);
                }
            };
        var thread = new UnityThreading.ActionThread(actionWrapper, autoStartThread);
        Instance.RegisterThread(thread);
        return thread;
    }

    /// <summary>
    /// Creates new thread which runs the given action and starts it after creation. The given action will be wrapped so that any exception will be catched and logged.
    /// </summary>
    /// <param name="action">The action which the new thread should run.</param>
    /// <returns>The instance of the created thread class.</returns>
    public static UnityThreading.ActionThread CreateThread(System.Action<UnityThreading.ActionThread> action)
    {
        return CreateThread(action, true);
    }

    /// <summary>
    /// Creates new thread which runs the given action. The given action will be wrapped so that any exception will be catched and logged.
    /// </summary>
    /// <param name="action">The action which the new thread should run.</param>
    /// <param name="autoStartThread">True when the thread should start immediately after creation.</param>
    /// <returns>The instance of the created thread class.</returns>
    public static UnityThreading.ActionThread CreateThread(System.Action action, bool autoStartThread)
    {
        return CreateThread((thread) => action(), autoStartThread);
    }

    /// <summary>
    /// Creates new thread which runs the given action and starts it after creation. The given action will be wrapped so that any exception will be catched and logged.
    /// </summary>
    /// <param name="action">The action which the new thread should run.</param>
    /// <returns>The instance of the created thread class.</returns>
    public static UnityThreading.ActionThread CreateThread(System.Action action)
    {
        return CreateThread((thread) => action(), true);
    }

    List<UnityThreading.ThreadBase> registeredThreads = new List<UnityThreading.ThreadBase>();
    void RegisterThread(UnityThreading.ThreadBase thread)
    {
        registeredThreads.Add(thread);
    }

    void OnDestroy()
    {
        foreach (var thread in registeredThreads)
            thread.Dispose();

        if (dispatcher != null)
            dispatcher.Dispose();
        dispatcher = null;

        if (taskDistributor != null)
            taskDistributor.Dispose();
        taskDistributor = null;
    }

    void Update()
    {
        if (dispatcher != null)
            dispatcher.ProcessTasks();

        var finishedThreads = registeredThreads.Where(thread => !thread.IsAlive).ToArray();
        foreach (var finishedThread in finishedThreads)
        {
            finishedThread.Dispose();
            registeredThreads.Remove(finishedThread);
        }
    }
}