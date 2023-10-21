const personajes = ["Goku", "Vegeta", "Picoro", "Gohan"];

console.log (personajes[0]);
console.log (personajes[1]);
console.log (personajes[2]);
console.log (personajes[3]);

const [ p1, ,p3 ] = personajes;

console.log(p1);
console.log(p3);

const retornaArreglo = () => {

        return ['ABC', 123];

    }

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

//Ejercicio

const userState = (valor) => {

    return [valor, ()=>{console.log('Hola Mundo')}];

}


const [nombre, mensaje]= userState('Goku');

console.log(nombre);
mensaje();


