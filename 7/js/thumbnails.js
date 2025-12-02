// !!! пожалуйста, не обращайте внимания на комментарии. Они для меня чтобы я помнила что в каком порядке я создавала


// 1.импортируем модуль для генерации фотографий
import { createPictures } from './data.js';

// 2.контейнер куда будем вставлять похожие фотографии
const similarPicturesList = document.querySelector('.pictures');

// 3.нашли шаблон
const similarPicturesTemplate = document.querySelector('#picture').content.querySelector('.picture');

// // 4.клонировали содержимое шаблона
// const pictureElement = similarPicturesTemplate.cloneNode(true);

// // 5.вставили клонированную фотографию в контейнер для фотографий
// similarPicturesList.appendChild(pictureElement);

// 6.создаём массив для работы с похожими фотографиями
const similarPictures = createPictures();

// // 7.отрисуем шаблон в проходке по массиву с данными
// similarPictures.forEach(() => {
//   // 4.клонировали содержимое шаблона
//   const pictureElement = similarPicturesTemplate.cloneNode(true);

//   // 5.вставили клонированную фотографию в контейнер для фотографий
//   similarPicturesList.appendChild(pictureElement);
// });

// 13.создадим DocumentFragment
const similarListFragment = document.createDocumentFragment();


// // 8.теперь надо шаблон наполнить данными
// // 7.отрисуем шаблон в проходке по массиву с данными
// similarPictures.forEach((picture) => {
//   // 4.клонировали содержимое шаблона
//   const pictureElement = similarPicturesTemplate.cloneNode(true);

//   // 9.вставим данные в шаблон начнём с адреса фотографии
//   pictureElement.querySelector('.picture__img').src = picture.url;

//   // 10.вставим описание фотографии
//   pictureElement.querySelector('.picture__img').alt = picture.description;

//   // 11.вставим количество лайков
//   pictureElement.querySelector('.picture__likes').textContent = picture.likes;

//   // 12.вставим количество комментариев
//   pictureElement.querySelector('.picture__comments').textContent = picture.comments;

//   // 5.вставили клонированную фотографию в контейнер для фотографий
//   similarPicturesList.appendChild(pictureElement);
// });

// 14.используем деструктуризацию параметров
// 8.теперь надо шаблон наполнить данными
// 7.отрисуем шаблон в проходке по массиву с данными
similarPictures.forEach(({url,description, likes, comments}) => {
  // 4.клонировали содержимое шаблона
  const pictureElement = similarPicturesTemplate.cloneNode(true);

  // 9.вставим данные в шаблон начнём с адреса фотографии
  pictureElement.querySelector('.picture__img').src = url;

  // 10.вставим описание фотографии
  pictureElement.querySelector('.picture__img').alt = description;

  // 11.вставим количество лайков
  pictureElement.querySelector('.picture__likes').textContent = likes;

  // 12.вставим количество комментариев
  pictureElement.querySelector('.picture__comments').textContent = comments;

  // // 5.вставили клонированную фотографию в контейнер для фотографий
  // similarPicturesList.appendChild(pictureElement);

  // 15.вставим элементы через DocumentFragment
  similarListFragment.appendChild(pictureElement);
});

// 16.вынесем за функцию
// 5.вставили клонированную фотографию в контейнер для фотографий
similarPicturesList.appendChild(similarListFragment);
