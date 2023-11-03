{
    // nullable types 
    const searching=(value:string | null)=>{

        if(value){
            console.log('searching the value')
        }
        else{
            console.log('searching the all value ');
        }
    }

    searching(null);

    //unknown 

    const getSpeedMetterSceond=(value:unknown)=>{

        if(typeof value==='number'){
            const converter=(value*1000)/3600;
            console.log(`Speed is the ${converter.toFixed(4)} ms`)
        }
        else if(typeof value==='string'){
            const stringConvert=value?.split(" ");
            const [spees,meter]=stringConvert;
            const converter=(parseFloat(spees)*1000)/3600;
            console.log(`Speed is the ${converter.toFixed(4)} ${meter}`);
        }
        else{
            console.log('Others ')
        }
    }
    getSpeedMetterSceond(null);

    const throwError=(value:string):never=>{
        throw new Error(value);
    }
    throwError('muslilsay error ho gaya ')
}