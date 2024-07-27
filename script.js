// const opeartions = {
//     sum: '+',
//     substract: "-",
//     multiply: '*',
//     divison: '/'
// };

const out = document.getElementById('out');
const buttons = document.querySelectorAll('.btn');

let currentNumber = '';
let previousNumber = '';
let operator = '';
const res = out.value
buttons.forEach(button => {
    button.addEventListener('click',function(){
        const type = button.getAttribute('data-type');
        const value = button.getAttribute('data-value');

        if(type === 'number') {
            numberFunction(value);
        } else if (type === 'operator') {
            operatorFunction(value);
        } else if (type === 'equal') {
            calculate();
        } else if (type === 'clear') {
            clearDisplay();
        } updateDisplay();
        })
});

function numberFunction(value) {
    if (currentNumber === '0' ) {
        currentNumber = value;
    } else {currentNumber += value;}
}

function operatorFunction(value) {
    if (currentNumber === '') return;
    // if (currentNumber === '.') {
    //     currentNumber = `0${previousNumber}`
    // }
   
    if (previousNumber !== '') {
        calculate();
    }
    operator = value;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const curr = parseFloat(currentNumber);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case 'x':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }
    currentNumber = result;
    operator = '';
    previousNumber = '';
}

function clearDisplay() {
    currentNumber = '0';
    previousNumber = '';
    operator = '';
}

function updateDisplay() {
    out.value = `${previousNumber} ${operator} ${currentNumber}`;
}
