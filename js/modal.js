const modalTag = document.querySelector('.big-picture');
const closeButtonTag = document.querySelector('#picture-cancel');
const bodyTag = document.body;
const imageTag = modalTag.querySelector('.big-picture__img img');
const descriptionTag = modalTag.querySelector('.social__caption');
const likesTag = modalTag.querySelector('.likes-count');
const commentsTag = modalTag.querySelector('.social__comments');

const socialCommentCount = modalTag.querySelector('.social__comment-count');
const commentsLoader = modalTag.querySelector('.comments-loader');

export const openModal = ({ url, description, likes, comments }) => {
  modalTag.classList.remove('hidden');
  bodyTag.classList.add('modal-open');
  imageTag.src = url;
  descriptionTag.textContent = description;
  likesTag.textContent = String(likes);
  commentsTag.innerHTML = comments.map(({ avatar, name, message }) => `
    <li class="social__comment">
      <img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">
      <p class="social__text">${message}</p>
    </li>
  `).join('');

  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  // Вешаем обработчик ESC только один раз, при открытии
  document.addEventListener('keydown', onEscKeyDown);
};

// Общая функция закрытия
const closeModal = () => {
  modalTag.classList.add('hidden');
  bodyTag.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
};

// Обработчик ESC
function onEscKeyDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
}

// Закрытие по кнопке
closeButtonTag.addEventListener('click', closeModal);
