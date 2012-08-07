#pragma strict

var MenuButton : boolean = false;
var title : String = "Pause";
var timer : Timer;

function Start () {
timer = GameObject.FindGameObjectWithTag("MainCamera").GetComponent("Timer");
Time.timeScale = 1;
}

function OnGUI(){
	if(Time.timeScale != 0){
	    if (GUI.Button(Rect(5*Screen.width/6,7*Screen.height/8, Screen.width/6,Screen.height/8),"Pause")){		
	    	if(Time.timeScale == 0){
				Time.timeScale = 1;
			}	
			else{
				Time.timeScale = 0;
			}
	   }
	}
    if(Time.timeScale == 0){
	    if(GUI.Button(Rect(5*Screen.width/6,6*Screen.height/8,
	    Screen.width/6,Screen.height/8),"Exit to Menu")){
	    	Application.LoadLevel("Menu");
	    	MenuButton = false;
	    }
	    if(GUI.Button(Rect(5*Screen.width/6,7*Screen.height/8,
	    Screen.width/6,Screen.height/8),"Resume")){
	    	MenuButton = false;
	    	Time.timeScale = 1;
	    }
   	}
}

function Update () {
		if(timer.gameEnded()){
			title = "Menu";
		}
}