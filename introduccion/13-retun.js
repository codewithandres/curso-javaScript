/*
 * La sentacia return sirve para asiganar un a valor  aun avaribel y termina la ejecucion de la misma ya sea funciones o condicionales 
*/

const operacion  = ( tipo, numer1, numero2) => {

    if (tipo === 'suma') return  numer1 + numero2;
    else if (tipo === 'resta') return numer1 - numero2;

}
const variable = operacion('suma',652,254);

console.log(variable);