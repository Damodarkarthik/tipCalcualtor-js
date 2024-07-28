let billAmountElement = document.getElementById("billAmount");
let precentageTipElement = document.getElementById("percentageTip");
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalAmount");
let errorMessageElement = document.getElementById("errorMessage");

let errormessage = "Please Enter a Valid Input.";

function tipCalculator() {
    let calculatedTip = (parseInt(precentageTipElement.value) / 100) * parseInt(billAmountElement.value);
    let totalAmount = parseInt(billAmountElement.value) + parseInt(calculatedTip);
    if (billAmountElement.value === "") {
        errorMessageElement.textContent = errormessage;

    } else if (precentageTipElement.value === "") {
        errorMessageElement.textContent = errormessage;
    } else {
        errorMessageElement.textContent = "";
        tipAmountElement.value = calculatedTip;
        totalAmountElement.value = totalAmount;
    }
}