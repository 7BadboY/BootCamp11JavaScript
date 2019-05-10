'use strict';
// ======================================= Task 1 =======================================
/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

// const buttonClickCoounter = document.querySelector('.button');
// buttonClickCoounter.addEventListener('click', () => buttonClickCoounter.textContent++);


// ======================================= Task 2 =======================================

/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/

// const firstImput = document.querySelector('.firstInput');
// const secondImput = document.querySelector('.secondInput');
// const button = document.querySelector('button[data-action="add"]');
// const result = document.querySelector('.result');

// function sum (el1, el2) {
//     result.textContent = +el1.value + (+el2.value);
//     return result.textContent;
// }
// button.addEventListener('click', () => sum(firstImput,secondImput));

// ======================================= Task 3 =======================================

/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/

// class Counter {
//     constructor(onChange) {
//         this.value = 0;
//         this.onChange = onChange;
//         this.increment = this.increment.bind(this);
//         this.decriment = this.decriment.bind(this);
//     }
//     increment() {
//         this.value += 1;
//         this.onChange(this.value);
//     }
//     decriment() {
//         this.value -= 1;
//         this.onChange(this.value);
//     }
// }

// let plus = document.querySelector('button[data-action = "add"]');
// let minus = document.querySelector('button[data-action = "sub"]');
// let valueSpan = document.querySelector('.value');

// function changeValue(value) {
//     valueSpan.textContent = value;
// }

// const counter = new Counter(changeValue);
// console.log(counter.onChange);

// plus.addEventListener('click', counter.increment);
// minus.addEventListener('click', counter.decriment);

// ======================================= Task 4 =======================================

/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/

// const questionBtn = document.querySelector('.question-form');
// let userChoise = document.querySelectorAll('input');
// let userButton = document.querySelector('.btn');
// let result = document.querySelector('.result');

// function submitForm (event) {
//   event.preventDefault();
//   Array.from(userChoise).find(i => i.checked === true ? result.textContent = `Result: ${i.value}` : null);

// }
// userButton.addEventListener('click', submitForm);

// ======================================= Task 5 =======================================

/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/

// const imgList = document.querySelector('.images');
// imgList.addEventListener('click', () => alert(event.target.src));

// ======================================= Task 6 =======================================

/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/

// const list = document.querySelector('.list');

// function deletionLi (event) {
//   event.preventDefault();
//   let target = event.target;
//   if (target.nodeName !== 'BUTTON') return;
//   target.parentNode.remove();
// }
// list.addEventListener('click', deletionLi);
// ======================================= Task 7 =======================================

/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

// const inputList = document.querySelector('.input-list');
// inputList.addEventListener('focusout', checkInput);

// function checkInput(elem) {
//   let elemValue = elem.target.value;
//   ['valid', 'invalid'].forEach((k) => elem.target.classlist.remove(k));
  
//   elemValue.length === Number(elem.target.dataset.length) ? elem.target.classlist.add('valid') : elem.target.classlist.add('invalid');
// }

// let inputParent =  document.querySelector('.input-list');

// function getResult (el) {
//   el.target.addEventListener('blur', verification);
// }

// function verification (event) {
//   let target = event.target;
//   if (target.value.length === +target.dataset.length) {
//     target.classList.remove('invalid');
//     target.classList.add('valid');
//   } else {
//     target.classList.remove('valid');
//     target.classList.add('invalid');
//   }
// }
// inputParent.addEventListener('click', getResult);

// ======================================= Task 8 =======================================

/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/

// const message = document.querySelector('.message');
// const input = document.querySelector('.input');
// const text = document.querySelector('.input-value');
// input.querySelector('focus', render);
// function render() {
//   message.textContent = 'input is in focus!';
// }
// function textInput() {
//   text.textContent = `Current input value: ${input.value}`;
// }
// input.addEventListener('input', textInput);
// ======================================= Task 9 =======================================

/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/

// let buttonToOpen = document.querySelector('.btn');
// let modalWindow = document.querySelector('.modal');
// let closet = document.querySelector('[data-action="close-modal"]');


// function open () {
//   modalWindow.classList.remove('modal-hidden'); 
// }

// function close (event) {
//  if (event.target === closet || event.target === modalWindow) {
//   modalWindow.classList.add('modal-hidden');
//  }
// }
// modalWindow.addEventListener('click', close);
// buttonToOpen.addEventListener('click', open);

// ======================================= Task 10 =======================================

/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

