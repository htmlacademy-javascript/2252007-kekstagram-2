const PICTURE_COUNT = 25;

const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;

const COMMENT_MIN_COUNT = 0;
const COMMENT_MAX_COUNT = 30;

const AVATAR_MIN_COUNT = 1;
const AVATAR_MAX_COUNT = 6;

const COMMENT_LINES = [
  'Это фотография просто огонь! Я в полном восторге.',
  'Хорошая фотография, но можно было бы добавить больше света.',
  'Интересный ракурс, но композиция могла бы быть лучше.',
  'Цвета на фотографии выглядят немного тускло.',
  'Мне нравится настроение этой фотографии.',
  'Эта фотография рассказывает историю, которая меня зацепила.',
  'Технически это хорошая фотография, но ей не хватает эмоциональной глубины.',
  'Мне нравится, как вы использовали естественный свет в этой фотографии.',
  'Композиция этой фотографии действительно выделяется.',
  'Эта фотография вызывает у меня ностальгию.',
  'Мне нравится, как вы уловили движение в этой фотографии.',
  'Эта фотография заставляет меня задуматься о жизни.',
  'Мне нравится, как вы использовали тени в этой фотографии.',
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота, но снимок получился лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Моя любимая фотография из всех когда-либо сделанных мной. Я просто в восторге.',
];

const DESCRIPTIONS = [
  'Лучшие моменты этого лета',
  'Отпуск!!!',
  'Жаркий закат на пляже',
  'Невероятные приключения в диких джунглях',
  'Вкусный обед в кафе у моря',
  'Прогулка по городу',
  'Восхитительный вид с вершины горы',
  'Ночная жизнь мегаполиса',
  'Расслабляющий день у бассейна',
  'Захватывающий поход в горы',
  'Красивый закат на пляже',
  'Веселая вечеринка с друзьями',
  'Тестим новую камеру!',
  'Затусили с друзьями на море',
  'Как же круто тут кормят!',
  'Отдыхаем...',
  'Цените каждое мгновение. Цените тех, кто рядом с вами и отгоняйте все сомнения. Не обижайте всех словами......',
  'Вот это тачка!',
  'Лето на море',
  'Собираемся в путь-дорогу',

];

const NAMES = [
  'Артем',
  'Максим',
  'Иван',
  'Дмитрий',
  'Никита',
  'Михаил',
  'Алексей',
  'Кирилл',
  'Екатерина',
  'Алина',
  'Виктория',
  'Дарья',
  'Полина',
  'Анастасия',
  'Юлия',
  'Мария',
  'Елена',
];

let commentId = 1;

// Генерация случайных чисел
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

// получение случайного элемента из массива
const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

// Создать случайный комментарий с уникальным ID случайным аватаром случайным текстом и именем
const createComment = () => ({
  id: commentId++,
  avatar: `img/avatar-${getRandomInteger(AVATAR_MIN_COUNT, AVATAR_MAX_COUNT)}.svg`,
  message: getRandomArrayElement(COMMENT_LINES),
  name: getRandomArrayElement(NAMES),
});

// Создать массив случайной длины от 0 до 30 и заполнить его комментариями
const creatComments = () => {
  const count = getRandomInteger(COMMENT_MIN_COUNT, COMMENT_MAX_COUNT);
  return Array.from({ length: count }, createComment);
};

// Создать один объект фотографию, включающий: ID, URL, description, likes and Comments
const createPictureDescription = () => {
  const randomId = getRandomInteger(1, PICTURE_COUNT);
  return {
    id: randomId,
    url: `photos/${randomId}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
    comments: creatComments(),
  };
};

console.log(createPictureDescription());

// Создать массив из 25 фотографий
const createPictures = () => Array.from({ length: PICTURE_COUNT }, createPictureDescription);

console.log(createPictures());


