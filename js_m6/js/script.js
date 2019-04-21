'use strict';
// =============================================Prototypes practice===========================
// const obj = {};
// const x = new Object();

// console.log(obj);
// console.log(x);


// const parent = {
//     parentProp: 'this is a parent prop',
//     a: 5,
// };

// // const child = {
// //     childProp: 'this is a child prop'
// // };

// // child.__proto__ = parent;
// // console.log(child.parentProp);

// const child = Object.create(parent);
// child.childProp = 'this is a child prop';

// console.log(child.hasOwnProperty('a'));
// console.log(child.a);


// const a = {
//     x: 5,
// };

// const b = Object.create(a);

// b.y = 10;

// const c = Object.create(b);

// console.log(c);
// c.hasOwnProperty('x');
// -------------------------------------------------------------------------------------------------------------------

// function Hero(name, level) {
//     // this = ()
//     // this.__proto__ = Hero.prototype
//     this.name = name;
//     this.level = level;
//     // return this;
// }

// // Hero.prototype.getName = function() {
// //     return this.name;
// // };

// // Hero.prototype.value = 5;

// Hero.prototype.setLevel = function (level) {
//     this.level = level;
// };


// // const mango = new Hero ('mango', 1);
// // mango.setLevel(777);

// // console.log(mango.getName());
// // console.log(mango);

// function Warrior(name, level, weapon) {
//     this.weapon = weapon;
// }

// Warrior.prototype = Object.create(Hero.prototype);

// Warrior.prototype.attack = function() {
//     console.log(`${this.name} attacks with ${this.weapon}`);  
// };




// // ==================================================================== task 1 =================================================
// /*
//   Напиши функцию-конструктор Account, которая добавляет будущему
//   объекту поля login, email. 
  
//   В prototype функции-конструктора добавь метод getInfo(), 
//   который выводит в консоль значения полей login и email. 
  
//   Обрати внимание, метод всего один, в поле prototype функции-конструктора, 
//   а использовать его смогут все экземпляры, по ссылке.
  
//   Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
// */

// const Account = function (login, email) {
//     this.login = login;
//     this.email = email;
// };

// Account.prototype.getInfo = function() {
//     console.log(`login: ${this.login}, email: ${this.email}`);
// };

// const account = new Account('Mangozedog', 'mango@dog.woof');

// console.log(Account.prototype.getInfo); // function
// account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// // ==================================================================== task 2 ==================================================
// /*
//   Напиши ES6 класс StringBuilder.
  
//   На вход (в конструкторе) он получает один параметр string - строку,
//   которую записывает в свойство _value.
  
//   Добавь классу следующие методы:
  
//     - геттер value - возвращает текущее значение поля _value
  
//     - append(str) - получает парметр str (строку) и добавляет ее в конец _value
    
//     - prepend(str) - получает парметр str (строку) и добавляет ее в начало value
  
//     - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
// */

// function StringBuilder (string = " ") {
//     this.value = string;
    
//     StringBuilder.prototype.getValue = function() {
//         console.log(this.value);    
//     };

//     StringBuilder.prototype.append = function (str) {
//         builder.value = `${builder.value}${str}`;
//     };

//     StringBuilder.prototype.prepend = function (str) {
//         builder.value = `${str}${builder.value}`;
//     };

//     StringBuilder.prototype.pad = function (str) {
//         builder.value = `${str}${builder.value}${str}`;
//     };
// };

// const builder = new StringBuilder('.');

// builder.append('^'); 
// console.log(builder.value); // '.^'

// builder.prepend('^'); 
// console.log(builder.value); // '^.^'

// builder.pad('='); 
// console.log(builder.value); // '=^.^='
// // ==================================================================== task 3 ==================================================
// /*
//  * Напиши класс Car с указанными свойствами и методами
//       /*
//         Добавь свойства:
//           - speed - для отслеживания текущей скорости, изначально 0.
//           - maxSpeed - для хранения максимальной скорости 
//           - running - для отслеживания заведен ли автомобиль, возможные значения true или false. Изначально false.
//           - distance - содержит общий киллометраж, изначально с 0
//       */
// */

// class Car {
//     constructor({ maxSpeed = 0 }) {
//         this.speed = 0;
//         this.maxSpeed = maxSpeed;
//         this.running = false;
//         this.distance = 0;
//     }
  
//     turnOn() {
//       // Добавь код для того чтобы завести автомобиль
//       // Просто записывает в свойство running значание true
//       return this.running = true;
//     }
  
