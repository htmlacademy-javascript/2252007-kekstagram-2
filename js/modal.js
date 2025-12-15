import { COMMENTS_PORTION } from './constants.js';

const modalTag = document.querySelector('.big-picture');
const closeButtonTag = document.querySelector('#picture-cancel');
const bodyTag = document.body;
const imageTag = modalTag.querySelector('.big-picture__img img');
const descriptionTag = modalTag.querySelector('.social__caption');
const likesTag = modalTag.querySelector('.likes-count');
const commentsTag = modalTag.querySelector('.social__comments');
const commentsTemplate = modalTag.querySelector('.social__comment');
const shownComment = modalTag.querySelector('.social__comment-shown-count');
const totalComment = modalTag.querySelector('.social__comment-total-count');
const commentsLoader = modalTag.querySelector('.comments-loader');

let allComments = [];
let shownComments = 0;

const showModal = () => {
  modalTag.classList.remove('hidden');
  bodyTag.classList.add('modal-open');
};

const hideModal = () => {
  modalTag.classList.add('hidden');
  bodyTag.classList.remove('modal-open');
};

const renderComment = ({ avatar, message, name }) => {
  const newComment = commentsTemplate.cloneNode(true);
  const userpic = newComment.querySelector('.social__picture');
  userpic.src = avatar;
  userpic.alt = name;
  newComment.querySelector('.social__text').textContent = message;
  return newComment;
};

const renderStatistic = () => {
  shownComment.textContent = shownComments;
};

const renderLoader = () => {
  if (!allComments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
}

const renderComments = () => {
  const fragment = document.createDocumentFragment();

  allComments.splice(0, COMMENTS_PORTION).forEach((item) => {
    fragment.append(renderComment(item));

    shownComments++;
  });
  commentsTag.append(fragment);
  renderStatistic();
  renderLoader();
};

const renderModal = ({ url, description, likes, comments }) => {
  imageTag.src = url;
  descriptionTag.textContent = description;
  likesTag.textContent = likes;
  commentsTag.innerHTML = '';
  totalComment.textContent = comments.length;

  renderComments();
};

export const openModal = ({ url, description, likes, comments }) => {
  allComments = [...comments];
  shownComments = 0;

  showModal();
  renderModal({ url, description, likes, comments })

  // Вешаем обработчик ESC только один раз, при открытии
  document.addEventListener('keydown', onEscKeyDown);
};

const closeModal = () => {
  hideModal();
  document.removeEventListener('keydown', onEscKeyDown);
};

function onEscKeyDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
}

commentsLoader.addEventListener('click', () => {
  renderComments();
});

closeButtonTag.addEventListener('click', () => {
  closeModal();
});
