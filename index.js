const result = document.querySelector('.calculator__result');
const buttons = document.querySelectorAll('.calculator__button');
const stickyButtons = document.querySelectorAll('.sticky');
const deleteButton = document.querySelector('.ac');
const posNegButton = document.querySelector('.change');
const divideButton = document.querySelector('.divide');
const procentButton = document.querySelector('.procent');
const multyButton = document.querySelector('.multiply');
const minButton = document.querySelector('.minus');
const plusButton = document.querySelector('.plus');
const isButton = document.querySelector('.is');
const pointButton = document.querySelector('.point');
let a;
let b;

function multiply() {
    return a * b
}

function subtract() {
    return a - b
}

function sum() {
    return a + b
}

function divide() {
    return a / b;
}

function procent() {
    return (a / 100).toFixed(2);
}

function addEventListeners(callback) {
    function putResultB(){
        b = +result.textContent;
        result.textContent = '';    
        stickyButtons.forEach(button => {
            button.removeEventListener('click', putResultB);
        })
        result.textContent = (`${callback()}`);
    }
    a = +result.textContent;
    result.textContent = '';
    stickyButtons.forEach(button => {
        button.addEventListener('click', putResultB);
    });
}

function checkButtonNumber(button) {
    if(+button.textContent || +button.textContent == 0) {
        button.addEventListener('click', () => {
            result.textContent += button.textContent;
        })
    } 
}

pointButton.addEventListener('click', () => result.textContent += '.')

deleteButton.addEventListener('click', () => {
    result.textContent = '';
})

procentButton.addEventListener('click', () => {
    a = +result.textContent;
    result.textContent = `${procent()}`;
})

posNegButton.addEventListener('click', () => {
    result.textContent = `${+result.textContent * -1}`;
})

divideButton.addEventListener('click', () => {
    addEventListeners(divide);
})

multyButton.addEventListener('click', () => {
    addEventListeners(multiply);
})

minButton.addEventListener('click', () => {
    addEventListeners(subtract);
})

plusButton.addEventListener('click', () => {
    addEventListeners(sum);
})

buttons.forEach(button => {
    checkButtonNumber(button);
})