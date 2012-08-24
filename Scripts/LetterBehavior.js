#pragma strict
var projectile : GameObject;
var x : int = 0;
static var SPEED : float = -7.0;
var SPEEDCHANGE : float = 3.0;
var TIMEINTERVAL : float = 10;

function Start () {
	projectile.name = projectile.name.Substring(0,1);
}

function Awake(){
	if(Application.loadedLevelName.Equals("VersionEndless")){
		SPEED = -5.0;
		SPEEDCHANGE = 2.0;
		TIMEINTERVAL = 20;
		LetterGenerator.TIMEINTERVAL = 20;
		LetterGenerator.spawntime = 1.1;
		LetterGenerator.spawntimeminus = .15;
		LetterGenerator.spawntime2 = 1.48;
		LetterGenerator.spawntime2minus = .161;
	}
	if(Application.loadedLevelName.Equals("VersionLevels")){
		SPEED = -7.0;
		SPEEDCHANGE = 0;
		TIMEINTERVAL = 500;
	}
}
//Called continuously at the beginning of every frame
function Update () {
        // Give the cloned object an initial velocity along the current 
        // object's Z axis
        
        //Every 30 seconds, increase speed by 3 
    x = SPEED - SPEEDCHANGE*(Time.timeSinceLevelLoad/TIMEINTERVAL);
	if(x < -25){
        x = -25;
    }
        //If the slowdown buff is applied, reduce speed
  	projectile.rigidbody.velocity = Vector3(0,0,x); 

    if(projectile.transform.position.z < -27){
        Destroy(projectile);
    }     
}


//Called when the letter touches the trigger contained in the holder
function OnTriggerEnter(other : Collider)
{       
	Destroy(projectile);
	if(Application.loadedLevelName.Equals("VersionLevels")){
    	GameObject.FindWithTag("MainCamera").GetComponent(LetterHolder).addLetter(projectile.name);
    }
    if(Application.loadedLevelName.Equals("VersionEndless")){
    	GameObject.FindWithTag("MainCamera").GetComponent(LetterHolderEndless).addLetter(projectile.name);
    }
    if(Application.loadedLevelName.Equals("VersionTutorial")){
    	GameObject.FindWithTag("MainCamera").GetComponent(LetterHolderTutorial).addLetter(projectile.name);
    }
}

