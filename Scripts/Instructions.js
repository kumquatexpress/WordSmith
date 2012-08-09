#pragma strict

var text : GUIText;
var font : Font;
var color : Color;
var textstring : String = "";
var righttextstring : String = "";
var time : float;

function Start () {
	color = Color(0.7,0.4,0);
	text.material.color = color;
}

function OnGUI(){

	var horizRatio : float = Screen.width / 1024.0;
	var vertRatio : float  = Screen.height / 640.0;
	GUI.matrix = Matrix4x4.TRS (Vector3(0, 0, 0), Quaternion.identity, Vector3 (horizRatio, vertRatio, 1));

	 var mystyle : GUIStyle = new GUIStyle();
	 mystyle.font = font;
	 mystyle.normal.textColor = color;

	GUI.Label(Rect(670,150,330,300), righttextstring, mystyle);
	GUI.Label(Rect(20,70,350,300), textstring, mystyle);
}

function Update () {
	time = Time.timeSinceLevelLoad - 2;
	if(time > 25 && time < 30){
		righttextstring = "This is how much time \n you have until the game ends.";
	}
	if(time > 30 && time < 40){
		righttextstring = "";
	}
	if(time > 40 && time < 44){
		righttextstring = "Earn bonuses for longer words!";
	}
	if(time > 44 && time < 50){
		righttextstring = "Starting at 4 letters, you'll \n gain a multiplier \n to your word score.";
	}
	if(time > 50 && time < 55){
		righttextstring = "5 letters and above gives \n you a 10 second bonus to \n the clock.";
	}	
	if(time > 55){
		righttextstring = "";
	}
	if(time < 3){
		textstring = "Welcome to WordSmith!";
	}	
	else if(time > 3 && time < 6){
		textstring = "Use the left and right \n arrow keys to move around.";
	}
	else if(time > 6 && time < 9){
		textstring = "Letters will fall. \n Catch them to spell words.";
	}
	else if(time > 9 && time < 12){
		textstring = "Press space to submit a word.";
	}
	else if(time > 12 && time < 15){
		color = Color.green;
		textstring = "If your word exists \n you get points!";
	}
	else if(time > 15 && time < 18){
		color = Color.red;
		textstring = "If not, you'll have to start \n collecting letters again.";
	}
	else if(time > 18 && time < 21){
		color = Color.green;
		textstring = "Get Ready!";
	}
	else if(time > 21 && time < 30){
		textstring = "";
	}
	else if(time > 30 && time < 36){
		color = Color.blue;
		textstring = "You can use the store to \n increase the spawn chance of \n"+
		"buffs like this speed buff.";
	}
	else if(time > 36 && time < 60){
		textstring = "";
	}
	else if (time > 60){
		textstring = "That's about it; \n return to the menu via \n the pause button.";
	}
}