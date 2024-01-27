/*
    .length - devuelve el numero de caracteres de una cadena de texto
*/
const texto = 'Hola yo soy Andres';
console.log(texto.length);

/*
    indexOf() .lastindexOf(); - devuelve el index del primer/ultimo caracter especificado 
*/
console.log(texto.indexOf('A') + ' indexOf()');
console.log(texto.lastIndexOf('s') + ' indexOf()');


/*
    slice()
    Devuelve un fracmento de una cadena de texto 
    -1er paramatro - index desde donde queremos cortar 
    2do - paramtro (obciocnal) index hasta donde queremos cortar
*/
const indice = texto.indexOf('A');
const lastindice = texto.lastIndexOf('s')
console.log(texto.slice(indice, lastindice));
/*
    .replace();
    Devuelve una cadena de texto en donde remplaza un valor por otro
    1er parametro - el texto que queremos remplazar
    2do - parametro - el texto que queremos remplazar  
*/

const resulatdo = texto.replace('Andres', 'Fabian');
console.log(resulatdo);

/*
    .split()
    convierte una cadena de texto en un arreglo tenemos que especifiacar donde cortar cada elemento
    1er - parametro - el carcter que funcionara como separador
*/ 

const resulatdo2 = texto.split(' ');
console.log(resulatdo2);