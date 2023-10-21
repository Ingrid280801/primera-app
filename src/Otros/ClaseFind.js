
/*import { heroes } from "./data/heroes";


const getHeroID = (id) => {

    return heroes.find(( heroe ) => {
        if(heroe.id ===id){
            return true;
        }else{
            return false;
        }
    });
}


console.log(getHeroID); 

export const getHeroID = (id) => heroes.find((heroe)=>heroe.id===id);


console.log (getHeroID(3));



export const getHeroByOwner = (owner) => heroes.find ((heroe=>heroe.owner===owner));
console.log(getHeroByOwner('DC'));*/

import cualquiercosa, { owners } from '../data/heroes';

export const getHeroID = ( id ) => cualquiercosa.find((heroe) => heroe.id === id);

export const getHeroByOwner = (owner) => cualquiercosa.filter((heroe) => heroe.owner === owner);