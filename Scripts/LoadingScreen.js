
// Use this for initialization
function OnGui(){
	var horizRatio : float = Screen.width / 1024.0;
	var vertRatio : float  = Screen.height / 640.0;
	GUI.matrix = Matrix4x4.TRS (Vector3(0, 0, 0), Quaternion.identity, Vector3 (horizRatio, vertRatio, 1));
	
	GUI.color = Color.white;
	GUI.Label(Rect(350, 250, 400, 150), "Loading Screen");
}


function Start () {
}

// Update is called once per frame
function Update () {
}

