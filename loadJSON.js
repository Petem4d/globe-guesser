import data from './Countries.json' assert { type: 'json' };
window.addEventListener("load", selectCountry); 
var country;

function selectCountry(){
    let countryNum = Math.floor(Math.random() * 227);
    country = data[countryNum];
}


//    <script type="text/javascript" src="Countries.json"></script>
