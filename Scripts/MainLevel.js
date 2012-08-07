static var score : int;
static var longestword : String;
static var slowed : boolean;
static var spedup : boolean;

static var endSlow : float;
static var endSpeed : float;


// Use this for initialization
function Start () {
	slowed = false;
	spedup = false;
	score = 0;
	longestword = "";
}

// Update is called once per frame
function Update () {
	if(Time.time > endSlow){
		slowed = false;
		Time.timeScale = 1.0;
	}
	if(Time.time > endSpeed){
		spedup = false;
		CarMovement.SPEED = 10.0;
	}
	if(Timer.gameEnd){
		score = LetterHolder.gameScore;
		Application.LoadLevel("ResultsPage");
	}
}

static function newLongestWord(s: String){
	longestword = s;
}

static function buffs(){
	var s : String = "";
	if(slowed){
		s += "Slowed \n";
	}
	if(spedup){
		s += "Spedup \n";
	}
	return s;
}