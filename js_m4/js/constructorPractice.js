'use strict';

const Counter = function({ initialValue = 0, step = 1 }) {
// this = {}

this.value = initialValue;
this.step = step;

this.increment = function() {
    this.value += this.step;
}

// return this;
};




const counterA = new Counter({ initialValue : 10, step : 5 });
console.log('counterA.value', counterA.value);
counterA.increment()
console.log('counterA.value', counterA.value);

const counterB = new Counter({ initialValue : 101, step : 15 });

console.log(counterA, counterB);
