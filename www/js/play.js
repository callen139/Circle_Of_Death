var names = JSON.parse(window.sessionStorage.getItem("names"));
function play() {
    document.getElementById("turn-list").innerHTML = ""; // Clears the screen from previous 'play' call
    document.getElementById("players-list").innerHTML = "Players: "+names;

    var numberOfTurns = Math.floor(Math.random() * (25-15) + 15); //Randomly picks a number between 15-25
    var currentTurn = 1;
    var iter = 0;
    var currentGameData = {}; // { currentTurn | playerName | randomCard }

    while(currentTurn <= numberOfTurns) {
      if(iter<=names.length-1) {
        var randomCardNumber = Math.floor(Math.random() * (52-1) + 1); //Randomly picks a number between 1-52
        var randomCard = assignCard(randomCardNumber);
        // Create list of turns, show currentTurn and playerName
        var para = document.createElement("p");
        var t = document.createTextNode("Current Turn: "+currentTurn+ " Player Name: "+names[iter]+" Card: "+randomCard);
        para.appendChild(t);
        document.getElementById("turn-list").appendChild(para);

        // Insert "Next Turn" button features
        // "Play" button should disappear and "Next Turn" button should appear
        // When game is over, "Play" button should reappear and "Next Turn" should disappear

        currentTurn++;
        iter++;
      }
      else
        iter = 0;
    }
    document.getElementById("endgame").innerHTML = names[iter-1] + " YOU LOST!";
}

function assignCard(rcn) { //rcn = random card number
    var card = "";
  // Deciding the suite of the card
    if(rcn >= 1 && rcn <= 13)
      card = "Spade";
    if(rcn >= 14 && rcn <= 26)
      card = "Heart";
    if(rcn >= 27 && rcn <= 39)
      card = "Diamond";
    if(rcn >= 37 && rcn <= 52)
      card = "Club";

// Deciding the value of the card
    var tempNum = rcn % 13;
    if(tempNum == 11)
      card += ",Jack";
    if(tempNum == 12)
      card += ",Queen";
    if(tempNum == 0)
      card += ",King";
    if(tempNum <= 10 && tempNum !== 0)
      card += ","+tempNum.toString();
return card;
}


function exitGame() {
    clearStorage();
    window.location.href = "index.html";
}

function clearStorage() {
    window.sessionStorage.clear();
}
