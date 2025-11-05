// Функция для проверки длины строки
const checkStringLength = (string, maxLength) => {
  if (string.length <= maxLength) {
    // console.log(true);
    return true;
  } else {
    // console.log(false);
    return false;
  }
};
console.log(checkStringLength('Hello', 10));

// Функция для проверки, является ли строка палиндромом
function isPalindrom(string) {
  string = string.replaceAll(' ', '');
  string = string.toLowerCase();

  let reversed = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  // console.log(string === reversed);
  return string === reversed;
}
console.log(isPalindrom('А роза упала на лапу Азора'));


// Дополнительное задание
function extractNumber(string) {

  string = string.toString();
  let result = '';

  for (let i = 0; i < string.length; i++) {
    const currentSymbol = string[i];
    const parsed = parseInt(currentSymbol, 10);

    if (!Number.isNaN(parsed)) {
      result += currentSymbol;
    }
  }

  if (result === '') {
    return NaN;
  }
  return parseInt(result, 10);
}
console.log(extractNumber('abc123def'));
