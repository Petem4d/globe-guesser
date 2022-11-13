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

}

function main(){
    let won = False;
    let cnt = 0;
    createHint();
 
}

function createHint(){
    
    
}

function retrieveInput(){
    
}