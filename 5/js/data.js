// Imports
import {
  PICTURE_COUNT,
  LIKE_MIN_COUNT,
  LIKE_MAX_COUNT,
  COMMENT_MIN_COUNT,
  COMMENT_MAX_COUNT,
  AVATAR_MIN_COUNT,
  AVATAR_MAX_COUNT,
  COMMENT_LINES,
  DESCRIPTIONS,
  NAMES,
} from './constants.js';

import { getRandomInteger, getRandomArrayElement } from './utils.js';


let commentId = 1;

// Создать случайный комментарий с уникальным ID случайным аватаром случайным текстом и именем
const createComment = () => ({
  id: commentId++,
  avatar: `img/avatar-${getRandomInteger(AVATAR_MIN_COUNT, AVATAR_MAX_COUNT)}.svg`,
  message: getRandomArrayElement(COMMENT_LINES),
  name: getRandomArrayElement(NAMES),
});

// Создать массив случайной длины от 0 до 30 и заполнить его комментариями
const createComments = () => {
  const count = getRandomInteger(COMMENT_MIN_COUNT, COMMENT_MAX_COUNT);
  return Array.from({ length: count }, createComment);
};

// Создать один объект фотографию, включающий: ID, URL, description, likes and Comments
const createPictureDescription = (i) => {
  const randomId = getRandomInteger(1, PICTURE_COUNT);
  return {
    id: i+1,
    url: `photos/${i+1}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
    comments: createComments(),
  };
};

console.log(createPictureDescription());

// Создать массив из 25 фотографий
const createPictures = () => Array.from({ length: PICTURE_COUNT }, (_, i) => createPictureDescription(i));

console.log(createPictures());

// Export
export { createPictures };
