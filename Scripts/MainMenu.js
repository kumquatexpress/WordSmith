
function Awake(){
	Debug.Log("awake started");
		PlayerPrefs.DeleteAll();
	
	if(!PlayerPrefs.GetString("FirstTime").Equals("False")){
		Debug.Log("starting first time imports");
		PlayerPrefs.SetInt("SlowCost", 250);
		PlayerPrefs.SetInt("SpeedCost", 250);		
		PlayerPrefs.SetInt("DoubleCost", 250);
		PlayerPrefs.SetInt("Money", 700);
		PlayerPrefs.SetInt("Slowdown", 2);
		PlayerPrefs.SetInt("Speed", 2);
		PlayerPrefs.SetInt("Double", 0);
		PlayerPrefs.SetString("FirstTime", "False");
		PlayerPrefs.SetInt("HighScore", 0);
	}
}

// Use this for initialization
function Start () {
}

// Update is called once per frame
function Update () {
}

