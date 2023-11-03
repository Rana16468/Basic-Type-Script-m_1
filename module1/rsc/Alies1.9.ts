{

    // type alies 

    type Student={
        name:string,
        gender:string,
        phoneNumber?:string,
        address:string,
        age:number
    }

    const student1:Student={
        name:'Ali Mohammad',
        gender:'male',
        phoneNumber:'01722305054',
        address:'Thakurgoan Shantinagor',
        age:23

    }
    const student2:Student={
        name:' A M Sohel Rana',
        gender:'male',
        phoneNumber:'01828170792',
        address:'Thakurgoan Shantinagor',
        age:24,

    }
    const student3:Student={
        name:'Amir Hamza Arif',
        gender:'male',
        address:'Thakurgoan Shantinagor',
        age:25,

    }


    type UserName=string;
    type isAdmin=boolean;
    const userName:UserName="Sohel Rana";
    const admin:isAdmin=true



   type Add=(num1:number,num2:number)=> number;
   const add:Add=(num1,num2)=>num1+num2;

   
}