using UnityEngine;
using System.Collections;

public class Loading : MonoBehaviour {
	
	float time = 0;
	
	bool yn;


	
	// Use this for initialization
	void Start () {
	  time = Time.fixedTime;
			yn = true;
	}
	
	// Update is called once per frame
	void Update () {
		if(Dictionary.getWords() > 10000){
			
			Application.LoadLevel("VersionLevels");
		}
		else if(Time.fixedTime - time > 1 && yn){
					Debug.Log ("load started");
			Dictionary.startDict();
			yn = false;
		}
	}
}
