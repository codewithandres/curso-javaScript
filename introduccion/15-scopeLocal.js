
/*
    local scope o variables locales
    - Son varibles declaradas dentro de una funcion
    - solo podemos acceder ha ellas dede dentro de una funcion 
*/

var obtenerNumerLetras = (nombre) => {
    var numer = nombre.length;

    console.log(`${nombre} tiene ${numer} de letras`);

    var funcionAnidada =  () => {
        console.log(numer);
    }
    funcionAnidada();
}

obtenerNumerLetras('andres');