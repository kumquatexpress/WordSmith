	using System.IO;
using UnityEngine;
using System.Collections;
using System;


public static class Dictionary {
	
	public static Hashtable dictionary = new Hashtable();

	static string txt;
	

	static TextAsset text;
    static StringReader reader;
	
	// Use this for initialization
	public static void startDict () {
		if(dictionary.Count == 0){
		text = Resources.Load ("Dictionary") as TextAsset;
				Debug.Log("load done");
		//reader = new StringReader(text.text);
			String[] words = text.text.Split('\n');
			stockDictionary (words);
			}
	}

			
	static void stockDictionary(String[] s){
		for(int i = 0; i< s.Length; i++){
			dictionary.Add(s[i], null);
		}
	/*txt = reader.ReadLine ();	
	while((txt) != null){
			dictionary.Add(txt, null);
			txt = reader.ReadLine ();
		}*/
				Debug.Log ("stocking dictionary");
	//reader.Close();
	}
	
	public static bool checkForWord(string s){
		return dictionary.ContainsKey(s.ToLower());
	}
	
	public static Hashtable getDict(){
		return dictionary;
	}
	
	public static int getWords(){
		return dictionary.Count;
	}
}
