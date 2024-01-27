/*
    .toString()
    convierte una varible de tipo numbe ha una de tipo String
*/
const numero = 10;
console.log(numero, typeof numero);

const texto = numero.toString();
console.log(texto, typeof texto);

/*
    .toFixed()
    permite obtener un numero con la cantidad de decimales especificados 
*/
const numero2 = 3.1415;
console.log( numero.toFixed(3) );

/*
    parseIn()
    intenta trasnformar un valor en un entero
*/

const numero3 = parseInt( prompt( 'escribe un numer' ) ) 
const numero4 = parseInt( prompt( 'escribe un numer' ) ) 
console.log(numero3 , numero4);

/*
    .parceFloat()
    intenta Trasnformar un valor a un numero con decimales
*/

const numero5 = parseFloat( prompt( 'escribe un numer' ) ) 
const numero6 = parseFloat( prompt( 'escribe un numer' ) ) 
console.log(numero3 , numero4);

/*
    Math.random()
    Genera un numero al azar entre 0 y 1
*/
const numero7 = Math.random();
console.log(numero7);

/*
    Math.Floor()
    redondea hacia abajo un numero
*/
console.log(Math.floor('24.555'));


/*
    Math.ceil()
    redondea hacia arriba un numero
*/
console.log(Math.ceil('24.99'));

/*
    Math.round()
    redondea hacia el entero mas cercano
*/
console.log(Math.round('2.6'));

/*
    ejemplo de numero al hazar 0 a 100   
*/
const numero8 = Map.random();

console.log(Math.floor(numero8) * 100);