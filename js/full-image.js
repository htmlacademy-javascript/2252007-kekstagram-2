// 1. DOM-узлы
const bigPicture = document.querySelector('.big-picture');
// img
const bigImg = bigPicture.querySelector('.big-picture__img');
const likesCount = bigPicture.querySelector('.likes-count');

const bigPictureCaption = bigPicture.querySelector('.social__caption');

const commentsList = bigPicture.querySelector('.social__comments');
const commentsShownCount = bigPicture.querySelector('.social__comment-shown-count');
const commentsTotalCount = bigPicture.querySelector('.social__comment-total-count');
const commentCountBlock = bigPicture.querySelector('.social__comments');

// 2. Создаём элемент комментария
function createCommentElement(comment) {
  const li = document.createElement('li');
  li.classList.add('social__comment');

  const img = document.createElement('img');
  img.classList.add('social__picture');
  img.src = comment.avatar;
  img.alt = comment.name;
  img.width = 35;
  img.height = 35;

  const p = document.createElement('p');
  p.classList.add('social__text');
  p.textContent = comment.message;

  li.appendChild(img);
  li.appendChild(p);

  return li;
}

createCommentElement();

// 3. Открытие модального окна и заполнение данными
function openBigPicture(photo) {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  // заполняем данные
  bigImg.src = photo.url;
  bigImg.alt = photo.description;
  likesCount.textContent = String(photo.likes);
  bigPictureCaption.textContent = photo.description;

  // комментарии: очистить старые и вставить новые
  // Очищаем старые комментарии
  commentsList.innerHTML = '';

  // 3. Вставляем новые комментарии из объекта photo
  photo.comments.forEach(comment => {
    commentsList.appendChild(createCommentElement(comment));
  });
}
