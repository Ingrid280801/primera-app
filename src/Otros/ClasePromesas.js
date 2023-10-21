import {getHeroByOwner, getHeroID} from "./Otros/ClaseFind";

/*
const promesa = new Promise( (resolve, reject) =>{

    setTimeout( () => {
        const p1 = getHeroID(2);
        reject('No se pudo encontrar el heroe');
    }, 5000)
});




promesa.then( (heroe) => {
    console.log('Heroe:', heroe)
});


promesa.catch(err=>console.warn(err));*/



const getHeroIDAsync = (id) => {

    return new Promise((resolve, reject) =>{

        setTimeout(()=>{
            const p1 =getHeroID(id);
            resolve(p1);
        }, 5000);
        
    });

};



getHeroIDAsync(4).then( (heroe) =>{
    console.log('Heroe:', heroe);
});

