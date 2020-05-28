"use strict"
// const arr =["a","b","c","d","e"];
// array.forEach((element,index) =>console.log(`${index}`)

// );

// const user = {
//     name: 'Petia',
//     age: '29',
//     gender: 'male',
//     isWorking: true
// }
// user.hasPet = true;

// user.isWorking = false

// delete user.gender

// console.log(Object.keys(user).length);

// for (const key in user) {
//     console.log(`${key}: ${user[key]}`)
// }




// let  arr = [];
// let messege = prompt("enter number")
// do { 
//     messege
//     arr.push(messege)
// } while (!messege );
// arr.reduce((acc, el)=>acc += el,0);


// const arr = ["oleg","klark","dan"];
// arr.unshift("nikita");
// arr.pop()
// arr.shift()
// console.log(arr);
// const str = "hello my name is dan";
// const arr = str.split(" ");
// console.log(arr.length);
// const newArr = arr.slice(1)
// console.log(newArr);
// newArr.reverse();
// const newStr = newArr.join(" ");
// console.log(newStr)

// const arr = [
//     {
//        name: "a",
//        age: 2
//     },
//     {
//        name:"b",
//        age: 3
//     },
//     {
//        name:"c",
//        age: 1
//     }
// ];
// const newArr = arr.filter(el => el.age > 1);
// console.log(newArr);

// const sum = arr.reduce((acc,el) => acc += el.age > 0);
// console.log(sum);
// const year = arr.find
// const arr = [
//     {
//         name:"aple",
//         price:10
//     },
//     {
//         name:"pinaple",
//         price:120
//     },
//     {
//         name:"lemon",
//         price:30
//     },
//     {
//         name:"nut",
//         price:15
//     },
// ]

// const list = document.querySelector("#list")

// const str = arr.reduce((acc, el) => acc += `<li><h2>${el.name}</h2><p>${el.price}</p></li>`,"")
// list.innerHTML = str

const controll = document.querySelector("#control");
const incris = (value) => value +=1;
const decris = (value) => value -=1;
const g = function(e){
    console.log(e.target.dataset.control);
    
    if (e.target.dataset.control === "decris") {
        control.children[1].textContent = Number(control.children[1].textContent ) - 1;
    }else if(e.target.dataset.control === "incris"){
        control.children[1].textContent = Number(control.children[1].textContent ) + 1;
    }else {
        return;
    }
}
control.addEventListener("click", g);
console.log(control.children[1].textContent);

}