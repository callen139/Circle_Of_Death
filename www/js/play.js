var names = JSON.parse(window.sessionStorage.getItem("names"));
var currentGameData = []; // { currentTurn | playerName | randomCard }
var usedCards = [];
var clicks = 0;
var iter = 0;
var numberOfTurns = Math.floor(Math.random() * (25-15) + 15); //Randomly picks a number between 15-25
var gameItem = makeTurnObject("turn name card");

function play() {
  document.getElementById("turn-list").innerHTML = ""; // Clears the screen from previous 'play' call
  document.getElementById("players-list").innerHTML = "Players: "+names;
  var currentTurn = 1;
  // Insert "Next Turn" button features
  // "Play" button should disappear and "Next Turn" button should appear
  // When game is over, "Play" button should reappear and "Next Turn" should disappear
  while(currentTurn <= numberOfTurns) {
    if(iter<=names.length-1) {
      var randomCardNumber = generateRandomCardNum();

      // Used cards logic seems to work fine. Had a rare case where two players had
      //  the same card after a single turn. Only happened once so not sure what was wrong
      if(checkCard(usedCards, randomCardNumber)) {
        var randomCard = assignCard(randomCardNumber);
        var playerTurnData = new gameItem(currentTurn, names[iter], randomCard);
        currentGameData.push(playerTurnData);
          
        usedCards.push(randomCardNumber);
        currentTurn++;
        iter++;
      }
    }
    else
      iter = 0;
  }
}

function nextTurn() {
  if(clicks < numberOfTurns) {
    var trn = currentGameData[clicks].turn;
    var nm = currentGameData[clicks].name;
    var crd = currentGameData[clicks].card;
  
    // Create list of turns, show currentTurn and playerName
    // TODO -- Create a way to display the selected card PNG
    //  When displaying turn info, only show current, not the whole list
    // How the UI should look:              
    //                                  Turn Info
    //                                  Card PNG
    var para = document.createElement("p");
    var t = document.createTextNode("Current Turn: "+ trn + " Player Name: "+ nm +" Card: "+ crd);
    para.appendChild(t);
    document.getElementById("turn-list").appendChild(para);
  
    clicks += 1;
  }
  else
    document.getElementById("endgame").innerHTML = names[iter-1] + " YOU LOST!";
}

// Create a factory function to collect game data
function makeTurnObject(gameData) {
  var gameData = gameData.split(' ');
  var count = gameData.length;
  function constructor() {
    for (var i = 0; i < count; i++) {
      this[gameData[i]] = arguments[i];
    }
  }
  return constructor;
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
    card += ", Jack";
  if(tempNum == 12)
    card += ", Queen";
  if(tempNum == 0)
    card += ", King";
  if(tempNum <= 10 && tempNum !== 0)
    card += ", "+tempNum.toString();
  return card;
}

function generateRandomCardNum() {
  return Math.floor(Math.random() * (52-1) + 1); //Randomly picks a number between 1-52
}

function checkCard(usedCards, num) {
  for(var x = 0; x < usedCards.length-1; x++) { // Checking if a card has already been used
    if(usedCards[x] == num)
      return false; // Card has been played
  }
  return true; // Card has NOT been played
}

function exitGame() {
  clearStorage();
  window.location.href = "index.html";
}

function clearStorage() {
  window.sessionStorage.clear();
}
