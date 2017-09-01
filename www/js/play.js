var names = JSON.parse(window.sessionStorage.getItem("names"));
function play() {
    document.getElementById("test").innerHTML = ""; // Clears the screen from previous 'play' call
    var numberOfTurns = Math.floor(Math.random() * (25-15) + 15); //Randomly picks a number between 15-25
    var currentTurn = 1;
    var iter = 0;
    document.getElementById("demo").innerHTML = "Players: "+names;

    while(currentTurn <= numberOfTurns) {
      if(iter<=names.length-1) {
        var para = document.createElement("p");                                                  // Create a <p> node
        var t = document.createTextNode("Current Turn: "+currentTurn+ " Player Name: "+names[iter];               // Create a text node
        para.appendChild(t);                                                                     // Append the text to <p>
        document.getElementById("test").appendChild(para);                                       // Append <p> to <div> with id="myDIV"
        // Insert "Next Turn" button features below
        // "Play" button should disappear and "Next Turn" button should appear
        // When game is over, "Play" button should reappear and "Next Turn" should disappear


        currentTurn++;
        iter++;
      }
      else {
        iter = 0;
      }
    }
    document.getElementById("endgame").innerHTML = names[iter-1] + " YOU LOST!";
}
