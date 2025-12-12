const modalTag = document.querySelector('.big-picture');
const closeButtonTag = document.querySelector('#picture-cancel');
const bodyTag = document.body;
const imageTag = modalTag.querySelector('.big-picture__img img');
const descriptionTag = modalTag.querySelector('.social__caption');
const likesTag = modalTag.querySelector('.likes-count');
const commentsTag = modalTag.querySelector('.social__comments');

const socialCommentCount = modalTag.querySelector('.social__comment-count');
const commentsLoader = modalTag.querySelector('.comments-loader');

// переменные состояния для комментариев
let allComments = [];
let shownComments = 0;
const COMMENTS_PORTION = 5;

// функция отрисовки следующих пяти комментариев
function renderNextComments() {
  const next = allComments.slice(shownComments, shownComments + COMMENTS_PORTION);

  next.forEach(({ avatar, name, message }) => {
    const li = document.createElement('li');
    li.className = 'social__comment';

    li.innerHTML = `
      <img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">
      <p class="social__text">${message}</p>
    `;

    commentsTag.appendChild(li);
  });

  shownComments += next.length;

  // обновить счётчик "x из y"
  modalTag.querySelector('.social__comment-shown-count').textContent = shownComments;
  modalTag.querySelector('.social__comment-total-count').textContent = allComments.length;

  // если все комментарии показаны — прячем кнопку
  if (shownComments >= allComments.length) {
    commentsLoader.classList.add('hidden');
  }
}

export const openModal = ({ url, description, likes, comments }) => {
  modalTag.classList.remove('hidden');
  bodyTag.classList.add('modal-open');
  imageTag.src = url;
  descriptionTag.textContent = description;
  likesTag.textContent = String(likes);
  // commentsTag.innerHTML = comments.map(({ avatar, name, message }) => `
  //   <li class="social__comment">
  //     <img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">
  //     <p class="social__text">${message}</p>
  //   </li>
  // `).join('');

  // socialCommentCount.classList.add('hidden');
  // commentsLoader.classList.add('hidden');

  // очистить старые комментарии
  commentsTag.innerHTML = '';

  // сохранить список комментариев
  allComments = comments;
  shownComments = 0;

  // показать первые 5 комментариев
  renderNextComments();

  // Вешаем обработчик ESC только один раз, при открытии
  document.addEventListener('keydown', onEscKeyDown);
};

// Общая функция закрытия
const closeModal = () => {
  modalTag.classList.add('hidden');
  bodyTag.classList.remove('modal-open');

  commentsTag.innerHTML = '';
  document.removeEventListener('keydown', onEscKeyDown);
};

// Обработчик ESC
function onEscKeyDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeModal();
  }
}

// обработчик кнопки “Загрузить ещё”
commentsLoader.addEventListener('click', renderNextComments);

// Закрытие по кнопке
closeButtonTag.addEventListener('click', closeModal);
