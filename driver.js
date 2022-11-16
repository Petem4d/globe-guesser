import {selectCountry} from "./loadJSON.js";

window.addEventListener("load", setup); 
var count = 0;
var country;
let win = false;
function setup(){
    country = selectCountry();
    openIntroModal();
    addListeners();
    main();
}

function addListeners(){
    document.getElementById("countryGuess").addEventListener("click", retrieveInput);
    console.log(country);
    document.getElementById("regionButt").addEventListener("click", reg )
    document.getElementById("popButt").addEventListener("click", pop )
    document.getElementById("currButt").addEventListener("click", curr)
    document.getElementById("foodButt").addEventListener("click", food)
    document.getElementById("funButt").addEventListener("click", fun)
    document.getElementById("languageButt").addEventListener("click", lang )
    document.getElementById("capitalButt").addEventListener("click", cap )
    document.getElementById("fameButt").addEventListener("click", fame)
    document.getElementById("lmarkButt").addEventListener("click", mark )
}

function main(){
    
}

function retrieveInput(){
    let guess = document.getElementById("floatingInput").value;
    let result = country.Country;
    if (guess == result) {
        openModalWin(result);
    } else {
        count ++;
        createHint(count);
    }
}
function openModalWin(result){
    let oldModal = document.getElementById("modalQuestion");
    var myModal = new bootstrap.Modal(document.getElementById("winModal"));
    let guess = document.getElementById("floatingInput").value;
    let score = document.getElementById("addScore");
    let country = document.getElementById("correctCountry");
    country.innerHTML = "Correct Country: " + result;
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

function openQuestionModal(text, question){
    let myModal = new bootstrap.Modal(document.getElementById("modalQuestion"));
    let hint = document.getElementById("hint")
    let typeQuestion = document.getElementById("questionTypeLabel");
    typeQuestion.innerHTML = question;
    hint.innerHTML = text;
    myModal.show();
}

function playAgain(){
    console.log("play again");
}

function calculateScore() {
    return count;
}

function reg(){
    let clue = "This country is in " + country.Region;
    document.getElementById("regionButt").disabled = true;
    let question = "REGION";
    openQuestionModal(clue, question);
}

function pop(){
    let clue = "This country has a population of " + country.Population + " people";
    document.getElementById("popButt").disabled = true;
    let question = "POPULATION";
    openQuestionModal(clue, question);
}

function fame(){
    let clue = "A famous person from this country is " + country.Famous;
    document.getElementById("fameButt").disabled = true;
    let question = "FAMOUS PERSON";
    openQuestionModal(clue, question);
}

function fun(){
    let clue = country.Fun;
    document.getElementById("funButt").disabled = true;
    let question = "FUN FACT";
    openQuestionModal(clue, question);
}

function food(){
    let clue = "This country's national dish is " + country.Food;
    document.getElementById("foodButt").disabled = true;
    let question = "NATIONAL DISH";
    openQuestionModal(clue, question);
}

function lang(){
    let clue = "The official language of this country is " + country.Language;
    document.getElementById("languageButt").disabled = true;
    let question = "OFFICIAL LANGUAGE";
    openQuestionModal(clue, question);
}


function cap(){
    let clue = "The capital of this country is  " + country.Capital;
    document.getElementById("capitalButt").disabled = true;
    let question = "CAPITAL";
    openQuestionModal(clue, question);
}

function curr(){
    let clue = "The currency of this country is the " + country.Currency;
    document.getElementById("currButt").disabled = true;
    let question = "CURRENCY";
    openQuestionModal(clue, question);
}

function mark(){
    let clue = "One of the most well known landmarks in this country is " + country.Landmark;
    document.getElementById("lmarkButt").disabled = true;
    let question = "LANDMARK";
    openQuestionModal(clue, question);
}