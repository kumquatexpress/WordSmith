#pragma strict

//Font(appearance only) for the labels
var headingFont: Font;
var font: Font;

//Rectangle placement for labels of powerups

var locationSlow : Rect = Rect(0, 50, 200, 60);
var locationSpeed : Rect = Rect(0, 200, 200, 60);
var locationDouble : Rect = Rect(0, 350, 200, 60);

var slowTag : Rect = Rect(0, 130, 800, 60);
var speedTag: Rect = Rect(0, 280, 800, 60);
var doubleTag: Rect = Rect(0, 430, 800, 60);

var powerupTag: Rect = Rect(0, 0, 200, 60);
var subheading1 : String = "Powerups";

//Strings for the labels

var slowLabel : String = "Slows letters for a period of time.";
var speedLabel: String = "Increases the speed of your catcher for a period of time.";
var doubleLabel: String = "Some letters are generated with double their point value.";

//Scripting starts here

function OnGUI(){

//Use this to transform current screen size proportional to a 1024x600 screen
var horizRatio : float = Screen.width / 1024.0;
var vertRatio : float  = Screen.height / 640.0;
GUI.matrix = Matrix4x4.TRS (Vector3(0, 0, 0), Quaternion.identity, Vector3 (horizRatio, vertRatio, 1));

//Makes letters appear white/visible
var mystyle : GUIStyle = new GUIStyle();
mystyle.font = font;
mystyle.normal.textColor = Color.white;
mystyle.font = headingFont;

//Instantiate labels and their corresponding buttons. Buttons are 
//created with an onclick function automatically.
GUI.Label(powerupTag, subheading1, mystyle);
GUI.Label(slowTag, slowLabel, mystyle);
GUI.Label(speedTag, speedLabel, mystyle);
GUI.Label(doubleTag, doubleLabel, mystyle);

	if(GUI.Button(Rect(900,600,
    120,40),"Back")){
    	Application.LoadLevel("Menu");
    }
    if(GUI.Button(locationSlow, "Purchase")){
    }
    if(GUI.Button(locationSpeed, "Purchase")){
    }
    if(GUI.Button(locationDouble, "Purchase")){
    }
}

function Start () {

}

function Update () {

}