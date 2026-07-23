function calculateULIP() {

    let premium = Number(document.getElementById("premium").value);
    let ppt = Number(document.getElementById("ppt").value);
    let term = Number(document.getElementById("term").value);
    let rate = Number(document.getElementById("rate").value) / 100;

    if (!premium || !ppt || !term) {
        alert("Please fill all fields");
        return;
    }

    let totalPremium = premium * ppt;
    let fund = 0;

    for (let i = 1; i <= term; i++) {

        if (i <= ppt) {
            fund += premium;
        }

        fund = fund * (1 + rate);
    }

    let gain = fund - totalPremium;

    document.getElementById("premiumResult").innerHTML =
        "₹" + Math.round(totalPremium).toLocaleString("en-IN");

    document.getElementById("fundResult").innerHTML =
        "₹" + Math.round(fund).toLocaleString("en-IN");

    document.getElementById("gainResult").innerHTML =
        "₹" + Math.round(gain).toLocaleString("en-IN");
}
