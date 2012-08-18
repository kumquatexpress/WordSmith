private static var instance: AudioLoopDontDestroy;

public static function GetInstance() : AudioLoopDontDestroy {
	return instance;
}

function Awake() {
    if (instance != null && instance != this) {
        Destroy(this.gameObject);
        return;
    } else {
        instance = this;
    }
    DontDestroyOnLoad(this.gameObject);
}