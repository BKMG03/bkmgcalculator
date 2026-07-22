function calculateULIP(){

const premium = Number(document.getElementById("premium").value);
const ppt = Number(document.getElementById("ppt").value);
const term = Number(document.getElementById("term").value);
const rate = Number(document.getElementById("rate").value)/100;

if(!premium || !ppt || !term){
    alert("Please fill all fields");
    return;
}

const totalPremium = premium * ppt;

let fund = 0;

for(let i=1;i<=term;i++){

    if(i<=ppt){
        fund += premium;
    }

    fund *= (1+rate);
}

const gain = fund-totalPremium;

document.getElementById("premiumResult").innerHTML =
"₹"+totalPremium.toLocaleString("en-IN");

document.getElementById("fundResult").innerHTML =
"₹"+Math.round(fund).toLocaleString("en-IN");

document.getElementById("gainResult").innerHTML =
"₹"+Math.round(gain).toLocaleString("en-IN");

}
