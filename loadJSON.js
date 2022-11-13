import data from './Countries.json' assert { type: 'json' };
window.addEventListener("load", selectCountry); 

export function selectCountry(){
    let countryNum = Math.floor(Math.random() * 227);
    return data[countryNum];
}


//    <script type="text/javascript" src="Countries.json"></script>
