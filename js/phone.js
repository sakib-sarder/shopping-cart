document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = updateCaseAndPhoneNumber(true, 'phone-number-field');
    updateTotalPrice(newPhoneNumber, 'phone-total', 1219);
    calculateSubTotal();
});
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = updateCaseAndPhoneNumber(false, 'phone-number-field');
    updateTotalPrice(newPhoneNumber, 'phone-total', 1219);
    calculateSubTotal();
})