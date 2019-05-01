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

class Counter {
    constructor(onChange) {
        this.value = 0;
        this.onChange = onChange;
        this.increment = this.increment.bind(this);
        this.decriment = this.decriment.bind(this);
    }
    increment() {
        this.value += 1;
        this.onChange(this.value);
    }
    decriment() {
        this.value -= 1;
        this.onChange(this.value);
    }
}

let plus = document.querySelector('button[data-action = "add"]');
let minus = document.querySelector('button[data-action = "sub"]');
let valueSpan = document.querySelector('.value');

function changeValue(value) {
    valueSpan.textContent = value;
}

const counter = new Counter(changeValue);
console.log(counter.onChange);

plus.addEventListener('click', counter.increment);
minus.addEventListener('click', counter.decriment);

