'use strict'

// 1) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

// let arr = ['a', 'b', 'c'];

// let newArr = [1, 2, 3];

// console.log(arr.concat(newArr));

// 2) Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

// let arr = ['a', 'b', 'c'];
// arr.push(1, 2, 3);
// console.log(arr);


// 3) Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

// let arr = [1, 2, 3];
// let arr2 = [4, 5, 6];

// console.log(arr.concat(arr2));


// 4) Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

// const arr  = [1, 2, 3];
// console.log(arr.reverse());


// 5) Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

// const arr = [1,2,3];
// arr.push(4,5,6);
// console.log(arr);

// 6) Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// const arr = [1,2,3];
// arr.unshift(4,5,6);
// console.log(arr);

// 7)  Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.

// const arr = ["js", "css", 'jq']
// console.log(arr[0]);

// 8) Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

// const arr = ['js', 'css', 'jq'];
// console.log(arr[2]);

// 9) Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].

// const arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(0,3);
// console.log(newArr);

// 10) Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5]. Скрыть решение.

// const arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(3);
// console.log(newArr);

// 11) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// const arr = [1, 2, 3, 4, 5];
// arr.splice(1,2);
// console.log(arr);

// 12)  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4]. Показать решение.

// const arr = [1, 2, 3, 4, 5];
// let newArr = arr.splice(1,3);
// console.log(newArr);

// 13) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]. Показать решение.

// const arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);

// 14) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']. Показать решение. (edited)
// const arr = [1, 2, 3, 4, 5];
// arr.splice(1,0,'a','b');
// arr.splice(6,0,'c');
// arr.splice(8,0,'e');
// console.log(arr);

// ========================================================

// // 1) Вибираємо випадкове число (від 0 до довжини масива);

// const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// let random = Math.floor(Math.random() * arr.length);
// console.log(arr[random]);

// // 2) Записати в змінну звернення типу масив[індекс];

// const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// let something = arr[7];
// console.log(something);

// // 3) Вивести змінну з пунтку 2 в алерт;
// 1) Через prompt вводимо свій варіант тваринки
// 2) Варіант компютера записати в змінну
// 3) Порівнюємо наш варіант з копютерним
// 3,1) Якщо варіанти співпали тоді виводимо алертом що юзер виграва.
// 3,2) Якщо варіанти не співпали кажемо що користувач програв і виводимо варіант компютера.

// const animals = ['dog', 'cat', "fish", 'rabbit', 'tiger'];
// let index = Math.floor(Math.random()*animals.length);
// // alert(animals[index]);
// let userInput = prompt('Введите животное');

// userInput === animals[index] ? alert("you'r win") : alert(`you'r loose, right choice ${animals[index]}`);

// ========================================================

// Написати гру Камінь Ножиці Папір.
// Варіанти вибору потрібно зберігати в масиві
// Користувач вводить свій варіант
// Компютер вибирає свій рандомний варівант з масиву
// Первіряємо вибір користувача і вибір компютера. 
// Опрацювати всі варіанти:
// 1) Варіанти де виграє користувач
// 2) Варіанти де виграє компютер
// 3) Варіанти де виходить нічия.

// const arr = ['камень', 'ножници', 'бумага'];
// let random = Math.floor(Math.random() * arr.length);
// let pc = arr[random];
// let userInput = prompt("камень, ножници, бумага");
// if (userInput === pc) {
//     alert('ничья');
// } else if (userInput === arr[1] && pc === arr[2] || userInput === arr[2] && pc === arr[0] || userInput === arr[0] && pc === arr[1]) {
//     alert(`вы победили, ваш выбор ${userInput}, выбор компьютера ${pc}`);
// } else if (userInput === arr[2] && pc === arr[1] || userInput === arr[0] && pc === arr[2] || userInput === arr[1] && pc === arr[0]) {
//     alert(`вы проиграли, ваш выбор ${userInput}, выбор компьютера ${pc}`);
// } else {
//     alert('соблюдайте правила');
// }
// ========================================================

