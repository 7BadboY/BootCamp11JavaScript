const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true
  };
  
 user.mood = 'happy';
 user.hobby = 'javascript';
 user.premium = false;

//  console.log(user);
for (let key in user) {
  // console.log(user[key]);
}

const keys = Object.keys(user);
// console.log(keys);
for(let key of keys){
console.log(key);
} 


const entries = Object.entries(user);
console.log(entries);
for (let key of entries) {
  console.log(key);
}