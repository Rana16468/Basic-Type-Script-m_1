{
    // union type 
    

    type FrontendDeveloper='fakibazdeveloper' | 'jouniordeveloper';
    type FullstackDeveloper='frontenddeveloper' | 'backenddeveloper';
    type Developer= FrontendDeveloper  | FullstackDeveloper;

    const newDeveloper:FrontendDeveloper="fakibazdeveloper";
    console.log(newDeveloper);

    // second type
    type User={
        name:string;
        email?:string;
        gender:'male' |'female';
        bloodGroup:'A+' | 'B+' | 'B-' | 'A-' | 'AB -'| 'O-' | 'O+'
    }

    const user1:User={
        name:'sohel',
        gender:'male',
        bloodGroup:'A+',

    }

    const user2:User={
        name:'sohel rANA',
        gender:'male',
        bloodGroup:'A-',
        
    }

    // intersaction type 

    type FontEndDeveloper={
        skills:string[],
        degination1:'FrontendDeveloper'
    }
    type BackEndDeveloper={
        skills:string[],
        degination2:'BackendDeveloper'
    }

    type fullStackdeveloper=FontEndDeveloper & BackEndDeveloper;

    const developer1:fullStackdeveloper={
        skills:['HTML','CSS','NODE','EXPRESS'],
        degination1:'FrontendDeveloper',
        degination2:'BackendDeveloper'

    };
        console.log(developer1);

}