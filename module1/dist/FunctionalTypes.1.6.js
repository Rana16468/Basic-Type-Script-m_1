"use strict";
// functional types
// normal function 
//arrow function 
function add(num1, num2 = 10) {
    return num1 + num2;
}
add(10, 20);
const addArrow = (num1, num2) => {
    return num1 + num2;
};
addArrow(10, 20);
// method ---> object 
const poorUser = {
    name: 'Ali Mohammad Sohel Rana',
    balance: 0,
    addBalance(balance) {
        return `The Total Balance is :${this.balance + balance}`;
    },
};
console.log(poorUser.addBalance(1000));
const array = [1, 3, 5, 7, 9];
const squir = array.map((v) => v * v);
console.log(squir);
