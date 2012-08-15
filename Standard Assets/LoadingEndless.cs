using UnityEngine;
using System.Collections;

public class LoadingEndless : MonoBehaviour {
	GUIText text;
	
	// Use this for initialization
	void Start () {
      text = GameObject.FindWithTag("Percentage").GetComponent<GUIText>();
	  Dictionary.startDict();
	}
	
	// Update is called once per frame
	void Update () {
		text.text = (Dictionary.getWords()/81534).ToString ()+"%";
		if(Dictionary.getWords() > 81000){
			Application.LoadLevel("VersionEndless");
		}
	}
}
