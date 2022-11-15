import data from './Countries.json' assert { type: 'json' };
//window.addEventListener("load", selectCountry); 

export function selectCountry(){
    let countryNum = Math.floor(Math.random() * 29);
    //console.log(data[countryNum]);
    return data[countryNum];
}