// 1) Записуємо в змінну строку з промта
// const ask = prompt('somthing');
// console.log(ask);
// // 2) Зробити строку масивом
// let arr = ask.split('')
// // 3) Скопіювати масив
// let newArr = arr.slice();
// // 4) Реверсимо масив
// newArr.reverse();
// // 5) З масивів робимо строки
// let str = newArr.join()
// // 6) Порівнюємо дві строки і виводимо результат в консоль;
// console.log(ask);
// console.log(str);


// ==========================================================

// let logins = ['rew', 'qwewwe', 'apple', 'js', 'row', 'col']

// // 1) Запитати логін
// let askLogin = prompt('Введите логин');
// // 2) Перевірити чи існує логін в базі
// logins.includes(askLogin) ? alert("Такий логін вже існує") : alert("Вітаємо");
// // 3) Якщо логін існує вивести алерт ("Такий логін вже існує")
// // 4) Якщо логін не існує вивести алерт ("Вітаємо") 

// ==========================================================

// ========================================================================================     Day 2   ============================================
//================ task 1 ===============


/*
 * Есть массив имен пользователей
 * Используя методы массива, последовательно выполнить указанные операции
 */

// let users = ["Mango", "Poly", "Ajax", "Chelsey"];

// // Удалить первый элемент массива
// users.shift();
// console.log(users); // ["Poly", "Ajax", "Chelsey"]

// // Удалить последний элемент массива
// users.pop();
// console.log(users); // ["Poly", "Ajax"]

// // Добавить в начало массива пользователя "Lux"
// users.unshift('Lux');
// console.log(users); // ["Lux", "Poly", "Ajax"]

// // Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
// users.push('Jay', 'Kiwi');
// console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// // Удалить из массива элемент хранящийся в переменной userToDelete
// const userToDelete = "Ajax";
// users.splice(users.indexOf(userToDelete),1);
// console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

// // Добавить в массив пользователя "Kong", перед пользователем хранящейся в переменной userToInsertBefore
// const userToInsertBefore = "Jay";
// users.splice(users.indexOf(userToInsertBefore), 0, 'Kong');
// console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]

//=============================task 2=======

//Задание 1 Вывести числа от 4 до 400 на экран.

// let num = 4;
// while (num < 400) {
//     num++;
//     console.log(num);
// };

// for (let num = 4; num <= 400; num ++) {
//     console.log(num);
// };

//=============================task 3 ===============

//Задание 2 Вывести числа в последовательности: 4 7 10 13 с помощью цикла.

// for (let num = 4; num <= 13; num += 3) {
//     console.log(num);
    
// };

//=============================task 4 ===============

//Задание 3 Вывести числа 654 653 652 до нуля.

// for (let i = 654; i >= 0; i --) {
//     console.log(i);
    
// };

//=============================task 5 ===============

//Задание 4 Вывести все годы с 1983 до 2017.

// for (let i = 1983; i <= 2017; i++ ) {
//     console.log(i);
    
// }
//============================== task 6 ===============

// //Дано число n=1000. Делите его на 2 стaолько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num
// let n = 1000;
// // let i = 0;
// // do {
// //     n /= 2; 
// //     i ++;
// // } while (n >= 50)
// // console.log(n, i);
  
// for(let i = 1; n >= 50; i++){
//     n /= 2;
//     console.log(n, i);
// };

//============================== task 7 =================================

// Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
// let mass = [2, 5, 9, 15, 0, 4];
// for (let i = 0; i <= mass.length; i ++) {
//     if (mass[i] > 3 && mass[i] < 10)
//     console.log(i);
// }

//==============================task 8 =================================

// Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
// let mass = [2, 5, 9, 15, 0, 4, -4, -7, -8];
// let sum = 0;
// for (let i = 0; i <= mass.length; i ++) {
// if (mass[i] > 0) {
//     sum += mass[i];
//     }
// }
// console.log(sum);

//=========================== tasks 9 =======================

// Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// let mass = [1, 2, 5, 9, 4, 13, 4, 10];

// for (let i = 0; i <= mass.length; i ++) {
//     if (mass[i] === 4) {
//         alert('yeap');
//     }
// };

// for (let i of mass) {
//     if (mass[i] === 4)
//     alert('yeap')
// };

//============================ task 10 =====================

