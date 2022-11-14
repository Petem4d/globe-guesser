import {selectCountry} from "./loadJSON.js";

window.addEventListener("load", setup); 
var count = 0;
var country;
function setup(){
    openIntroModal();
    addListeners();
    country = selectCountry();
    console.log(country);
    main();
}

function addListeners(){
    let btn = document.getElementById("submit");
    btn.addEventListener("click", retrieveInput);
}

function main(){
    createHint(0);
    
}

function createHint(cnt){
    let mainDiv = document.getElementById("Wrapper"); 
    //let newDiv = document.createElement("div");
    let header = document.createElement("h3");
    var clue;
    switch (cnt) {
        case 0:
            clue = "This country is in " + country.Region;
            break;
        case 1:
            clue = "This country has a population of " + country.Population + " people";
            break;
        case 2:
            clue = "This country has an area of " + country["Area (sq. mi.)"] + " square miles";
            break;
        case 3:
            clue = "This country has a population density of " + country["Pop. Density (per sq. mi.)"] + " people per square miles";
            break;
        case 4:
            clue = "This country has " + country["Coastline (coast/area ratio)"] + " miles of coastline";
            break;
        case 5:
            clue = "This country has a GDP of $" + country["GDP ($ per capita)"] + " per capita";
            break;
    }
    header.innerHTML = clue;
    mainDiv.appendChild(header);
}

function retrieveInput(){
    let guess = document.getElementById("userGuess").value;
    let result = country.Country;
    let output = document.createElement("text");
    if (guess == result) {
        openModalWin();
    } else {
        count ++;
        createHint(count);
    }
}
function openModalWin(){
    var myModal = new bootstrap.Modal(document.getElementById("winModal"));
    let guess = document.getElementById("userGuess").value;
    let score = document.getElementById("addScore");
    let country = document.getElementById("correctCountry");
    var correctCountry = toString(country.Country);
    country.innerHTML = "Correct Country: " + guess;
    score.innerHTML = calculateScore();
    myModal.show();
    let playAgainBtn = document.getElementById("playAgain");
    playAgainBtn.addEventListener("click", playAgain);
}

function openModalLose(){

}

function openIntroModal() {
    var myModal = new bootstrap.Modal(document.getElementById("introModal"));
    myModal.show();
}
function playAgain(){
    console.log("play again");
}

function calculateScore() {
    return count;
}
