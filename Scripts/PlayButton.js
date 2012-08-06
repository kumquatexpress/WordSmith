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
 mystyle.normal.textColor = Color.white;
 mystyle.normal.background = playbutton;
 mystyle.onActive.background = playbuttonClicked;

//Draws the initial background and the title
GUI.DrawTexture(Rect(0,0,1024,640), pictureBackground);
GUI.Label(Rect(130,0,800,200), title);

	//initializes buttons and gives them the onclick definition
    if (GUI.Button(Rect(50,165,400,80),"Play", mystyle)){
    if(Dictionary.getWords() == 0){
        Application.LoadLevel("Loading");
        }
        else {
        Application.LoadLevel("VersionLevels");
        }
    }
    if (GUI.Button(Rect(50,255,400,80),"Time Trials", mystyle)){
        Application.LoadLevel("Menu");
        }
    if (GUI.Button(Rect(50,345,400,80),"Options", mystyle)){
        Application.LoadLevel("Menu");
        }
    if (GUI.Button(Rect(50,435,400,80),"Store", mystyle)){
        Application.LoadLevel("Menu");
        Application.LoadLevel("Store");
        }
}