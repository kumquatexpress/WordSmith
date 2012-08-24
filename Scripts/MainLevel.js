static var score : int;
static var longestword : String = "";
static var slowed : boolean;
static var spedup : boolean;
static var totalnumwords : int;

var font : Font;

static var endSlow : float;
static var endSpeed : float;

//double buff goes here
static var doubled : boolean = false;
static var doublecount : int = 0;

//second part of ongui functions
var lettertext : String = "";
var scoretext : String = "";
var tempscoretext: String = "";
var templongestword : String = "";
var showword : boolean;
var showwordscore : String = "";

// Use this for initialization
function Start () {
	slowed = false;
	spedup = false;
	score = 0;
	longestword = "";
	totalnumwords = 0;
}

function OnGUI(){	
	var horizRatio : float = Screen.width / 1024.0;
	var vertRatio : float  = Screen.height / 640.0;
	GUI.matrix = Matrix4x4.TRS (Vector3(0, 0, 0), Quaternion.identity, Vector3 (horizRatio, vertRatio, 1));

	var mystyle : GUIStyle = new GUIStyle();
	mystyle.font = font;
	mystyle.normal.textColor = Color.red;
	if(slowed){
		GUI.Label(Rect(30, 150, 135, 50), "Slow: "+(endSlow-Time.timeSinceLevelLoad), mystyle);
	}
	if(spedup){
		mystyle.normal.textColor = Color.green;
		GUI.Label(Rect(30,200,155,50), "Sped up: "+(endSpeed-Time.timeSinceLevelLoad), mystyle);
	}
	if(doubled){
		mystyle.normal.textColor = Color.cyan;
		GUI.Label(Rect(30,250,155,70), "2x Letters \nLeft: "+doublecount, mystyle);
	}
	
	var mystyle2 : GUIStyle = new GUIStyle();
	mystyle2.font = font;
	mystyle2.normal.textColor = Color.white;

	//instantiates the letter display and the score display
	GUI.Label(Rect(10, 10, 300,150), lettertext, mystyle2);
	GUI.Label(Rect(780,10,300,40), scoretext, mystyle2);
	GUI.Label(Rect(250,0,400,40), templongestword, mystyle2);
	
	if(showword){
		var showstyle : GUIStyle = new GUIStyle(mystyle2);
		showstyle.normal.textColor = Color.green;
		GUI.Label(Rect(10,420,400,120), showwordscore, showstyle);
	}
	
	if(Application.loadedLevelName.Equals("VersionEndless")){
		//ENDLESS MODE GUILABEL FOR LIVES
		mystyle.normal.textColor = Color.cyan;
		GUI.Label(Rect(870,480,150,40), "Lives left: "+LetterHolderEndless.livesleft, mystyle);
	}
	
	if(LetterHolder.letters.length > 4){
	GUI.color = Color.red;
	}
	else{
	GUI.color = Color.white;
	}

	GUI.Label(Rect(682,50,400,40), tempscoretext, mystyle2);
}

// Update is called once per frame
function Update () {
	if(Application.loadedLevelName.Equals("VersionLevels")){
		lettertext = LetterHolder.lettertext;
		scoretext = LetterHolder.scoretext;
		tempscoretext = LetterHolder.tempscoretext;
		templongestword = LetterHolder.longestword;
		showword = LetterHolder.showword;
		showwordscore = LetterHolder.showwordscore;
	}
	if(Application.loadedLevelName.Equals("VersionEndless")){
		lettertext = LetterHolderEndless.lettertext;
		scoretext = LetterHolderEndless.scoretext;
		tempscoretext = LetterHolderEndless.tempscoretext;
		templongestword = LetterHolderEndless.longestword;
		showwordscore = LetterHolderEndless.showwordscore;
		showword = LetterHolderEndless.showword;
	}
	if(Time.timeSinceLevelLoad > endSlow && !ReturnToMenu.paused){
		slowed = false;
		Time.timeScale = 1.0;
	}
	if(Time.timeSinceLevelLoad > endSpeed && !ReturnToMenu.paused){
		spedup = false;
		CarMovement.SPEED = 12.0;
	}
	if(Application.loadedLevelName.Equals("VersionLevels")){
		if(Timer.gameEnd){
			Time.timeScale = 0;
			score = LetterHolder.gameScore;
			Application.LoadLevel("ResultsPage");
		}
	}
	if(Application.loadedLevelName.Equals("VersionEndless")){
		if(LetterHolderEndless.livesleft < 1){
			Time.timeScale = 0;
			score = LetterHolderEndless.gameScore;
			Application.LoadLevel("ResultsPageEndless");
		}
	}
}

static function newLongestWord(s: String){
	longestword = s;
}

static function addWord(){
	totalnumwords += 1;
}