//     turnOff() {
//       // Добавь код для того чтобы заглушить автомобиль
//       // Просто записывает в свойство running значание false
//       return this.running = false;
//     }
  
//     accelerate(spd) {
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed
//       if (spd <= this.maxSpeed) {
//         return this.speed = spd;
//       }
//     }
  
//     decelerate(spd) {
//       // Записывает в поле speed полученное значение, при условии что
//       // оно не больше чем значение свойства maxSpeed и не меньше нуля
//       if (spd <= this.maxSpeed && spd >= 0) {
//         return this.speed = spd;
//       }
//     }
  
//     drive(hours) {
//       // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//       // но только в том случае если машина заведена!
//       if (this.turnOn) {
//         return this.distance = hours; 
//       }
//     }
//   }
  
//   const car = new Car({ maxSpeed: 300 });

// // console.log('Turn on the car', newCar.turnOn());
// // console.log('Change speed', newCar.accelerate(40));
// // console.log(newCar.accelerate(140));
// // console.log("Your distance", newCar.drive(2));
// // console.log('Change speed', newCar.decelerate(0));
// // console.log("Turn off the car", newCar.turnOff());
  

// // // ==================================================================== task 4 ==================================================
// // /*
// // * Добавь к классу Car из предыдущего задания статический
// // * метод getSpecs, который принимает объект-машину как параметр
// // * и выводит в консоль значения полей maxSpeed, speed, running и distance.
// // */

// // const car = new Car({ maxSpeed: 100 });
// car.turnOn();
// car.accelerate(50);
// car.drive(2);

// Car.getSpecs(car); // maxSpeed: 100, speed: 50, running: true, distance: 100
// console.log(`maxSpeed: ${this.maxSpeed},speed: ${this.speed}, running: ${this.running}, distance: ${this.distance}`);

// // // ==================================================================== task 5 ==================================================
// // /*
// // * Добавь классу Car свойство цены автомобиля, назови его сам.
// // * Добавь геттер и сеттер value, который будет работать с свойством цены автомобиля.
// // */

// // const car = new Car({ maxSpeed: 50, price: 2000 });
// // console.log(car.value); // 2000

// // car.value = 4000;
// // console.log(car.value); // 4000

// !!!!!!!!!!!!!!!!!!!=====================================================         Home Work        ==============================================!!!!!!!!!!!!!!!!!!!!!

/*
  Сеть фастфудов предлагает несколько видов гамбургеров.
  Основа (булочка) гамбургера может быть большой или маленькой (обязательно):
	- маленькая (+30 денег, +50 калорий)
	- большая (+50 денег, +100 калорий)
  Гамбургер может быть с одной из нескольких видов начинок (обязательно):
	- сыром (+15 денег, +20 калорий)
	- салатом (+20 денег, +5 калорий)
	- мясом (+35 денег, +15 калорий)
  Дополнительно, гамбургер можно:
	- посыпать приправой (+10 денег, +0 калорий)
	- полить соусом (+15 денег, +5 калорий)
  Напишите скрипт, расчитывающий стоимость и калорийность гамбургера. Используте ООП подход,
  создайте класс Hamburger, константы, методы для выбора опций и рассчета нужных величин.
  Написанный класс должен соответствовать следующему jsDoc описанию. То есть класс должен содержать
  указанные методы, которые принимают и возвращают данные указанного типа.
*/

/**
 * Класс, объекты которого описывают параметры гамбургера.
 */
class Hamburger {
    /**
     * @constructor
     * @param {String} size - Размер
     * @param {String} stuffing - Начинка
     */
    constructor(size, stuffing) {
      this._size = size;
      this._stuffing = stuffing;
      this._toppings = [];
    }
  
    /**
     * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
     * @param {String} topping - Тип добавки
     */
    addTopping(topping) {
        return !this._toppings.includes(topping) ? this._toppings.push(topping) : null;
    }
  
    /**
     * Убрать topping, при условии, что она ранее была добавлена
     * @param {String} topping - Тип добавки
     */
    removeTopping(topping) {
        return this._toppings.includes(topping) ? this._toppings.splice(this._toppings.indexOf(topping),1) : null;
    }
  
    /**
     * Получить список toppings
     * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.toppings и нам вернет массив добавок
     */
    getToppings() {
        return this._toppings;
    }
  
