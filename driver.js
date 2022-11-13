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
    //let won = False;
    let cnt = 0;
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

