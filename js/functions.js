// Функция для проверки длины строки
const checkStringLength = (string, maxLength) => {
  if (string.length <= maxLength) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

// Функция для проверки, является ли строка палиндромом
function isPalindrom(string) {
  string = string.replaceAll(' ', '');
  string = string.toLowerCase();

  let reversed = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  console.log(string === reversed);
  return string === reversed;
}


// Дополнительное задание
function extractNumber(string) {

  string = string.toString();
  let result = '';

  for (let i = 0; i < string.length; i++) {
    const currentSymbol = string[i];
    const parsed = parseInt(currentSymbol);

    if (!Number.isNaN(parsed)) {
      result += currentSymbol;
    }
  }

  if (result === '') {
    return NaN;
  }
  return parseInt(result);
}
