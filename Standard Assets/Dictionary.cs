using System.IO;
using UnityEngine;
using System.Collections;
using System;


public static class Dictionary {
	
	public static Hashtable dictionary = new Hashtable();
	public static Hashtable dictionary2 = new Hashtable();
	public static Hashtable dictionary3 = new Hashtable();
	public static Hashtable dictionary4 = new Hashtable();
	public static Hashtable dictionary5 = new Hashtable();
	public static Hashtable dictionary6 = new Hashtable();
	public static Hashtable dictionary7 = new Hashtable();
	public static Hashtable dictionary8 = new Hashtable();
	public static Hashtable dictionary9 = new Hashtable();
	public static Hashtable dictionary10 = new Hashtable();
	public static Hashtable dictionary11 = new Hashtable();
	public static Hashtable dictionary12 = new Hashtable();
	
	static int wordslength = 0;
	
	static string txt;
	
	static TextAsset text;
	
	// Use this for initialization
	public static void startDict () {
		text = Resources.Load ("Dictionary") as TextAsset;
				Debug.Log("load done");
		//reader = new StringReader(text.text);
			String[] words = text.text.Split('@');
			wordslength = words.Length;
		
			String[] words1 = words[0].Split('\n');
			String[] words2 = words[1].Split('\n');
			String[] words3 = words[2].Split('\n');
			String[] words4 = words[3].Split('\n');
			String[] words5 = words[4].Split('\n');
			String[] words6 = words[5].Split('\n');
			String[] words7 = words[6].Split('\n');
			String[] words8 = words[7].Split('\n');
			String[] words9 = words[8].Split('\n');
			String[] words10 = words[9].Split('\n');
			String[] words11 = words[10].Split('\n');
			String[] words12 = words[11].Split('\n');
			stockDictionary (words1, dictionary);
			stockDictionary (words2, dictionary2);
			stockDictionary (words3, dictionary3);
			stockDictionary (words4, dictionary4);
			stockDictionary (words5, dictionary5);
			stockDictionary (words6, dictionary6);
			stockDictionary (words7, dictionary7);
			stockDictionary (words8, dictionary8);
			stockDictionary (words9, dictionary9);
			stockDictionary (words10, dictionary10);
			stockDictionary (words11, dictionary11);
			stockDictionary (words12, dictionary12);
	}

			
	static void stockDictionary(String[] s, Hashtable dict){
		int counter = 0;
		try{
			for(int i = 0; i<s.Length; i++){
				counter = i;
				dict.Add (s[i], null);
			}
		}
		catch (Exception e){
			Debug.Log (s[counter]);
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
		return (dictionary.ContainsKey(s.ToLower()) || dictionary2.ContainsKey (s.ToLower ()) ||
			dictionary3.ContainsKey(s.ToLower()) || dictionary4.ContainsKey (s.ToLower()) ||
			dictionary5.ContainsKey(s.ToLower ()) || dictionary6.ContainsKey (s.ToLower())) ||
			dictionary7.ContainsKey(s.ToLower ()) || dictionary8.ContainsKey(s.ToLower()) ||
				dictionary9.ContainsKey(s.ToLower ()) || dictionary10.ContainsKey(s.ToLower ()) ||
				dictionary11.ContainsKey (s.ToLower ()) || dictionary12.ContainsKey(s.ToLower ());
	}
	
	public static Hashtable getDict(){
		return dictionary;
	}
	
	public static int getWords(){
		return dictionary.Count+dictionary2.Count+dictionary3.Count+dictionary4.Count+
		dictionary5.Count+dictionary6.Count+dictionary7.Count+dictionary8.Count+dictionary9.Count+
				dictionary10.Count+dictionary11.Count+dictionary12.Count;
	}
	
	public static String testtext(){
		return text.text.ToString().Substring(500000, 100);
	}
	
	public static int testLength(){
		return wordslength;
	}
}
