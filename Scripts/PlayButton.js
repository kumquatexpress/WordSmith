#pragma strict
/* 
 * This is the main script for the front menu of the game
 */


//Appearances of the buttons on the front menu
var font : Font;
var playbutton: Texture2D;
var playbuttonClicked: Texture2D;
var timebutton: Texture2D;
var optionsbutton: Texture2D;
var storebutton: Texture2D;
var pictureBackground: Texture2D;
var title: Texture2D;


function Start () {

}
function Update () {

}

//What happens when the GUI loads, beginning of scripting

function OnGUI(){

//Transforms to fit screen dimensions from a 1024x600 screen default
var horizRatio : float = Screen.width / 1024.0;
var vertRatio : float  = Screen.height / 640.0;
GUI.matrix = Matrix4x4.TRS (Vector3(0, 0, 0), Quaternion.identity, Vector3 (horizRatio, vertRatio, 1));
 
 var mystyle : GUIStyle = new GUIStyle();
 mystyle.font = font;
 mystyle.alignment = TextAnchor.MiddleCenter;
 mystyle.normal.textColor = Color.black;
 mystyle.normal.background = playbutton;
 mystyle.hover.background = playbuttonClicked;

//Draws the initial background and the title
GUI.DrawTexture(Rect(0,0,1024,640), pictureBackground);
GUI.Label(Rect(0,28,800,200), title);

	//initializes buttons and gives them the onclick definition
    if (GUI.Button(Rect(50,165,400,80),"Play (Endless Mode)", mystyle)){
        Application.LoadLevel("LoadingEndless");
    }
    if(GUI.Button(Rect(50,255,400,80),"Play Time Trials", mystyle)){
    	Application.LoadLevel("Loading");
    }
    if (GUI.Button(Rect(50,345,400,80),"Tutorial", mystyle)){
        Application.LoadLevel("LoadingTutorial");
        }
    if (GUI.Button(Rect(50,435,400,80),"Store", mystyle)){
        Application.LoadLevel("Menu");
        Application.LoadLevel("Store");
        }
    if (GUI.Button(Rect(900,600,120,40), "Reset my account")){
    	PlayerPrefs.DeleteAll();
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
			PlayerPrefs.SetInt("HighScore", 0);
		}
    }
}