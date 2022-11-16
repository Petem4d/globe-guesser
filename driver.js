import {selectCountry} from "./loadJSON.js";

window.addEventListener("load", setup); 
var count = 0;
var country;
var runs = 0;
var currQuest;
function setup(){
    country = selectCountry();
    console.log(country);
    openIntroModal();
    addListeners();
}

function addListeners(){
    document.getElementById("countryGuess").addEventListener("click", retrieveInput);
    document.getElementById("regionButt").addEventListener("click", reg )
    document.getElementById("popButt").addEventListener("click", pop )
    document.getElementById("currButt").addEventListener("click", curr)
    document.getElementById("foodButt").addEventListener("click", food)
    document.getElementById("funButt").addEventListener("click", fun)
    document.getElementById("languageButt").addEventListener("click", lang )
    document.getElementById("capitalButt").addEventListener("click", cap )
    document.getElementById("fameButt").addEventListener("click", fame)
    document.getElementById("lmarkButt").addEventListener("click", mark )
    document.getElementById("floatingInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("countryGuess").click();
        }
    })
}


function retrieveInput(){
    let guess = document.getElementById("floatingInput").value;
    let result = country.Country;
    updateScore();
    if(runs == 1){
        document.getElementById("wrongAnswersTitle").innerHTML = "Previous Guesses"
    }
    if (guess == result) {
        let oldHintList = document.getElementById("usedHint");
        let listElement1 = document.createElement('li');
        listElement1.innerHTML = currQuest;
        oldHintList.appendChild(listElement1);
        let answerList = document.getElementById("wrongAnswers");
        let listElement = document.createElement('h5');
        listElement.style.color = "green";
        listElement.innerHTML = guess;
        answerList.appendChild(listElement);
        openModalWin(result);
    } else {
        let oldHintList = document.getElementById("usedHint");
        let listElement1 = document.createElement('li');
        listElement1.innerHTML = currQuest;
        oldHintList.appendChild(listElement1);

        let answerList = document.getElementById("wrongAnswers");
        let listElement2 = document.createElement('h5');
        listElement2.style.color = "red";
        listElement2.innerHTML = guess;
        answerList.appendChild(listElement2);

        if(runs == 9){
            openModalLose();
        }
    }
}
function openModalWin(result){
    endgame();
    var myModal = new bootstrap.Modal(document.getElementById("winModal"));
    let score = document.getElementById("addScore");
    let countryName = document.getElementById("correctCountry");
    countryName.innerHTML = "Correct Country: " + result;
    score.innerHTML = 100-count;
    myModal.show();
    document.getElementById("playAgain").addEventListener("click", playAgain);
}

function openModalLose(){
    endgame();
    var myModal = new bootstrap.Modal(document.getElementById("loseModal"));
    let countryP = document.getElementById("correctCountryLose");
    countryP.innerHTML = "The correct country was: " + country.Country;
    myModal.show();
    let playAgainBtn = document.getElementById("playAgainLose");
    playAgainBtn.addEventListener("click", playAgain);
}

function openIntroModal() {
    var myModal = new bootstrap.Modal(document.getElementById("introModal"));
    myModal.show();
}

function openQuestionModal(text, question){
    runs += 1;
    let myModal = new bootstrap.Modal(document.getElementById("modalQuestion"));
    let hint = document.getElementById("hint")
    let typeQuestion = document.getElementById("questionTypeLabel");
    typeQuestion.innerHTML = question;
    hint.innerHTML = text;
    myModal.show();
    currQuest = question + ": " + text;

}

function playAgain(){
    location.reload();
}


function updateScore(){
    document.getElementById("currScore").innerHTML = "Your Current Score: " + (100-count);
}

function endgame(){
    let playAgainButt = document.createElement("button");
    playAgainButt.innerHTML = "Play Again?";
    playAgainButt.setAttribute("class", "btn btn-secondary")
    document.getElementById("playAgainHome").appendChild(playAgainButt);
    playAgainButt.addEventListener("click", playAgain);
    
}
function reg(){
    let clue = "This country is in " + country.Region;
    document.getElementById("regionButt").disabled = true;
    let question = "REGION";
    count += 5;
    openQuestionModal(clue, question);
}
function pop(){
    let clue = "This country has a population of " + (country.Population).toLocaleString() + " people";
    document.getElementById("popButt").disabled = true;
    let question = "POPULATION";
    openQuestionModal(clue, question);
    count += 5;
}
function fame(){
    let clue = "A famous person from this country is " + country.Famous;
    document.getElementById("fameButt").disabled = true;
    let question = "FAMOUS PERSON";
    openQuestionModal(clue, question);
    count += 18;
}
function fun(){
    let clue = country.Fun;
    document.getElementById("funButt").disabled = true;
    let question = "FUN FACT";
    openQuestionModal(clue, question);
    count += 9;
}
function food(){
    let clue = "This country's national dish is " + country.Food;
    document.getElementById("foodButt").disabled = true;
    let question = "NATIONAL DISH";
    openQuestionModal(clue, question);
    count += 9;
}
function lang(){
    let clue = "The official language of this country is " + country.Language;
    document.getElementById("languageButt").disabled = true;
    let question = "OFFICIAL LANGUAGE";
    openQuestionModal(clue, question);
    count += 9;
}
function cap(){
    let clue = "The capital of this country is  " + country.Capital;
    document.getElementById("capitalButt").disabled = true;
    let question = "CAPITAL";
    openQuestionModal(clue, question);
    count += 18;
}
function curr(){
    let clue = "The currency of this country is the " + country.Currency;
    document.getElementById("currButt").disabled = true;
    let question = "CURRENCY";
    openQuestionModal(clue, question);
    count += 5;
}
function mark(){
    let clue = "One of the most well known landmarks in this country is " + country.Landmark;
    document.getElementById("lmarkButt").disabled = true;
    let question = "LANDMARK";
    openQuestionModal(clue, question);
    count += 18;
}