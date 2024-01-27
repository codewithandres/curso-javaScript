const months = ['March', 'Jan', 'Feb', 'Dec'];
const letras = ['c','d', 'a ', 'b']
const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
const amigos = ['Sebas', 'tatiana', 'jesus'];
const frutas = ['fresa', 'manzanas', 'uvas', 'piñas', 'mangos ', 'Naranja', 'melon']
/*
    .length
    (Propiedad) - nos permite conocer la cantidad de elementos de un arreglo
*/
console.log(months.length);
/*
    .toString()
    (Propiedad) - Nos permite transformar a una cadena de texto por ejemplo para poder mostrarlo en el navegador
*/
months.toString();

/*
    .join()
    (propiedad) - Nos permite trasnformar un arreglo a una cadena de texto y  separar cada elemento
*/
console.log(months.join('-'));

/*
    .sort()
    (propiedad) - Nos permite ordenar un arreglo de cadenas de texto, de forma alfabetico
*/

months.sort();
console.log(months);


/*
    .reverse()
    (propiedad) - Nos permite ordenar un arreglo de decendente
*/
months.reverse()
console.log(months);

/*
    .reverse()
    Nos permite juntar dos arreglos en uno solo
*/

const arreglo = months.concat(letras);
console.log(arreglo);

/*
    .reverse()
    - Nos permite agregar un elemto al final de un arreglo
*/
months.push('octubre');
console.log(months);

/*
    .reverse()
    - Nos permite eliminar un elemto al final de un arreglo
*/
months.pop();
console.log(months);

/*
    .Shift()
    - elimina el primer elemento de un array y rrecorre los elemetos y nos deveukve el elemto eliminado
*/
const ElementoEliminado = dias.shift();
console.log(ElementoEliminado);

/*
    .unshift()
    - Agrega un elemeto al Inicio del arreglo y empuja los demas
*/
dias.unshift('Lunes');
console.log(dias);

/*
    .splice()
     Nos permite insertar elementos a un arreglo donde le especificamos 
     - 1er paramtro - posicion donde queremos comenzar a insertar los elementos
     - 2do parametro si queremos eliminar elementos del arreglo desde la posicion indicada
     - resto de parametrosd - los elementos ha insertar
*/
amigos.splice(1,0,'Orlando', 'jaun');
console.log(amigos);


/*
    .slice()
     Nos permite copiar una parte de un arreglo a otro 
     - 1er parametro - posicion desde donde queremos copiar 
     - 2do parametro - Hasta antes de que elemetos copiar
     - resto de parametrosd - los elementos ha insertar
*/

const frutasFavoritas = frutas.slice(1,4)
console.log(frutasFavoritas);