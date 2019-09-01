"use strict";

var burger = document.querySelector(".buger");
var close = document.querySelector('.burger-menu_close');
var modal = document.querySelector('.buger-menu');

var openModal = function openModal(e) {
  e.stopPropagation();
  modal.classList.remove('buger-menu-close');
  modal.classList.add('buger-menu-open');
};

var closeModal = function closeModal(e) {
  e.stopPropagation();
  modal.classList.remove('buger-menu-open');
  modal.classList.add('buger-menu-close');
};

burger.addEventListener('click', openModal);
close.addEventListener('click', closeModal);