'use strict';

// Этот модуль скрывает и показывает элементы меню

var menu = document.querySelector('.menu');
var menuColored = document.querySelector('.menu--colored');
var menuItemsHidden = document.querySelectorAll('.menu__item--hidden');
var menuButton = document.querySelector('.menu__btn');
var menuItemLogo = document.querySelector('.menu__item--logo');

menu.classList.remove('menu--nojs');

menuButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (menu.classList.contains('menu--closed')) {
    menu.classList.remove('menu--closed');
    menu.classList.add('menu--opened');
    menu.classList.remove('menu--transparent');
    menu.classList.add('menu--colored');
  } else {
    menu.classList.remove('menu--opened');
    menu.classList.add('menu--closed');
    menu.classList.remove('menu--colored');
    menu.classList.add('menu--transparent');
  }

  // for (var i = 0; i < menuItemsHidden.length; i++) {
  //   menuItemsHidden[i].classList.toggle('hidden');
  // }
  // menu.classList.toggle('menu--closed');
  // menu.classList.toggle('menu--opened');
  // menuColored.classList.toggle('menu--colored');
  // menuItemLogo.classList.toggle('menu__item--no-shadow');
});
