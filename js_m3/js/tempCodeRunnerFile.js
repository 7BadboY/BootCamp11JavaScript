let checkForSpam = (str) => {
    return str.toLowercase(str.includes('spam')) || str.toLowercase(str.includes('sale')) ?  true : false;
  };
// // Вызовы функции для проверки
console.log( checkForSpam('Latest technology news') ); // false

console.log( checkForSpam('JavaScript weekly newsletter') ); // false

console.log( checkForSpam('Get best sale offers now!') ); // true

console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true