function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch {
        document.getElementById('display').value = 'Error';
    }
}

function calculatePercentage() {
    try {
        let display = document.getElementById('display');
        let value = parseFloat(display.value);
        if (!isNaN(value)) {
            display.value = value / 100;
        }
    } catch {
        document.getElementById('display').value = 'Error';
    }
}

