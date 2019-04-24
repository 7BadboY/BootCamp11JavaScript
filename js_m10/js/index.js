'use strict';

// const about = {
//     name: 'Eddy',
//     isActive: true,
//     hobby: {
//         run: true,
//         jump: false,
//     }
// };

// console.log(about);

// const jSonAbout = JSON.stringify(about);
// console.log(jSonAbout);

// const parseAbout = JSON.parse(jSonAbout);
// console.log(parseAbout);


// ---------------------------------------------------------
// const url = 'https://api.myjson.com/bins/k9i31'
// const privatBankUrl = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';

// // // fetch('https://api.myjson.com/bins/k9i31')
// // let newDate;
// fetch(url)
// .then(response => response.json())
// .then( response => {
//     if (response.ok) 
//     return response.json()
//     throw new Error('Error')
// })
// .catch(err => console.error('error!!!', err)
// );
// fetch(privatBankUrl)
// .then(response => response.json())
// .then( response => {
//     if (response.ok) 
//     return response.json()
//     throw new Error('Error')
// })
// .catch(err => console.error('error!!!', err)
// );
// // .then( data => {
// //     let num = document.querySelector('.num')
// //     num.textContent = data.name;
// })
// // .then( data => newDate = data)
// // setTimeout(function(){
// //     console.log(newDate)
// // },300);


// console.log('second');

// function getPost(posts) {
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${posts}`)
//     .then( response => response.json())
//     // .then( data => console.log(data))
// }
// getPost(5).then(data => console.log(data));

// function getPhotos(photos) {
//     return fetch(`https://jsonplaceholder.typicode.com/photos/${photos}`)
//     .then( response => response.json())
//     // .then( data => console.log(data))
// }
// getPhotos(2777).then(data => console.log(data.url));

const newObj = {
    name: 'Segey',
    last: 'YarotskiY',
    car: {
        first: 'Jaguar',
        second: 'Aston',
        third: 'BMW 750i',
    },
    kill: true,
    eat: true,
    normalLive: false,

};

const url = 'https://jsonplaceholder.typicode.com/posts';

const settings = {
    method: "POST",
    body: JSON.stringify(newObj),
    headers: {
        "Content-type" : "application/json"
    }
};

fetch(url, settings) 
.then( response => response.json())
.then(data => console.log(data));




