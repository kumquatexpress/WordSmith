static var score : int;
static var longestword : String;
static var slowed : boolean;
static var spedup : boolean;
static var totalnumwords : int;

var font : Font;

static var endSlow : float;
static var endSpeed : float;


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
}

// Update is called once per frame
function Update () {

	if(Time.timeSinceLevelLoad > endSlow && !ReturnToMenu.paused){
		slowed = false;
		Time.timeScale = 1.0;
	}
	if(Time.timeSinceLevelLoad > endSpeed && !ReturnToMenu.paused){
		spedup = false;
		CarMovement.SPEED = 10.0;
	}
	if(Timer.gameEnd){
		Time.timeScale = 0;
		score = LetterHolder.gameScore;
		Application.LoadLevel("ResultsPage");
	}
}

static function newLongestWord(s: String){
	longestword = s;
}

static function addWord(){
	totalnumwords += 1;
}