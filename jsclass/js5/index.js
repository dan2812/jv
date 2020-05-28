"use strict";

// const pers = {
//     name: "Rozbiinik",
//     age: 45,
//     male: "male",
//     appartment: true,
//     phone: "666228",
//     greetings() {
//       console.log(`Hello my name is ${this.name} and im ${this.age} years old`);
//     }
//   };
  
//   pers.greetings();
  
//   pers.friends = ["Adolf", "Iosif"];
  
//   pers.wife = true;
  
//   delete pers.friends;
  
//   console.table(pers);
  
//   for (let key in pers) {
//     console.log("Key", key);
//     console.log("Values", pers[key]);
//   }
  
//   const keysArr = Object.keys(pers);
  
//   console.log(keysArr);
  
//   pers.age = 65;
  
//   const valuesArr = Object.values(pers);

//   console.log(valuesArr);

//   const pareArr =  Object.entries(pers);

//   console.table(pareArr);

//   const numbers = [1,2,34,5,6,7,56,34,38,5];

//   const max = Math.max(...numbers)
//   console.log(max);

//   const arr = ["Tor", "Tio", "Top", "roed"];

//   const newArr = [...arr, ...numbers];
  
//   console.log(newArr);
  
//   const a = { x: 1, y: 2 };
//   const b = { x: 0, z: 3 };
  
//   const c = Object.assign({}, a, b);
//   console.log(c); // {x: 0, y: 2, z: 3}
  
//   // То же самое используя операцию spread
//   const d = { ...a, ...b };
  
//   console.log(d); // {x: 0, y: 2, z: 3}
  

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//   };
//   user.mood ="Happy";
//   user.hobby ="Skydiving";
//   user.premium  = false;
//   console.log (user);
//   const arr = Object.keys(user)
//   for(let el of arr){
//       console.log(`${el}:${user[el]}`)
//   }

// const countProps = function(obj) {
//     // твой код
//   const arr = Object.keys()
//   };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(countProps({})); // 0
  
//   console.log(countProps({ name: 'Mango', age: 2 })); // 2
  
//   console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