// Дан массив числами, например: ['10', '20', '30', '50', '235', '3000']. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5. 

// let arr = ['10', '20', '30', '50', '235', '3000'];

// for (let i of arr) {
//     if (Number(i[0]) === 1 || Number(i[0]) === 2 || Number(i[0]) === 5) {
//         console.log(arr[arr.indexOf(i)]);
//     }
// };

//=========================== task 11 =========================

/*
* Есть массив имен пользователей users
*
* Напиши цикл, который для каждого пользователя будет выводить в консоль
* сообщение в формате [номер элемента] - [значение элемента]. 
* 
* Нумерация должна начинаться с 1. К примеру для первого элемента массива
* с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'
*
* Цикл должен выводить сообщения до тех пор, пока не закончатся элементы массива
*/

// const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];

// // for (let i = 0; i < users.length; i++) {
// //     console.log(i+1, users[i]);
// // }
// for(let i of users) {
//     console.log(`${users.indexOf(i) + 1} - ${i}`);
// }
//========================== task 12 =========================

/*
* Напиши скрипт по автоматизации оплаты процесса гравировки украшений.
* Гравировка одного слова стоит 10 кредитов.
*/

// // В переменной message хранится произвольная строка
// const message = "Proin sociis natoque et magnis parturient montes mus";
// let price = 0;

// // Разбить строку в массив, разделитель - пробел, и записать в переменную words
// let words = message.split(' ');
// console.log(words);

// // Выведи в консоли длину массива words
// console.log(words.length); // 8

// // Используя цикл вычисли сколько будет стоить гравировка и запиши результат в переменную price
// for (let i of words) {
//     i = 10;
//     price += i;
// }
// console.log(price); // 80

//============================= task 13 ============================
/*
  Напиши цикл, который просит, через prompt, ввести число больше 100. 
  
  Если посетитель нажал Cancel - завершить цикл.
  
  Если посетитель ввёл другое число – попросить ввести ещё раз, 
  и так далее, пока не введет число больше 100.
  
  Предполагается, что посетитель вводит только числа, 
  обрабатывать невалидный ввод вроде строк 'qwerty' не нужно.
  
  PS: используй бесконечный цикл с прерыванием
*/
// let ask;
// do { 
// ask = prompt('Введите число больше 100');
// } while (ask <= 100 && ask !== null); 

//============================= task 14 ===============================
 /*
  Напиши скрипт, который выбирает из массива numbers 
  все числа, которые больше чем значение переменной num, 
  записывая эти числа в массив matched.
      
  В результате в массиве matched будут все подходяшие числа.
      
  PS: используй цикл for или for...of и оператор ветвления if
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const matched = [];

// for (let el of numbers) {
//     if (el > num) {
//         matched.push(el);
//     }
// };
// console.log(matched); // [17, 14, 14, 32, 18, 26]

//==================== task 15 ===============================================
/*
  Напиши скрипт, который проверяет произвольную строку 
  в переменной message и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

// const message = "May the force be with you";
// let mass = message.split(' ');
// let longestWord;
// let max = 0;

// for (let i of mass) {
//     if (i.length > max) {
//         max = i.length;
//         longestWord = i;
//     }
// }
// console.log(longestWord); // 'force'
//================== task 16 ===============================================
/*
  Создай игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Предполагаем что пользователь вводит только числа, проверки на невалидный ввод не делать. 
  Проверить содержит ли в себе массив numbers введенное число.
  
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

// const numbers = [12, 15, 25, 37, 41, 62, 74, 83];

// let min = numbers[0];
// let max = numbers[numbers.length - 1];

// let ask = prompt(`Введите цифру между ${min} и ${max}`);
// if (numbers.includes(+ask)) {
//     alert('Поздравляем, Вы угадали!')
// } else {
//     alert('Сожалеем, Вы не угадали!')
// };
//============================= task 17 ===================================
/*
  Напиши скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.
  - Проверять что пользователь ввел не число не обязательно
  - Заканчивает запрашивать числа как только пользователь нажмёт Cancel.
  - После того как ввод был завершен, если массив не пустой, 
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/
// let ask;
// let arr = [];
// let result = 0;

// do { 
//     ask = prompt('Enter number');
//     if (ask !== null && ask !== 0 && Number(ask) ) {arr.push(ask)};
//     console.log(arr);
// } while (ask !== null); 


// for (let el of arr) {
//     result += Number(el);
// }
// console.log(`Сумма: ${result}`);
//============================= ***ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ*** =============================
/*
  Создайте игру угадай число.
  
  Есть массив чисел numbers, содержащий "верные" числа.
  Числа в массиве всегда идут по возрастанию, 1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Эти значения необходимо
  сохранить в переменные min и max. Учтите что массив произвольный,
  но элементы всегда идут по возрастанию.
  
  Пусть prompt говорит "Введите цифру между x и y", где x и y 
  соотвественно самый маленький и самый большой элемент массива.
  
  Но пользователь может ввести что угодно, необходимо проверить 
  что было введено. Преобразовать input в числовой тип и проверить 
  число ли это.
  
    - Если не число - выводим alert с сообщением о том, что было 
      введено не число.
    - Если число - проверить содержит ли в себе массив numbers это число.
    - Если содержит - выводим alert с сообщением 'Поздравляем, Вы угадали!'.
    - Есл не содержит - выводим alert с сообщением 'Сожалеем, Вы не угадали!'.
*/

