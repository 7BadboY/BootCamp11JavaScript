'use strict';

const Counter = function({ initialValue = 0, step = 1 }) {
// this = {}
this.value = initialValue;
this.step = step;
};

Counter.prototype.increment = function() {
    this.value += this.step;
};

Counter.prototype.decrement = function() {
    this.value -= this.step;
};
const counter = new Counter ({ initialValue: 0, step: 1 });

const counterValueField = document.querySelector('.js-counter-value');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

counterValueField.textContent = counter.value;

incrementBtn.addEventListener('click', () => {
    counter.increment();
    console.log('counter.value: ', counter.value);
    console.log('clicked increment');
    counterValueField.textContent = counter.value;

});

decrementBtn.addEventListener('click', () => {
    counter.decrement();
    console.log('counter.value: ', counter.value);
    console.log('clicked decrement');
    counterValueField.textContent = counter.value;
})
