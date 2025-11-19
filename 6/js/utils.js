// Генерация случайных чисел
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

// получение случайного элемента из массива
const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

// Export
export { getRandomInteger, getRandomArrayElement };
