function calculateSIP() {

const sip = Number(document.getElementById("sip").value);
const years = Number(document.getElementById("years").value);
const annualRate = Number(document.getElementById("rate").value);

if (!sip || !years) {
    alert("Please fill all fields");
    return;
}

const months = years * 12;
const r = annualRate / 100 / 12;

const futureValue =
sip * (((Math.pow(1 + r, months) - 1) / r) * (1 + r));

const investment = sip * months;
const profit = futureValue - investment;

document.getElementById("investment").innerHTML =
"₹" + Math.round(investment).toLocaleString("en-IN");

document.getElementById("wealth").innerHTML =
"₹" + Math.round(futureValue).toLocaleString("en-IN");

document.getElementById("profit").innerHTML =
"₹" + Math.round(profit).toLocaleString("en-IN");

}
