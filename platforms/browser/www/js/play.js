var names = JSON.parse(window.sessionStorage.getItem("names"));
function play() {
    var numberOfTurns = Math.floor(Math.random() * (25-15) + 15); //Randomly picks a number between 15-25

    document.getElementById("demo").innerHTML = names;
}
