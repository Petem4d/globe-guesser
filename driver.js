import {selectCountry} from "./loadJSON.js";

window.addEventListener("load", setup); 
var count = 0;
var country;
var runs = 0;
var currQuest;
var countryArr = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Cook Islands","Costa Rica","Cote D Ivoire","Croatia", "Cuba","Cyprus","Czech Republic", "Democratic Republic of Congo", "Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

function setup(){
    country = selectCountry();
    console.log(country);
    openIntroModal();
    addListeners();
    populateList();
}

function addListeners(){
    document.getElementById("countryGuess").addEventListener("click", retrieveInput);
    document.getElementById("xOut").addEventListener("click", closedModal);
    document.getElementById("closeButtQ").addEventListener("click", closedModal);

    document.getElementById("lossClose").addEventListener("click", endgame);
    document.getElementById("winClose").addEventListener("click", endgame);

    document.getElementById("regionButt").addEventListener("click", reg )
    document.getElementById("popButt").addEventListener("click", pop )
    document.getElementById("currButt").addEventListener("click", curr)
    document.getElementById("foodButt").addEventListener("click", food)
    document.getElementById("funButt").addEventListener("click", fun)
    document.getElementById("languageButt").addEventListener("click", lang )
    document.getElementById("capitalButt").addEventListener("click", cap )
    document.getElementById("fameButt").addEventListener("click", fame)
    document.getElementById("lmarkButt").addEventListener("click", mark )
    
    document.getElementById("floatingSelect").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("countryGuess").click();
        }
    })
    
}


function retrieveInput(){
    let guess = document.getElementById("floatingSelect").value;
    let result = country.Country;
    updateScore();
    if(runs == 1){
        document.getElementById("usedHintHead").innerHTML = "Previous Hints"
        document.getElementById("wrongAnswersTitle").innerHTML = "Previous Guesses"
    }
    if (guess == result) {
        let oldHintList = document.getElementById("usedHint");
        let listElement1 = document.createElement('li');
        listElement1.setAttribute("class", "list-group-item");
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
        listElement1.setAttribute("class", "list-group-item");
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
function closedModal(){
    updateScore();
    if(runs == 1){
        document.getElementById("usedHintHead").innerHTML = "Previous Hints"
        document.getElementById("wrongAnswersTitle").innerHTML = "Previous Guesses"
    }
    let oldHintList = document.getElementById("usedHint");
    let listElement1 = document.createElement('li');
    listElement1.setAttribute("class", "list-group-item");
    listElement1.innerHTML = currQuest;
    oldHintList.appendChild(listElement1);
    if(runs == 9){
        openModalLose();
    }

}
function openModalWin(result){
    var myModal = new bootstrap.Modal(document.getElementById("winModal"));
    let score = document.getElementById("addScore");
    let countryName = document.getElementById("correctCountry");
    countryName.innerHTML = "Correct Country: " + result;
    score.innerHTML = "Your final score was: " + (100-count);
    myModal.show();
    document.getElementById("playAgain").addEventListener("click", playAgain);
    let average = calculateStats(100-count);
    document.getElementById("averageScore").innerHTML = "Your average score is: " +  average;
}

function openModalLose(){
    document.getElementById("currScore").innerHTML = "Your Current Score: " + 0;
    var myModal = new bootstrap.Modal(document.getElementById("loseModal"));
    let countryP = document.getElementById("correctCountryLose");
    countryP.innerHTML = "The correct country was: " + country.Country;
    myModal.show();
    let playAgainBtn = document.getElementById("playAgainLose");
    playAgainBtn.addEventListener("click", playAgain);
    calculateStats(0);
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
function calculateStats(score){
    var games;
    var totScore;
    try{
        games = window.localStorage.getItem('games');
        games = Number(games) + 1;
    }
    catch{
        window.localStorage.setItem('games', 1);
        window.localStorage.setItem('score', score);
        return score;
    }
    
    totScore = Number(window.localStorage.getItem('score')) + Number(score);
    window.localStorage.setItem('score', totScore);
    window.localStorage.setItem('games', games);
    console.log(totScore);
    console.log(games);
    return totScore/games;
}
function populateList(){
    var dataList = document.getElementById("countryName")
    for(let i = 0; i < countryArr.length; i ++){
        let item = document.createElement("option");
        item.value = countryArr[i];
        dataList.appendChild(item);
    }
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