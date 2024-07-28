// const opeartions = {
//     sum: '+',
//     substract: "-",
//     multiply: '*',
//     divison: '/'
// };

const out = document.getElementById('out');
const buttons = document.querySelectorAll('.btn');
const home = document.getElementById('home');
const div = document.querySelectorAll('.buttons')
const icon = document.getElementById('icon')

for(let i=0;i < 20; i++) {document.getElementsByClassName('btn')[i].style="display: none"}

icon.addEventListener('click', function(){
    for(let i=0; i < 20; i++) {
        document.getElementsByClassName('btn')[i].style="display: block"
    } document.getElementsByClassName('icon')[0].style="display: none"
    home.addEventListener('click', function(){
        for(let i=0; i < 20; i++) {
            document.getElementsByClassName('btn')[i].style="display: none"
        }document.getElementsByClassName('icon')[0].style="display: block"
    })
})


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
   
    if (value === '.' && currentNumber.includes('.')) {
        return
    }
    if (currentNumber === '0' ) {
        currentNumber = previousNumber} 
        // убрана возможность ставить в начале больше одного нуля
        currentNumber += value 
        if (currentNumber === '.') {
            currentNumber = `0${currentNumber}`
        } 
        // если первой нажимается точка, то впереди ставится ноль
 
}

function operatorFunction(value) {
    if (currentNumber === '') return;
    if (currentNumber[currentNumber.length - 1] === '.') return;
    // перед оператором не может стоять точка

    if (previousNumber !== '') {
        calculate();
    }
    if (value === '%') {
        calculate()
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
        case '%':
            result = prev / 100 * curr;
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

