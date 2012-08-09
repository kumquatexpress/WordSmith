#pragma strict
//global variables for storebought items
static var slowdownGenerateRate: int;
static var speedGenerateRate: int;
static var doubleGenerateRate: int;
static var money : int;

//Font(appearance only) for the labels
var headingFont: Font;
var font: Font;

var powerupTag: Rect = Rect(0, 0, 600, 60);
var moneyTag: Rect = Rect(800, 0, 200, 60);
var moneyheading1 : String = "Money: "+money.ToString();

//powerup levels saved locally
var slowCost: int;
var speedCost: int;
var doubleCost: int;

//Strings for the buttons
var slowPurchase : String;
var speedPurchase : String;
var doublePurchase : String;

//Scripting starts here

function OnGUI(){	
	//Use this to transform current screen size proportional to a 1024x600 screen
	var horizRatio : float = Screen.width / 1024.0;
	var vertRatio : float  = Screen.height / 640.0;
	GUI.matrix = Matrix4x4.TRS (Vector3(0, 0, 0), Quaternion.identity, Vector3 (horizRatio, vertRatio, 1));
	
	//Makes letters appear white/visible
	var mystyle : GUIStyle = new GUIStyle();
	mystyle.normal.textColor = Color.white;
	mystyle.font = headingFont;
	
	//Instantiate labels and their corresponding buttons. Buttons are 
	//created with an onclick function automatically.
	GUI.Label(moneyTag, moneyheading1, mystyle);
	GUI.Label(Rect(0,0,600,60), "Powerups: Buy to increase generation \nprobability, power, and duration.",
	mystyle);
	GUI.Label(Rect(0, 180, 800, 60), "A buff that slows down time.", mystyle);
	GUI.Label(Rect(0, 330, 800, 60), "Increases the speed of your \ncatcher for a period of time.", mystyle);
	GUI.Label(Rect(0, 480, 800, 60), "The next x letters you get are doubled \nin point value, where x is current level.", mystyle);

	if(GUI.Button(Rect(900,600,
    120,40),"Back")){
    	Application.LoadLevel("Menu");
    }
    if(GUI.Button(Rect(0, 100, 200, 60), slowPurchase)){
    	getMoney();
		if (money >= slowCost){
			money -= slowCost;
    		PlayerPrefs.SetInt("Money", money);
    		slowdownGenerateRate += 1;
    		PlayerPrefs.SetInt("Slowdown", slowdownGenerateRate);
    		slowCost += 500;
    		updateLabels();
    		PlayerPrefs.SetInt("SlowCost", slowCost);
    	}
    	else{
    		slowPurchase = "Not enough money!";
    	}
    }
    if(GUI.Button(Rect(0, 250, 200, 60), speedPurchase)){
        getMoney();
		if (money >= speedCost){
			money -= speedCost;
    		PlayerPrefs.SetInt("Money", money);
    		speedGenerateRate += 1;
    		PlayerPrefs.SetInt("Speed", speedGenerateRate);
    		speedCost += 500;
    		updateLabels();
    		PlayerPrefs.SetInt("SpeedCost", speedCost);
    	}
    	else{
    		speedPurchase = "Not enough money!";
    	}
    }
    if(GUI.Button(Rect(0, 400, 200, 60), doublePurchase)){
        getMoney();
		if (money >= doubleCost){
			money -= doubleCost;
    		PlayerPrefs.SetInt("Money", money);
    		doubleGenerateRate += 1;
    		PlayerPrefs.SetInt("Double", doubleGenerateRate);
    		doubleCost += 500;
    		updateLabels();
    		PlayerPrefs.SetInt("DoubleCost", doubleCost);
    	}
    	else{
    		doublePurchase = "Not enough money!";
    	} 
    }
}

function Start () {
}

function Awake(){
	getMoney();
	getPowerupRates();
	Debug.Log(slowdownGenerateRate);
	getCosts();
	
	updateLabels();
}

function Update () {

}

function getMoney(){
	money = PlayerPrefs.GetInt("Money");
}

function getPowerupRates(){
	slowdownGenerateRate = PlayerPrefs.GetInt("Slowdown");
	speedGenerateRate = PlayerPrefs.GetInt("Speed");	
	doubleGenerateRate = PlayerPrefs.GetInt("Double");
}

function getCosts(){
	slowCost = PlayerPrefs.GetInt("SlowCost");
	speedCost = PlayerPrefs.GetInt("SpeedCost");
	doubleCost = PlayerPrefs.GetInt("DoubleCost");
}

function updateLabels(){
	slowPurchase = "Purchase: "+slowCost+"\nCurrent Level: "+slowdownGenerateRate;
	speedPurchase = "Purchase: "+speedCost+"\nCurrent Level: "+speedGenerateRate;
	doublePurchase = "Purchase: "+doubleCost+"\nCurrent Level: "+doubleGenerateRate;
	moneyheading1 = "Money: "+money.ToString();
}