let burger = document.querySelector(".buger");
let close = document.querySelector('.burger-menu_close');
let modal = document.querySelector('.buger-menu');

let openModal = (e) => {
  e.stopPropagation();
  modal.classList.remove('buger-menu-close');
  modal.classList.add('buger-menu-open');
}

let closeModal = (e) => {
  e.stopPropagation();
  modal.classList.remove('buger-menu-open');
  modal.classList.add('buger-menu-close');
}

burger.addEventListener('click', openModal);
close.addEventListener('click', closeModal);