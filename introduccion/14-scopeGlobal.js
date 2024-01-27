/*
    Global Scope o varibles Globales
    - son variables declaradas fuera de una funcion 
    - podemos acceder ha ellas dede cualquier parte del codigo
    - podemos usar let o cosnt var
*/

var nombre = 'fabian'

console.log(nombre);

const slaudo = () => {
    console.log('hola ' + nombre);
    
    nombre = 'arturo'

    console.log('hola ' + nombre)
}

slaudo()