{
    // ternery operator 
//https://www.npmjs.com/package/ts-node-dev

    
    // nullish coalescing operato

  const age:number=15;
  if(age>=15){
    console.log('adualt')
  }
  else{
    console.log('not Adualt')
  }

  // nullish coalescing operato
  // null / undefined only working with the  nullish coalescing operator

  const isAuthenticated=undefined;
  const result1=isAuthenticated??'Guest';
  const result2=isAuthenticated?isAuthenticated:'Guest'
  console.log({result1},{result2});
  //optional chaning 


  type user={
    name:string;
    address:{
        city:string;
        road:string;
        presentAddress?:string; //option 
        permanentAddress:string;
    }
  }

  const user1:user={
    name:'Abduallah',
    address:{
        city:'tkg',
        road:'1273/1',
        permanentAddress:'Shantinagor'
        
    }
  }

  const result3=user1?.address.presentAddress??'Not Exist Pesent Address'

  console.log(result3);

}