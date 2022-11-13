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

}
