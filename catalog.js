'use strict';

let filterMenu = document.querySelector('.filterMenu');
let filterLabel = document.querySelector('.filterLabel');
let filterLeftImg = document.querySelector('.filterLeftImg');

filterLabel.addEventListener('click', function () {
    filterMenu.classList.toggle('hidden');
    filterLabel.classList.toggle('filterRed');

    if (filterLeftImg.getAttribute('src') === 'img/filter_left.svg') {
        filterLeftImg.setAttribute('src', 'img/filter_hover.svg');
    }
    else {
        filterLeftImg.setAttribute('src', 'img/filter_left.svg');
    }
});

let categoryTitle = document.querySelectorAll('.categoryTitle');

categoryTitle.forEach(function (header) {
    header.addEventListener('click', function (event) {
        event.target.nextElementSibling.classList.toggle('hidden')
    })
});

let itemSize = document.querySelector('.itemSize');
let menuSize = document.querySelector('.menuSize');


itemSize.addEventListener('click', function () {
    menuSize.classList.toggle('hidden');
});
