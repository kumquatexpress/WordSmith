#pragma strict

var text : GUIText;


function Start () {

}

function Update () {
if(Time.fixedTime > 5 && Time.fixedTime < 10){
text.text = "This is my take on Scrabble.";
}
if(Time.fixedTime > 10 && Time.fixedTime < 15){
text.text = "Letters will fall. Catch them to spell words." + '\n' +
"Use the left and right arrow keys to move around.";
}
if(Time.fixedTime > 15 && Time.fixedTime < 20){
text.text = "Press space to submit a word and " + '"c"' + '\n' +
"to clear your letters.";
}
if(Time.fixedTime > 20 && Time.fixedTime < 24){
text.text = "Get Ready!";
}

}