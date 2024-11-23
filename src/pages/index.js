import "./index.scss";

let count = 0;
const leftButton = document.querySelector('.galary__btn_left');
const rightButton = document.querySelector('.galary__btn_right');
const slider = document.querySelector('.galary__slider');
const imgs = document.querySelectorAll('.galary__img');
const list = document.querySelectorAll('.galary__item');

const sliderWidth = imgs[0].offsetWidth;

function addClass() {
  list.forEach(item => {
    item.classList.remove('galary__item_active');
  });

  list[count].classList.add('galary__item_active');
};

function handleClickLeftBtn() {
  if (count > 0) {
    count--;
    slider.style.left = `${-(sliderWidth * count)}px`;
    addClass();
  }
};

function handleClickRightBtn() {
  if (count < 4) {
    count++;
    slider.style.left = `${-(sliderWidth * count)}px`;
    addClass();
  }
};

leftButton.addEventListener('click', handleClickLeftBtn);
rightButton.addEventListener('click', handleClickRightBtn);