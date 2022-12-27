/*

1- First we need to print the numbers we clicked on calculator's screen.

2- Then one of the operators will be clicked. When this happens, numbers on the screen should be taken to another variable as number(NOT STRING! As inputs are of String type) and screen should be cleaned.

3- Once again numbers will be typed and those numbers will also be assigned another variable. And when 'equal' button is clicked those two variable values will be calculated according to the operator and printed to the screen.

4- Variables will be cleaned and 'Sum' will be assigned to the first variable and so on...

5- When one of the operators is clicked background will be changed accordingly.

*/


//-----DOM Constants-----------------------------------------
const addDOM = document.querySelector('#add');
const subtractDOM = document.querySelector('#subtract');
const multiplyDOM = document.querySelector('#multiply');
const divideDOM = document.querySelector('#divide');
const equalDOM = document.querySelector('#equal');
const inputDOM = document.querySelector('#input');
const cDOM = document.querySelector('#C');
const dotDOM = document.querySelector('#dot')

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
//------------------------------------------------------------


//-----Variables----------------------------------------------
let firstNumber = 0;
let secondNumber = 0;
let sum = 0;

let isClicked = false;
let isEqual = false;
let typeOfOperator = "";
//------------------------------------------------------------


//------Write Numbers On Screen-------------------------------------------
numbers.forEach(number => number.addEventListener('click', function() {
    if(isClicked){
        inputDOM.value = "";
        inputDOM.placeholder = "";
        isClicked= false;
    }
    inputDOM.value += number.innerText;

    if(isEqual) {
        inputDOM.value = number.innerText;
        isEqual = false;
    }
}))

dotDOM.addEventListener('click', function() {
    inputDOM.type = "text";
    inputDOM.value += ".";
})
//-------------------------------------------------------------


//-----Get First Number----------------------------------------
operators.forEach(operator => operator.addEventListener('click', getFirstNumber));

function getFirstNumber() {
    firstNumber = Number(inputDOM.value);
    isClicked = true;
}
//-------------------------------------------------------------


//-----Change Bg of Operator Bg's When Clicked-----------------
operators.forEach(operator => operator.addEventListener('click', function() {
    operators.forEach(element => element.classList.remove('changeBg'));
    operator.classList.add('changeBg');
}))
//-------------------------------------------------------------


//-----Store What Operator Button Is Clicked For Later Use-----
addDOM.addEventListener('click', function() {
    typeOfOperator = "add";
})
subtractDOM.addEventListener('click', function() {
    typeOfOperator = "subtract";
})
multiplyDOM.addEventListener('click', function() {
    typeOfOperator = "multiply";
})
divideDOM.addEventListener('click', function() {
    typeOfOperator = "divide";
})
//-------------------------------------------------------------


//-----Reset Input Via "C" Button------------------------------
cDOM.addEventListener('click', function() {
    inputDOM.value = "";
    firstNumber = 0;
    secondNumber = 0;
    operators.forEach(element => element.classList.remove('changeBg'));
})
//--------------------------------------------------------------


//--------------Button Tasks------------------------------------
function addFunction() {
    secondNumber = Number(inputDOM.value);
    sum = firstNumber + secondNumber;
    inputDOM.value = sum;
}
function subtarctFunction() {
    secondNumber = Number(inputDOM.value);
    sum = firstNumber - secondNumber;
    inputDOM.value = sum;
}
function multiplyFunction() {
    secondNumber = Number(inputDOM.value);
    sum = firstNumber * secondNumber;
    inputDOM.value = sum;
}
function divideFunction() {
    secondNumber = Number(inputDOM.value);
    sum = firstNumber / secondNumber;
    inputDOM.value = sum;
}
//-------------------------------------------------------------------------


//--------Decide What To Do When "=" is clicked via typeOfOperator's value----------
function operatorFunction() {
    isEqual = true;
    operators.forEach(element => element.classList.remove('changeBg'));
    if(typeOfOperator == "add") {
        addFunction();
    } else if(typeOfOperator == "subtract") {
        subtarctFunction();
    } else if(typeOfOperator == "multiply") {
        multiplyFunction();
    } else if(typeOfOperator == "divide") {
        divideFunction();
    }
}

equalDOM.addEventListener('click', operatorFunction);
//----------------------------------------------------------------------------------