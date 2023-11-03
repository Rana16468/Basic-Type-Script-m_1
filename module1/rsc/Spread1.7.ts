{


    //spread operator
    //rest operator
    //destring 

    const brost1=['Ali','Mohammad','Sohel','Rana'];
    const brost2=['Daffodil','International','University'];
    brost1.push(...brost2);
    console.log(brost1);

    const mentor1:{
        typescript:string,
        next:string
    }={
        typescript:'Sohel',next:'Rana'
    }
    const mentor2:{
        dbms:string,
        prisma:string
    }={
        dbms:'Abdullah',
        prisma:'kasham'
    }

    const mentorList={...mentor1,...mentor2};
    console.log(mentorList);

    //lern operator 

    const restFriends=(...friends:string[])=>{
        friends.forEach((v:string):void=>console.log(v));


    }
    restFriends('Amir Hamza','Pollab','Joy','Arman','Akib')

}