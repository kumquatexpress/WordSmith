
var font : Font;

var letters = new Array();
var score = 0;
var tempscore = 0;

var timer : Timer;

var lettertext : String = "";
var scoretext : String = "";
var tempscoretext: String = "";
// Use this for initialization

function Start(){
	timer = GameObject.FindGameObjectWithTag("MainCamera").GetComponent("Timer");
}

function OnGUI () {

	var horizRatio : float = Screen.width / 1024.0;
	var vertRatio : float  = Screen.height / 600.0;
	GUI.matrix = Matrix4x4.TRS (Vector3(0, 0, 0), Quaternion.identity, Vector3 (horizRatio, vertRatio, 1));
	
	var mystyle : GUIStyle = new GUIStyle();
	mystyle.font = font;
	mystyle.normal.textColor = Color.white;

	//instantiates the letter display and the score display
	GUI.Label(Rect(10, 10, 300,150), lettertext, mystyle);
	GUI.Label(Rect(780,10,300,40), scoretext, mystyle);
	
	if(letters.length > 3){
	GUI.color = Color.red;
	}
	else{
	GUI.color = Color.white;
	}

	GUI.Label(Rect(682,50,400,40), tempscoretext, mystyle);
	
}

// Update is called once per frame
function Update () {
	lettertext = "Letters: " + '\n' + getText();
	scoretext = "Score: " + score.ToString();
	tempscoretext = "Current Value: " + calculateValue(tempscore);
	if(Input.GetKey(KeyCode.Space)){
		if(Dictionary.checkForWord(getWord())){
			submitWord();
		}
		else{
			clearLetters();
			tempscore = 0;
		}
	}
	if(Input.touchCount  == 1){
		if(Dictionary.checkForWord(getWord())){
			submitWord();
		}
		else {
			clearLetters();
			tempscore = 0;
		}
	}

}

function addLetter(s: String){
	//Letterscore is the default value of the letter before any bonuses are applied	
	var letterscore : int;
	if(letters.length < 12){
		letters.push(s);
		switch(s.ToUpper()){
			case "A": case "E": case "I": case "O": 
			case "N": case "R": case "T": case "L": case "S": case "U": letterscore += 1; break;
			case "D": case "G": letterscore +=2; break;
			case "B": case "C": case "M": case "P": letterscore +=3; break;
			case "F": case "H": case "V": case "W": case "Y": letterscore +=4; break;
			case "K": letterscore += 5; break;
			case "J": case "X": letterscore += 8; break;
			case "Q": case "Z": letterscore += 10; break;
		}
	}
	//add letterscore to the score display
	tempscore += letterscore;
}

function calculateValue( i : int){
	if(getLength() > 3){
		if(getLength() > 5){
			if(getLength() > 7){
				return tempscore.ToString() + "(x4)";
			}
			return tempscore.ToString() + "(x3)";
		}
		return tempscore.ToString() + "(x2)";
	}
	return tempscore.ToString();
}

function calculateValueInt(i : int){
	if(getLength() > 3){
		return i*2;
	}
	if(getLength() > 5){
		return i*3;
	}
	if(getLength() > 7){
		return  i*4;
	}
	return i;
}

function clearLetters(){
letters = [];
}

function getText(){
	var text = "";
	for(var i = 0; i < letters.length; i += 1){
	text = text + " " + letters[i];
	}
	return text;
}

function getWord(){
	var word = "";
	for(var i = 0; i < letters.length; i++){
	word = word + letters[i];
	}
	return word;
}

function getLength(){
	return letters.length;
}

function submitWord(){
	score += calculateValueInt(tempscore);
	if(getLength() > 4){
		timer.addTime(10);
	}
	clearLetters();
	tempscore = 0;
}