// const numbers = [12, 15, 25, 37, 41];

// let min = numbers[0];
// let max = numbers[numbers.length -1];
// let userInput = prompt(`Enter number from ${min} to ${max}`);

// const isNumber = !Number.isNaN(Number(userInput));
// if (isNumber) {
//   if (numbers.includes(Number(userInput))) {
//     alert("You'r right");
//   } else {
//     alert("You'r not right");
//   }
// } else {
//   alert("It's not a number");
// };

//========================== ***ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ*** =====================

/*
  Написать следующий скрипт:
  
    - При загрузке страницы пользователю предлагается ввести через prompt число. 
      Число введенное пользователем записывается в массив чисел.
      
    - Операция ввода числа пользователем и сохранение в массив продолжается до
      тех пор, пока пользователь не нажмет Cancel в prompt. Используйте цикл do...while.
      
    - После того как пользователь прекратил ввод нажав Cancel, необходимо взять 
      массив введенных чисел, сложить общую сумму всех элементов массива и 
      записать ее в переменную. Используйте цикл for или for...of.
      
    - По окончанию ввода, если массив не пустой, вывести alert с текстом `Общая сумма чисел равна ${сумма}`
      
  🔔 PS: Делать проверку того, что пользователь ввел именно число, а не произвольный набор 
      символов, не обязательно. Если хотите, в случае некорректного ввода покажите alert с текстом 
      'Было введено не число, попробуйте еще раз', при этом результат prompt записывать 
      в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.
*/

let userInput;
const numbers = [];
let total = 0;


//========================== ***ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ*** =====================
/*
  Напишите скрипт имитирующий авторизацию пользователя.
  
  Есть массив паролей зарегистрированных пользователей passwords. 
  
  При посещении страницы, необходимо попросить пользователя ввести свой пароль,
  после чего проверить содержит ли массив passwords пароль введенный пользователем.
  
  Пароль можно ввести не верно всего n раз, кол-во хранится в переменной attempts.
  Подсказка: используйте цикл do...while.
  Если был введен пароль который есть в массиве passwords, вывести alert 
  с текстом 'Добро пожаловать!' и прекратить спрашивать пароль в цикле.
  Если был введен не существующий пароль, отнять от лимита попыток единицу, 
  вывести alert с текстом "Неверный пароль, у вас осталось n попыток", 
  где n это оставшийся лимит. 
  
  После того как пользователь закрыл alert, запросить пароль снова. 
  Продолжать запрашивать пароль до тех пор, пока пользователь не введет 
  существующий пароль, не кончатся попытки или пока пользователь 
  не нажмет Cancel в prompt.
  Если закончились попытки, вывести alert с текстом "У вас закончились попытки, аккаунт заблокирован!"
  
  Если пользователь нажмет Cancel, прекратить выполнение цикла.
*/

// const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
// let attempts = 3;
