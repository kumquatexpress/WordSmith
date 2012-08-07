#pragma strict
var green : Material;
var blue : Material;
var yellow :Material;
var red : Material;
var purple : Material;
var pink : Material;

var time : float;


function Start () {
time = Time.fixedTime;
}

function Update () {
if (Time.fixedTime - time > Random.value * 15 + 5) {
	renderer.material = randomMaterial();
	time = Time.fixedTime;
	}

}

function randomMaterial(){
var x = Random.value * 6;
if (x < 1) return green;
else if (x <2) return blue;
else if (x <3) return yellow;
else if (x <4) return red;
else if (x <5) return purple;
else if (x <6) return pink;
}