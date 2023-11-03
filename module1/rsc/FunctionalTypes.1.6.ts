// functional types
// normal function 
//arrow function 

function add(num1:number,num2:number=10):number
{
    return num1 + num2;

}
add(10,20);
const addArrow=(num1:number,num2:number):number=>{

    return num1 + num2;
}
addArrow(10,20);

// method ---> object 
const poorUser:{
    name:string,
    balance:number,
    addBalance:Function

}={
    name:'Ali Mohammad Sohel Rana',
    balance:0,
    addBalance(balance:number):string{
        return `The Total Balance is :${this.balance + balance}`
        

    },
    
}

console.log(poorUser.addBalance(1000));
const array:number[]=[1,3,5,7,9];
const squir:number[]=array.map((v:number):number=>v*v);
console.log(squir);