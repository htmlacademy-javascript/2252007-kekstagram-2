// 1. Функция для проверки длины строки
const checkStringLength = (string, maxLength) => string.length <= maxLength;

/*
console.log(checkStringLength('abcde', 3)); // false
console.log(checkStringLength('abcde', 5)); // true
*/

// 2. Функция для проверки, является ли строка палиндромом
function isPalindrom(string) {
  const normalized = string.replaceAll(' ', '').toLowerCase();

  let reversed = '';

  for (let i = normalized.length - 1; i >= 0; i--) {

    reversed += normalized[i];
  }
  return normalized === reversed;
}

/*
console.log(isPalindrom('А роза упала на лапу Азора')); // true
console.log(isPalindrom('Привет')); // false
console.log(isPalindrom('Шалаш')); // true
*/


// 3. Дополнительное задание. Функция принимает строку, извлекает содержащиеся в ней цифры
function extractNumber(string) {

  const source = string.toString();
  let result = '';

  for (let i = 0; i < source.length; i++) {
    const currentSymbol = source[i];

    const parsed = parseInt(currentSymbol, 10);

    if (!Number.isNaN(parsed)) {
      result += currentSymbol;
    }
  }

  return parseInt(result, 10);
}

/*
console.log(extractNumber('2023 год')); // 2023
console.log(extractNumber('ECMAScript 2024')); // 2024
console.log(extractNumber('1 кефир, 0.5 батона и 2.5 кг яблок')); // 10525
console.log(extractNumber('Без цифр')); // NaN
*/