    /**
     * Узнать размер гамбургера
     * @returns {String} - размер гамбургера
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.size и нам вернет размер
     */
    getSize() {
        return this._size;
    }
  
    /**
     * Узнать начинку гамбургера
     * @returns {String} - начинка гамбургера
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.stuffing и нам вернет начинку
     */
    getStuffing() {
        return this._stuffing;
    }
  
    /**
     * Узнать цену гамбургера
     * @returns {Number} - Цена в деньгах
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.price и нам вернет сумму.
     */
    calculatePrice() {
        return this._toppings.reduce((acc,el) => acc + Hamburger.TOPPINGS[el].price, 0);
    }
    get price() {
        Hamburger.SIZES[this.size].price + Hamburger.STUFFINGS[this.stuffing].price + this.calculateToppingsPrices()
    }
  
    /**
     * Узнать калорийность
     * @returns {Number} - Калорийность в калориях
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.calories и нам вернет сумму.
     */
    calculateCalories() {
        return this._toppings.reduce((acc, el) => acc + Hamburger.TOPPINGS[el].calories,0);
    }
    get calories() {
        return Hamburger.SIZES[this._size].calories + Hamburger.STUFFINGS[this._stuffing].calories + this.calculateToppingsCalories();
    }
  }
  
  /*
    Размеры, виды добавок и начинок объявите как статические поля класса.
    Добавьте отсутсвующие поля по аналогии с примером.
  */
  Hamburger.SIZE_SMALL = 'SIZE_SMALL';
  Hamburger.SIZE_LARGE = 'SIZE_LARGE';
  
  Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: {
      price: 30,
      calories: 50,
    },
    [Hamburger.SIZE_LARGE]: {
        price: 50,
        calories: 100,
    },
  };
  
  Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
  Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
  Hamburger.STUFFING_MEAT = "STUFFING_MEAT";
  
  Hamburger.STUFFINGS = {
    [Hamburger.STUFFING_CHEESE]: {
      price: 15,
      calories: 20,
    },
    [Hamburger.STUFFING_SALAD]: {
        price: 25,
        calories: 15,
    },
    [Hamburger.STUFFING_MEAT]: {
        price: 40,
        calories: 50,
    },
  };
  
  Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
  Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';
  Hamburger.TOPPING_COFFE = 'TOPPING_COFFE';
  
  Hamburger.TOPPINGS = {
    [Hamburger.TOPPING_SPICE]: {
      price: 10,
      calories: 0,
    },
    [Hamburger.TOPPING_SAUCE]: {
        price: 15,
        calories: 20,
    },
    [Hamburger.TOPPING_COFFE]: {
        price: 25,
        calories: 30,
    },
  };
  
  /* Вот как может выглядеть использование этого класса */
  
  // Маленький гамбургер с начинкой из сыра
  const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
  
  // Добавка из приправы
  hamburger.addTopping(Hamburger.TOPPING_SPICE);
  
  // Спросим сколько там калорий
  console.log("Calories: ", hamburger.calculateCalories());
  
  // Сколько стоит?
  console.log("Price: ", hamburger.calculatePrice());
  
  // Я тут передумал и решил добавить еще соус
  hamburger.addTopping(Hamburger.TOPPING_SAUCE);
  
  // А сколько теперь стоит?
  console.log("Price with sauce: ", hamburger.calculatePrice());
  
  // Проверить, большой ли гамбургер?
  console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
  
  // Убрать добавку
  hamburger.removeTopping(Hamburger.TOPPING_SPICE);
  
  // Смотрим сколько добавок
  console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1
  
  /*
    🔔 Обратите внимание на такие моменты:
          ✔️ класс не взаимодействует с внешним миром. Это не его дело, этим занимается
              другой код, а класс живет в изоляции от мира
          ✔️ обязательные параметры (размер и начинка) мы передаем через конструктор,
          чтобы нельзя было создать объект, не указав их
          ✔️ необязательные (добавка) добавляем через методы
          ✔️ типы начинок обозначены "константами" с понятными именами (на самом деле просто
              свойствами, написанным заглавными буквами, которые мы договорились считать "константами")
          ✔️ объект создается через конструктор - функцию, которая задает начальные значения полей.
          ✔️ в свойствах объекта гамбургера логично хранить исходные данные (размер, тип начинки),
                а не вычисленные из них (цена, число калорий и т.д.). Рассчитывать цену и калории
          логично в тот момент, когда это потребуется, а не заранее.
*/

