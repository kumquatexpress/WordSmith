#pragma strict

var MenuButton : boolean = false;
var title : String = "Pause";
var timer : Timer;

function Start () {
timer = GameObject.FindGameObjectWithTag("MainCamera").GetComponent("Timer");
Time.timeScale = 1;
}

function OnGUI(){
    if (GUI.Button(Rect(5*Screen.width/6,7*Screen.height/8, Screen.width/6,Screen.height/8),title)){		
		if(title == "Menu"){
			Application.LoadLevel("Menu");
		}
    	else if(Time.timeScale == 0){
			MenuButton = true;
			title = "Resume";
			Time.timeScale = 1;
		}	
		else{
			Time.timeScale = 0;
			title = "Pause";
		}
	    if (MenuButton){
		    	if(GUI.Button(Rect(5*Screen.width/6,7*Screen.height/8,
		    Screen.width/6,Screen.height/8),"Menu")){
		    	Application.LoadLevel("Menu");
		    	MenuButton = false;
		    }
		    	if(GUI.Button(Rect(5*Screen.width/6,6*Screen.height/8,
		    Screen.width/6,Screen.height/8),"Resume")){
		    	MenuButton = false;
		    	Time.timeScale = 1;
		    }
   		}
   	
   }
}

function Update () {
		if(timer.gameEnded()){
			title = "Menu";
		}
}