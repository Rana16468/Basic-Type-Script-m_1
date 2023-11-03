// object --> refrance type object

const userInfo:{
   readonly companyName:'Programming Hero'; // type -->literal type
    firstName:string;
    middleName?:string; // optional ?----> if the middle name not exist the program continously running without error

    lastName:string 
}={
    companyName:'Programming Hero',
    firstName:'Ali',
    middleName:'Mohammad',
    lastName:'Sohel Rana'
};

userInfo.firstName='Joy'

console.log(userInfo);