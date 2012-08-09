var theTexture : Texture2D;
private var StartTime : float;

function OnLevelWasLoaded(){
	if(Time.timeScale != 1){
		Time.timeScale = 1;
	}
	StartTime = Time.time;
}

// Use this for initialization
function Start () {
}

// Update is called once per frame
function Update () {
	if(Time.time-StartTime >= 7){
		Destroy(gameObject);
	}
}

function OnGUI(){
	GUI.color = Color.white;
	GUI.color.a = Mathf.Lerp(1.0, 0.0, (Time.time-StartTime));
	GUI.DrawTexture(Rect( 0, 0, Screen.width,
	Screen.height ), theTexture);
}
