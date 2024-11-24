import "./index.scss";

let count = 0;
const leftButton = document.querySelector('.galary__btn_left');
const rightButton = document.querySelector('.galary__btn_right');
const mapButton = document.querySelector('.map__button');
const mapList = document.querySelector('.map__list');
const mapItems = document.querySelectorAll('.map__item');
const marks = document.querySelectorAll('.map__mark');
const offices = document.querySelector('.offices');
const cities = document.querySelectorAll('.offices__item');

const slider = document.querySelector('.galary__slider');
const imgs = document.querySelectorAll('.galary__img');
const list = document.querySelectorAll('.galary__item');

const sliderWidth = imgs[0].offsetWidth;

function cleanMapItems() {
  mapItems.forEach(item => {
    item.classList.remove('map__item_active');
    item.classList.remove('active');
  });
};

function addMapItemsActive(index) {
  mapItems[index].classList.add('map__item_active');
  mapItems[index].classList.add('active');
};

function addClassPhoto() {
  list.forEach(item => {
    item.classList.remove('galary__item_active');
  });

  list[count].classList.add('galary__item_active');
};

function addClassMarks(index) {
  marks.forEach(item => {
    item.classList.remove('map__mark_visible');
  });
  cleanMapItems();
  addMapItemsActive(index);

  if (index === 1) {
    marks[0].classList.add('map__mark_visible');
  } else if (index === 2) {
    [1, 2, 3].map((id) => {
      marks[id].classList.add('map__mark_visible');
    });
  } else if (index === 3) {
    [4, 5].map((id) => {
      marks[id].classList.add('map__mark_visible');
    });
  } else if (index === 4) {
    [6, 7, 8].map((id) => {
      marks[id].classList.add('map__mark_visible');
    });
  } else if (index === 5) {
    [9, 10, 11, 12, 13].map((id) => {
      marks[id].classList.add('map__mark_visible');
    });
  } else if (index === 6) {
    [14, 15, 16, 17, 18, 19].map((id) => {
      marks[id].classList.add('map__mark_visible');
    });
  } else if (index === 7) {
    [20, 21, 22, 23, 24].map((id) => {
      marks[id].classList.add('map__mark_visible');
    });
  } else if (index === 8) {
    [25, 26].map((id) => {
      marks[id].classList.add('map__mark_visible');
    });
  }
};

function addClassMarksOnCity(index) {
  cleanMapItems();
  marks.forEach(item => {
    item.classList.remove('map__mark_visible');
  });

  if (index === 0) {
    marks[index].classList.add('map__mark_visible');
    addMapItemsActive(1);
  } else if (index === 1) {
    [1, 2, 3].map((id) => {
      marks[id].classList.add('map__mark_visible');
    });
    addMapItemsActive(2);
  } else if (index === 5) {
    [4, 5].map((id) => {
      marks[id].classList.add('map__mark_visible');
    });
    addMapItemsActive(3);
  } else if (index === 8) {
    [6, 7, 8].map((id) => {
      marks[id].classList.add('map__mark_visible');
    });
    addMapItemsActive(4);
  } else if (index === 12) {
    [9, 10, 11, 12, 13].map((id) => {
      marks[id].classList.add('map__mark_visible');
    });
    addMapItemsActive(5);
  } else if (index === 18) {
    [14, 15, 16, 17, 18, 19].map((id) => {
      marks[id].classList.add('map__mark_visible');
    });
    addMapItemsActive(6);
  } else if (index === 25) {
    [20, 21, 22, 23, 24].map((id) => {
      marks[id].classList.add('map__mark_visible');
    });
    addMapItemsActive(7);
  } else if (index === 31) {
    [25, 26].map((id) => {
      marks[id].classList.add('map__mark_visible');
    });
    addMapItemsActive(8);
  }
};

function handleClickLeftBtn() {
  if (count > 0) {
    count--;
    slider.style.left = `${-(sliderWidth * count)}px`;
    addClassPhoto();
  }
};

function handleClickRightBtn() {
  if (count < 4) {
    count++;
    slider.style.left = `${-(sliderWidth * count)}px`;
    addClassPhoto();
  }
};

function handleClickMapBtn() {
  if (mapButton.classList.contains('map__button_active')) {
    mapButton.classList.remove('map__button_active');
    offices.classList.remove('offices_active');
    mapList.classList.remove('mapList_hidden');
  } else {
    mapButton.classList.add('map__button_active');
    offices.classList.add('offices_active');
    mapList.classList.add('mapList_hidden');
  }
};

function handleClickMapItem(index) {
  if (index > 0) {
    addClassMarks(index);
  } else {
    marks.forEach(item => {
      if (!item.classList.contains('map__mark_visible')) {
        item.classList.add('map__mark_visible');
      }
    });
    cleanMapItems()

    addMapItemsActive(index)
  }
};

mapItems.forEach((el, index) => {
  el.addEventListener('click', () => handleClickMapItem(index));
});

cities.forEach((el, index) => {
  el.addEventListener('click', () => addClassMarksOnCity(index));
});

leftButton.addEventListener('click', handleClickLeftBtn);
rightButton.addEventListener('click', handleClickRightBtn);
mapButton.addEventListener('click', handleClickMapBtn);