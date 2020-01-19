"use strict";

// const letters = ["a", "b", "c"];

// letters.forEach((el, i) => console.log(`${i} - ${el}`));

// const number = [1, 2, 3];

// const doubler = number.map(el => el * 2);

// console.log(number);
// console.log(doubler);

// const users = [
//   { name: "Mango", isActive: true },
//   { name: "Poly", isActive: false },
//   { name: "Ajax", isActive: true }
// ];

// const name = users.map(el => el.name);

// console.log(name);

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const less = numbers.filter(el => el < 5);

// const more = numbers.filter(el => el > 5);
// console.log(less);
// console.log(more);

// const activeUsers = users.filter(el => !el.isActive);

// console.log(activeUsers);

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const elFind = numbers.find(el => el === 5);

// console.log(elFind);

// const users = [
//   { id: "000", name: "Mango", isActive: true },
//   { id: "001", name: "Poly", isActive: false },
//   { id: "002", name: "Ajax", isActive: true },
//   { id: "003", name: "Chelsey", isActive: false }
// ];

// const user = users.find(el => el.id === "003");
// console.log(user);

// Функция которая проверяет величину значения, возвращает true или false.
// const isBigEnough = val => val >= 10;

// Допустим нам нужно узнать достаточно ли большие ВСЕ числа в коллекции.
// Все что нам нужно это буль true/false. Метод every вернет true только тогда,
// когда все элементы коллекции будут удовлетворять условию в callback-функции.

// console.log([12, 5, 8, 130, 44].every(isBigEnough)); // false
// console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true

// Допустим нам нужно узнать ЕСТЬ ЛИ в коллекции числа больше 10, хотя бы одно
// или больше. Все что нам нужно это буль true/false. Метод some вернет true
// только тогда, когда хотябы 1 или более элементов коллекции будут
// удовлетворять условию в callback-функции.

// console.log([2, 5, 8, 1, 4].some(isBigEnough)); // false
// console.log([12, 5, 8, 1, 4].some(isBigEnough)); // true

// const numbers = [[1], [2], [3], [4], [5], [6]];

// const sum = numbers.reduce((acc, el) => acc.concat(el), []);

// console.log(sum);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] }
// ];

// const sumLikes = tweets.reduce((acc, el) => (acc += el.likes), 0);

// console.log(sumLikes);

// const tags = [...new Set(tweets.reduce((acc, el) => acc.concat(el.tags), []))];

// console.log(tags);

// const numbers = [2, 1, 4, 3, 5];

const users = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27
  },
  {
    guid: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39
  }
];

// const getUserNames = users => {
//   const name = users.map(el => el.name);
//   return name;

//   // твой код
// };

// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

const getUsersWithEyeColor = (users, color) => {
  const eyeColor = users.filter(el => el.eyeColor === color);
  return eyeColor;
  // твой код
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

const getUsersWithGender = (users, gender) => {
  const genders = users.filter(el => el.gender === gender).map(el => el.name);
  return genders;
  // твой код
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

const getInactiveUsers = users => {
  return users.filter(el => !el.isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

const getUserWithEmail = (users, email) => {
  const getUserWithEmail = users.find(el => el.email);
  return getUserWithEmail;
  // твой код
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

const getUsersWithAge = (users, min, max) => {
  return users.filter(el => el.age >= min && el.age <= max);
  // твой код
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

const calculateTotalBalance = users => {
  return users.reduce((acc, el) => (acc += el.balance), 0);
  // твой код
};

console.log(calculateTotalBalance(users)); // 20916

const getUsersWithFriend = (users, friendName) => {
  return users.filter(el => el.friends.includes(friendName)).map(el => el.name);
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
const getNamesSortedByFriendsCount = users => {
  return users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(el => el.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
