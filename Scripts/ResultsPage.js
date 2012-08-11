var score : int;
var wordLength : int;
var word : String;
var totalnumwords : int;
var font : Font;
var multiplier : int;
var pictureBackground : Texture2D;
var money : int;

var finalscore : int;

var time: float;
// Use this for initialization
function Awake() {
	score = MainLevel.score;
	word = MainLevel.longestword;
	totalnumwords = MainLevel.totalnumwords;
	wordLength = word.Length;
	if(wordLength > 5){
		multiplier = 2;
	}
	if(wordLength > 7){
		multiplier = 3;
	}
	if(wordLength > 9){
		multiplier = 4;
	}
	else{
		multiplier = 1;
	}
	finalscore = (score+totalnumwords)*multiplier;
	money = PlayerPrefs.GetInt("Money");
}

function Start(){
	time = Time.timeSinceLevelLoad;
	Time.timeScale = 1;
	PlayerPrefs.SetInt("Money", money+finalscore);
}

function OnGUI(){
	//Use this to transform current screen size proportional to a 1024x600 screen
	var horizRatio : float = Screen.width / 1024.0;
	var vertRatio : float  = Screen.height / 640.0;
	GUI.matrix = Matrix4x4.TRS (Vector3(0, 0, 0), Quaternion.identity, Vector3 (horizRatio, vertRatio, 1));

	GUI.DrawTexture(Rect(0,0,1024,640), pictureBackground);
	
	var color : Color = Color(0.15,0.87,0.38);
	var mystyle : GUIStyle = new GUIStyle();
	mystyle.font = font;
	mystyle.normal.textColor = color;

	GUI.Label(Rect(50,150,600,50),"Base Score: " + score, mystyle);
	if(time > 1.6){
		GUI.Label(Rect(270,150,600,50),"+ Total Number of Words Submitted: " +totalnumwords, mystyle);
	}
	if(time > 3.2){
		GUI.Label(Rect(50,210,600,50),"Your Longest Word: "+word, mystyle);
		
		color = Color(0.2,0.6,0.1);
		mystyle.normal.textColor = color;
		
		GUI.Label(Rect(50,250,600,50),"Multiplier Earned: "+multiplier+"x",mystyle);
	}	
	if(time > 4.8){
		mystyle.normal.textColor = Color.red;
		GUI.Label(Rect(50,310,600,80),"Final Score: ("+score +"+" + totalnumwords+")x"+multiplier+" = "+
		finalscore, mystyle);
		
		GUI.Label(Rect(50,370,600,80),"Your total credits... " +money+"+"+finalscore
		+"="+(money+finalscore), mystyle);
	}
	
	if(GUI.Button(Rect(840,550,
    160,80),"Menu")){
    	Application.LoadLevel("Menu");
    }
	
	if(GUI.Button(Rect(650,550,160,80),"Play Again?")){
		Application.LoadLevel("VersionLevels");
	}
	
}
// Update is called once per frame
function Update () {
	time = Time.timeSinceLevelLoad;
}

