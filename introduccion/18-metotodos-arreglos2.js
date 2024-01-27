/*
   .indexpOf() 
    obtenemos el primer index de un elemento
    si no hay elemntos nos retorna -1
 * 
 */

const nombres = ['Carlos', 'Rafael', 'Estefania', 'rodrigo', 'Rafael', 'Gema', 'Diana', ' sara'];

// indexOf()
const indice = nombres.indexOf('Estefania')
console.log(indice);

/*
 * .lasindexOf()
    obtenemos el ultimo index de un elemento
 */
const indice2 = nombres.lastIndexOf('Gema');
console.log(indice2);

/*
    .forEach()
    nos permite recorrer un narreglo y ejecutar una funcion por cada elemento 
*/
nombres.forEach((nombre, index) => {
    console.log(`Hola ${nombre} (${index})`);
})

/*
 * .find() 
    Nos permite Recorrer un arreglo y devuelve el primer elemeto que retorna  
 */
const reusltado = nombres.find((nombre) => {
    if (nombre[0] === 'R') {
        return nombre
    };
})
console.log(reusltado);

/*
     .map()
     Nos permite ejecutat una funcion por cada elemento y crear un nuevo arreglo en base a los resultados de esa funcion
*/
// const nombresMayusculas = nombres.map(nombre =>{
//     return nombre.toUpperCase();
// })
// const nombresMayusculas = nombres.map(nombre => nombre.toUpperCase())
// console.log(nombresMayusculas);

/*
    .filter()
    Nos permite ejecutar una funcion por cada elemnto
    y luego crear una arreglo en base alos resulatados de uan funcion nos devueve solo los elementos que cumplan con al condicion
*/

const nombre4letras = nombres.filter(nombre => {
    if (nombre.length === 4) {   
        return nombre;
    }
});
console.log(nombre4letras);
/* 
    .includes()
    Nos permite saber si un arreglo contiene un elemnento especificado
*/
console.log(nombres.includes('carlos'));

/*
    .every()
    Mos permite ejecutar un condicional sobre cada elemento y nos devuelve true si TODOS los elelmetos cumplieron con la condicion
*/

nombres.every((nombre) => {
    if (typeof nombre ==='string'){
        return true;      
    }else{
        return false
    }
})
/*
    .some()
    Nos permite ejecutar una condicional sobre cada elemento y nos develve true si ALGUN elemento cumplio la condicion
*/

const cumple = nombres.some((nombre) => {
    if (typeof nombre === 'number') {
        return true;
    } else {
        return false;
    }
})
console.log(cumple);