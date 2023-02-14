/* 
1. add event listener to the case plus button
2. get the value inside the case number field(input field)
3. convert the new case number
4. calculate the new case number
5. set the value to the case number field
*/

/* function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if (isIncrease) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
} */

/* 
function updateTotalPrice(newinputFieldNumber, inputFieldId) {
    const caseTotalElement = document.getElementById(inputFieldId);
    const caseTotalPrice = newinputFieldNumber * 59;
    caseTotalElement.innerText = caseTotalPrice;
} */

document.getElementById('case-btn-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseAndPhoneNumber(true,'case-number');
    updateTotalPrice(newCaseNumber, 'case-total', 59);
    calculateSubTotal();
    
})
document.getElementById('case-minus-btn').addEventListener('click', function () {
    const newCaseNumber = updateCaseAndPhoneNumber(false, 'case-number');
    updateTotalPrice(newCaseNumber, 'case-total', 59);
    calculateSubTotal();
})