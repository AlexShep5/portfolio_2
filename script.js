'use strict';

let blackout = document.querySelector('.blackout');
let barImg = document.querySelector('.barImg');
let menuClouse = document.querySelector('.menuClouse');

function displayMenu() {
    blackout.classList.toggle('menuHide');

}

barImg.addEventListener('click', displayMenu);
menuClouse.addEventListener('click', displayMenu);