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
    let cnt = 0;
    createHint();
 
}

function createHint(){

    
}

function retrieveInput(){
    let guess = document.getElementById("userGuess").value;
    let correctCountry = country.Country;
    if (guess == correctCountry) {
        console.log("correct");
    } else {
        console.log("incorrect");
    }
}