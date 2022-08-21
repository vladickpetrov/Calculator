const result = document.querySelector('.calculator__result');
const buttonSticky = document.querySelectorAll('.sticky');

buttonSticky.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('calculator__button_pressed');
    })
});

window.navigator.vibrate(20000);