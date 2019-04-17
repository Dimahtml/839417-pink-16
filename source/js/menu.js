'use strict';

// Этот модуль скрывает и показывает элементы меню

var menuColored = document.querySelector('.menu--colored');
var menuItemsHidden = document.querySelectorAll('.menu__item--hidden');
var menuButton = document.querySelector('.menu__btn');
var menuItemLogo = document.querySelector('.menu__item--logo');

menuButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  for (var i = 0; i < menuItemsHidden.length; i++) {
    menuItemsHidden[i].classList.toggle('hidden');
  }
  menuColored.classList.toggle('menu--colored');
  menuItemLogo.classList.toggle('menu__item--no-shadow');
});
