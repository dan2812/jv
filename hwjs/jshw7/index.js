"use srrict";
// const list = document.querySelector("#categories");
// console.log(`в списке  ${list.children.lenght} категорий`);
// Array.from(list.children).forEach(el=>{
//     console.log(`категория:${el.firstChild.textContent}`)
//     console.log(`количество елементов:${el.lastElementChild.children.length}`)
//     console.log()
// })
// const ingredients = [
//     'Картошка',
//     'Грибы',
//     'Чеснок',
//     'Помидоры',
//     'Зелень',
//     'Приправы',
//   ];
//   const ggg = document.querySelector("#ingredient");
//   ingredients.forEach(el => {
// const li = document.createElement("li");
// li.textContent = el;
//     ggg.append(li);
//   })
// const images = [
//     {
//       url:
//         'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'White and Black Long Fur Cat',
//     },
//     {
//       url:
//         'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//     },
//     {
//       url:
//         'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'Group of Horses Running',
//     },
// ];
// const gallery = document.querySelector("#gallery");
// const image = images.reduce((acc, el) => acc + `<li><img src=${el.url} class = "pic" alt=${el.alt}></li>`,"")      )
// const nameInput = document.querySelector("#name-input");
// const nameOutput = document.querySelector("#name-output");

// const name = function({target}){
// if(target.value.length === 0){
//     nameOutput.textContent = 'незнакомец';
// } else{
//     nameOutput.textContent = target.value
// }
// }
// nameInput.addEventListener('input',name)
// const input = document.querySelector("#validation-input");
// function inputHandLer() {
//     if (input.value.length <= input.dateset.length){
// input.className = 'valid';
//     } else {
//     input.className = 'invalid';
//     }
// }
//  input.addEventListener("focusout", inputHandLer);
// const qwerty = document.querySelector("#font-size-control");
// const span = document.querySelector("#text");
// function ggg() {
//     Console.log(qwerty.value);
//     span.style.fontSize = qwerty.value + "px";
// }
// qwerty.addEventListener("input", ggg);
const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");
const randomColor =()




function createBoxes(amount) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);


}

