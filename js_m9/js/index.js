'use strict';
// ----------------------------Promise--------------------------------------

// let prize = Math.floor(Math.random()*2);

// function shooter (arrow) {
//     console.log('вы сделали выстрел');
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(function(){
//             Math.random() > .5 ? resolve('вы попали') : reject('вы промахнулись');    
//         }, 3000); 
//     });
//     return promise;
// } 
// function win() {
//     console.log('вы выиграли');
// }
// function prizes () {
//     if (prize === 1) {
//         console.log('ПИВО!!!');
//     } else {
//         console.log('vodka');    
//     }
// }
// // shooter({},
// //     function () {
// //         console.log('head');
// //         win();
// //         prizes();
// //     },
// //     function () {
// //         console.log('error');
// //     });
// shooter ({})
//     .then(head => console.log(head))
//     .then(win)
//     .then(prizes)
//     .catch(mised => console.log(mised))
//     .finally(() => console.log('finished'));



// // =======================================add tasks================================

// ========================================= task 1 =============================
/*
 * Есть массив цветов в hex-формате и кнопки Start и Stop.
 *
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 *
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
 */

// const colors = [
//     "#FFFFFF",
//     "#2196F3",
//     "#4CAF50",
//     "#FF9800",
//     "#009688",
//     "#795548"
// ];

// const body = document.body;
// const startButton = document.querySelector('[data-action="start"]');
// const stopButton = document.querySelector('[data-action="stop"]');
// let id; 

// startButton.addEventListener('click', start);

// function start () {
//     id = setInterval(() => {
//         let randomColor = Math.floor(Math.random() * colors.length);
//         let clr = colors[randomColor];
//         body.style.backgroundColor = clr;
//     }, 500);
//     startButton.setAttribute('disabled', true);
// }
// stopButton.addEventListener('click', stop);

// function stop () {
//     startButton.removeAttribute('disabled');
//     clearInterval(id);
// }

// =============================================== task 2 ========================================

/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Используйте возможности объекта Date для работы со временем.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/

// function getFormattedTime(time) {
//     const date = new Date(time);

//     let min = 10 > date.getMinutes() ? `0${date.getMinutes()}` : date.getMinutes();
//     let sec = 10 > date.getSeconds() ? `0${date.getSeconds()}` : date.getSeconds();
//     let milliSec = date.getMilliseconds();

//     return `${min}:${sec}.${Math.abs(Math.floor(milliSec/100))}`;
//   }
  
//   console.log(
//     getFormattedTime(1523621052858)
//   ); // 04:12.8
  
//   console.log(
//     getFormattedTime(1523621161159)
//   ); // 06:01.1
  
//   console.log(
//     getFormattedTime(1523621244239)
//   ); // 07:24.2
   
  
// ============================================= task 3 ==========================================


