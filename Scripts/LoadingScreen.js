
// Use this for initialization
function Start () {
}

// Update is called once per frame
function Update () {
	if(Dictionary.getWords() > 10000){
		Application.LoadLevel("VersionLevels");
	}
}

