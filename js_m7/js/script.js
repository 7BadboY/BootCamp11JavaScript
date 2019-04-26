'use stict';
// ======================================= Task 1 ===============================
/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/

// const firstLi = Array.from(
//   document.querySelectorAll('.categories > li')
// );
// console.log(firstLi);

// const listUl = Array.from(
//   document.querySelectorAll('.categories li ul')
// );
// console.log(listUl);

// const pushList = [];

// firstLi.forEach(el => {
//   pushList.push(`Categori: ${el.firstChild.textContent.trim()} / Amount: ${el.firstElementChild.children.length}`);
// });
// console.log(pushList);
// ---------------------------------------------------------------------------
// let ul = document.querySelectorAll('.categories > li');
// console.log(ul);
// ul.forEach(el => console.log(el.firstChild.data.trim(), el.firstElementChild.childElementCount));

// ============================================ Task 2 ==============================================

/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/

// const textColor = document.querySelector('.list');
// textColor.firstElementChild.style.color = 'red';
// textColor.lastElementChild.style.color = 'blue';

// ============================================== Task 3 ================================================

// /*
//   Дан ul склассом .list и массив строк. 

//   Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
// */

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// // const elementsList = document.querySelector('.list');

// // for (let items of elements) {
// //   let item = document.createElement('li');
// //   item.textContent = items;
// //   elementsList.append(item);
// // }
// // console.log(elementsList);

// // -----------------------------------------------------------------

// let elementsList = document.querySelector('.list');
// elements.map(el => elementsList.innerHTML += `<li>${el}</li>`)

// // ================================================== Task 4 ================================================

// /*
//   Напишите скрипт для создания галлереи изображений. 

//   - На вкладке HTML уже есть ul.gallery.
//   - Используйте массив объектов для создания тегов img вложенных в li
//   - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
//     изображение было 300px по ширине
//   - Добавьте все элементы галлереи в ul.gallery
// */

// const galleryItems = [
//   {
//     url:
//       "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Two Brown Hen and One Red Rooster"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "Macaw Birds"
//   },
//   {
//     url:
//       "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     alt: "2 Lion on Grass Field during Daytime"
//   }
// ];

// let galleryList = document.querySelector('.gallery');

// // for (let img of galleryItems) {
// //   let item = document.createElement('img');
// //   item.setAttribute('src', img.url);
// //   item.style.width = '300px';
// //   item.style.height = '200px';
// //   let li = document.createElement('li');
// //   li.append(item);
// //   galleryList.append(li);
// // }
// // ------------------------------------------------------------------------

// let items = galleryItems.reduce((acc, el) => acc + `<li><img style ='width: 300px' src=${el.url} alt=${el.alt}></li>`);
// galleryList.innerHTML = items;

// ================================================================= Task 5 ======================================================

/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/

// let sizeFilter = document.querySelectorAll('.size-filter li label input');
// let arr1 = Array.from(sizeFilter);
// let arr2 = arr1.filter(el => el.checked === true); 
// console.log(arr2);


// function collectInputData(arr2) {
//   return arr2.map(el => el.value);
// }
// console.log(collectInputData(arr2));

// ================================================= Task 6 =============================================

/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/


function createMovieCard() {
  let card = document.querySelector('.movie');
  let img = document.createElement('img');
  img.className = 'movie__image';
  img.setAttribute('src', 'http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg');
  img.setAttribute('alt', 'movie image');
  card.append(img);

  let movieBody = document.createElement('div');
  movieBody.className = 'movie__body';
  card.append(movieBody);

  let movieTitle = document.createElement('h2');
  movieTitle.className = 'movie__title';
  movieTitle.textContent = 'The Godfather';
  movieBody.append(movieTitle);

  let movieDiscription = document.createElement('p');
  movieDiscription.className = 'movie__discription';
  movieDiscription.textContent = "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would - be killers, launching a campaign of bloody revenge.";
  movieTitle.append(movieDiscription);

  let movieDate = document.createElement('p');
  movieDate.className = 'movie__date';
  movieDate.textContent = 'Released: 1972-03-14';
  movieDiscription.append(movieDate);

  let movieRating = document.createElement('p');
  movieRating.className = 'movie__rating';
  movieRating.textContent = 'Rating: 8.6';
  movieDate.append(movieRating);
}
createMovieCard();