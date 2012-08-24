#pragma strict
static var SPEED : float = 12.0;


function Start () {

}

function Update () {
	var x : float = Input.GetAxis("Horizontal") * Time.deltaTime * SPEED;
	
	if((!(this.gameObject.transform.position.x < -8) && x < 0) || 
	(!(this.gameObject.transform.position.x > 8) && x > 0)){
		transform.Translate(x, 0, 0);
	}	
	var dir : Vector3 = Vector3.zero;
	dir.x = -Input.acceleration.y;
	
	var y : float = dir.x * Time.deltaTime * SPEED;
	if((!(this.gameObject.transform.position.x < -8) && y < 0) || 
	(!(this.gameObject.transform.position.x > 8) && y > 0)){
		if(dir.x > 0.02){
			transform.Translate((y*2),0,0);
		}
		if(dir.x < -0.02){
			transform.Translate((y*2),0,0);
		}
	}
}

function cutoff(i : float){
	if(i < 30 || i > -30){
		return i;
	}
	else if (i > 30){
		return 30;
	}
	else if (i < -30){
		return -30;
	}
} 