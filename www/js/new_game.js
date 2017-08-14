var names = [];
//Function checks if enough players exist
function numPeople() {
    var num = 0;
    num = document.getElementById("num").value;
    playable = ((num <= 15) && (num >= 3)) ? "Lets play!":"Not enough/Too many players...";
    document.getElementById("checkP").innerHTML = playable;
}

//Only a sudo function, complete function will be finished later on
function addName() {
    var player_name = document.getElementById("player_name");
    var name = player_name.value;
    if(name != "") {
      names.push(name);
      player_name.value = "";
    }
    document.getElementById("pList").innerHTML = names;
}

function deleteName() {
    var player_name = document.getElementById("player_name");
    var name = player_name.value;
    if(names.indexOf(name) > -1) {
      names.splice(names.indexOf(name),1); //Using splice method to remove name from names array
    }
    document.getElementById("pList").innerHTML = names;
}
