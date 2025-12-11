import { openModal } from './modal.js';

const similarPicturesList = document.querySelector('.pictures');
const similarPicturesTemplate = document.querySelector('#picture').content.querySelector('.picture');

export const renderCards = (photos) => {

  const similarListFragment = document.createDocumentFragment();

  photos.forEach(({ url, description, likes, comments }) => {
    const pictureElement = similarPicturesTemplate.cloneNode(true);
    const image = pictureElement.querySelector('.picture__img');
    image.src = url;
    image.alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;

    pictureElement.addEventListener('click', () => {
      openModal({ url, description, likes, comments });
    });

    similarListFragment.appendChild(pictureElement);
  });

  similarPicturesList.appendChild(similarListFragment);
};
