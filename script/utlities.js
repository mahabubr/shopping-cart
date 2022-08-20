function getElementTextValueById(elementId) {
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function setElementTextValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal() {
    const currentPhoneTotal = getElementTextValueById('phone-total');
    const currentCaseTotal = getElementTextValueById('case-total');
    const curreentSubTotal = currentPhoneTotal + currentCaseTotal;

    setElementTextValueById('sub-total', curreentSubTotal);

    const taxAmountString = (curreentSubTotal * 0.1).toFixed(2);
    const textAmount = parseFloat(taxAmountString)
    setElementTextValueById('tax-total', textAmount);
    
    const finalAmount = curreentSubTotal + textAmount;
    setElementTextValueById('final-total', finalAmount);
}