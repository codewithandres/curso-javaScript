/*
operadores  logiocos

- && and o i
- || or
- ! negacion
*/

const nombre = 'fabain';
const edad = 19;
const tieneEntrada = false;
const tienePermiso = true;

// ejemplo 1
const permitirAcceso = edad => 18 && tieneEntrada;


// ejemplo #2 OR

const permitirAcceso2 = ( edad >= 18 && tieneEntrada )  || tienePermiso  && tieneEntrada;
console.log('acceso permitido al consierto' + permitirAcceso2);

// ejemplo #3
