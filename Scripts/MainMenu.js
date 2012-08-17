
function Awake(){	
	if(!PlayerPrefs.GetString("FirstTime").Equals("False")){
		Debug.Log("starting first time imports");
		PlayerPrefs.SetInt("SlowCost", 250);
		PlayerPrefs.SetInt("SpeedCost", 250);		
		PlayerPrefs.SetInt("DoubleCost", 250);
		PlayerPrefs.SetInt("Money", 700);
		PlayerPrefs.SetInt("Slowdown", 1);
		PlayerPrefs.SetInt("Speed", 1);
		PlayerPrefs.SetInt("Double", 1);
		PlayerPrefs.SetString("FirstTime", "False");
		PlayerPrefs.SetInt("Highscore", 0);
		PlayerPrefs.SetInt("HighscoreEndless", 0);
	}
}

// Use this for initialization
function Start () {
}

// Update is called once per frame
function Update () {
}

