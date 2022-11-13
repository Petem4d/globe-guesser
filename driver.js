import {selectCountry} from "./loadJSON.js";

window.addEventListener("load", setup); 

var country;
function setup(){
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
    let won = False;
    let cnt = 0;
    createHint(0);
 
}

function createHint(){
    
    
}

function retrieveInput(){
    let guess = document.getElementById("userGuess").ariaValueMax;
    let result = country.Country;
    let output = document.createElement("text");
    if (guess == result) {
        output.innerHTML("correct");
    } else {
        output.innerHTML("inccorect");
    }
}