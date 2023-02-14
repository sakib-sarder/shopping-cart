function updateCaseAndPhoneNumber(isIncrease, elementId) {
    const caseNumberField = document.getElementById(elementId);
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newinputFieldNumber;
    if (isIncrease) {
        newinputFieldNumber = previousCaseNumber + 1;
    }
    else {
        newinputFieldNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newinputFieldNumber;
    return newinputFieldNumber;
}

function updateTotalPrice(newinputFieldNumber, inputFieldId, itemPrice) {
    const caseTotalElement = document.getElementById(inputFieldId);
    const caseTotalPrice = newinputFieldNumber * itemPrice;
    caseTotalElement.innerText = caseTotalPrice;
}


//// will be modified later (alert)

function getTextElementById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}
function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}
function calculateSubTotal() {
    const currentPhoneTotal = getTextElementById('phone-total');
    const currentCaseTotal = getTextElementById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;

    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount);
}
