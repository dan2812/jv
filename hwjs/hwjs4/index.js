'use strict'
// const multiplyNumeric = function(obj){
//   for(let key in obj){
//       if(typeof obj[key]==="number"){
//           obj[key] * 2 ;
//       }
//   }
// };
// let menu ={
//     width: 200,
//    height:300,
//    title:"My menu" 
// };
// // /const multiplyNumeric = function(obj){
//     const printMessage = function(message) {
//         console.log(message);
//       };
      
//       const higherOrderFunction = function(callback) {
//         const string = 'HOCs are awesome';
//         callback(string);
//       };
      
//       higherOrderFunction(printMessage);


// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     discount = value;
//   },
//   showOrders() {
//     return orders;
//   },
//   addOrder(cost, order) {
//     balance -= cost;
//     orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter(item => item !== itemName);
  },
};

const invokeInventoryAction = function(itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
};

invokeInventoryAction('Medkit', inventory.add.bind(inventory));
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']x

invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']