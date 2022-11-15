import {selectCountry} from "./loadJSON.js";

window.addEventListener("load", setup); 
var count = 0;
var country;
function setup(){
    openIntroModal();
    addListeners();
    country = selectCountry();
    main();
}

function addListeners(){
    let btn = document.getElementById("submit");
    //btn.addEventListener("click", retrieveInput);
    
    
    document.getElementById("regionButt").addEventListener("click", reg )
    document.getElementById("popButt").addEventListener("click", pop )
    document.getElementById("exportButt").addEventListener("click", exp )
    document.getElementById("originButt").addEventListener("click", orig )
    document.getElementById("foodButt").addEventListener("click", food)
    document.getElementById("languageButt").addEventListener("click", lang )
    document.getElementById("capitalButt").addEventListener("click", cap )
    document.getElementById("currButt").addEventListener("click", curr)
    document.getElementById("lmarkButt").addEventListener("click", mark )
   

}

function main(){
    
}

function createHint(cnt){
    var clue;
    switch (cnt) {
        case 0:
            clue = "This country is in " + country.Region;
            console.log("Is it me?");
            document.getElementById("regionButt").disabled = true;
            break;
        case 1:
            clue = "This country has a population of " + country.Population + " people";
            document.getElementById("popButt").disabled = true;
            break;
        case 2:
            clue = "This country's top export is ";
            document.getElementById("exportButt").disabled = true;
            break;
        case 3:
            clue = "This country's independence/origin date is ";
            document.getElementById("originButt").disabled = true;
            break;
        case 4:
            clue = "This country's national dish is ";
            document.getElementById("foodButt").disabled = true;
            break;
        case 5:
            clue = "The official language of this country is ";
            document.getElementById("languageButt").disabled = true;
            break;
        case 6:
            clue = "The capital of this country is  ";
            document.getElementById("capitalButt").disabled = true;
            break;        
        case 7:
            clue = "The currency of this country is ";
            document.getElementById("currButt").disabled = true;
            break;       
        case 8:
            clue = "One of the most well known landmarks in this country is ";
            document.getElementById("lmarkButt").disabled = true;
            break;
    }
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

function reg(){createHint(0)};
function pop(){createHint(1)};
function exp(){createHint(2)};
function orig(){createHint(3)};
function food(){createHint(4)};
function lang(){createHint(5)};
function cap(){createHint(6)};
function curr(){createHint(7)};
function mark(){createHint(8)};