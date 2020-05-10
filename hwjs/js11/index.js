"use strict";

// const colors = [
//     '#FFFFFF',
//     '#2196F3',
//     '#4CAF50',
//     '#FF9800',
//     '#009688',
//     '#795548',
//   ];
//   const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   };

//   const body = document.body;
// console.log(body);
// let interval;
// const startHandler = function ({target}) {
//     if (target.dataset.action === "start"){
//     target.setAttribute("disabled",true)
//         interval = setInterval(() =>{
//             body.style.background = colors[randomIntegerFromInterval(0, colors.length)];
//         },1000)
//         } else if (target.dataset.action === "stop"){
//             clearInterval(interval);
//             body.children[0].removeAttribute("disabled")
//         }
//     }
//     body.addEventListener("click",startHandler)
// const delay = ms => {
//     const promise = new Promise ((res, rej) => {
//        setTimeout( ()  => {
//            res(ms)
//        }, ms)
//      })
//      return promise
//     // Твой код
//   };
  
//   const logger = time => console.log(`Resolved after ${time}ms`);
  
//   // Вызовы функции для проверки
//   delay(2000).then(logger); // Resolved after 2000ms
//   delay(1000).then(logger); // Resolved after 1000ms
//   delay(1500).then(logger); // Resolved after 1500ms
// const users = [
//     { name: 'Mango', active: true },
//     { name: 'Poly', active: false },
//     { name: 'Ajax', active: true },
//     { name: 'Lux', active: false },
//   ];
  
//   const toggleUserState = (allUsers, userName, callback) => {
//       const promise = new Promise((res,rej)=>{
//         const updatedUsers = allUsers.map(user =>
//             user.name === userName ? { ...user, active: !user.active } : user,
//           );
//           res(updatedUsers);
//       })
 
  
//     return promise;
//   };
  
//   const logger = updatedUsers => console.table(updatedUsers);
  
//   /*
//    * Сейчас работает так
//    */
// //   toggleUserState(users, 'Mango', logger);
// //   toggleUserState(users, 'Lux', logger);
  
//   /*
//    * Должно работать так
//    */
//   toggleUserState(users, 'Mango').then(logger);
//   toggleUserState(users, 'Lux').then(logger);
    const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
      
      const makeTransaction = (transaction) => {
          const promise = new Promise((res,rej)=>{
            const delay = randomIntegerFromInterval(200, 500);
            setTimeout(() => {
                const canProcess = Math.random() > 0.3;
                if (canProcess) {
                  res({id:transaction.id, time:delay});
                } else {
                  rej(transaction.id);
                }    
              }, delay);
          }
          )
          return promise;
    
      
      };
      
      const logSuccess = ({id, time}) => {
        console.log(`Transaction ${id} processed in ${time}ms`);
      };
      
      const logError = id => {
        console.warn(`Error processing transaction ${id}. Please try again later.`);
      };
      
      /*
       * Работает так
       */
    //   makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
    //   makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
    //   makeTransaction({ id: 72, amount: 75 }, logSuccess,
    