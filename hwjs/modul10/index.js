"use strict"


const obj = {
    name: "Valentin",
    male: "male",
    isActive: true,
    age: 79
};

const str = JSON.stringify(obj);
console.log(obj);

console.log(str);
const  notStr =JSON.parse(str);
console.log(notStr)

LocalStorage.setItem("user", str);

const num = LocalStorage("text");
console.log("num");

localStorage.removeItem("user");