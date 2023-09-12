
let showValue = '';

function addtoDisplay(value) {
    showValue += value;
    document.getElementById('display').value = showValue;
}

function clearDisplay() {
    showValue = '';
    document.getElementById('display').value = showValue;
}

function calculateResult() {
    try {
        const result = eval(showValue);
        document.getElementById('display').value = result;
        showValue = result.toString();
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}