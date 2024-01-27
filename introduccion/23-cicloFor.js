const nombre = ['Anderes', 'sebas', 'Fredy', 'Nairo', 'Orlando', 'Lucho'];

nombre.forEach((nombre) => {
    console.log(nombre);
})

/*
    ciclo for
    repite un bloque de codigo mientras se cumpla una condicion

    1- ejecuta una sola ves antes de comenzar a repetir el bloque de codigo
    2- una condicion, mientas se cumpla se ejecutara el bloque de codigo
    3- esta exprecion se ejecuta simepre y despues de que se ejecute el bloque de codigo
*/

for (let numero = 0; numero <= 10; numero++) {
    console.log(numero);
}

for (let numero = 50; numero >= 0; numero-- ) {
    console.log(numero);
}

for (let index = 0; index < nombre.length; index++) {
    console.log(nombre[index]);    
}

for (let index = 0; index < 10; index++) {
    console.log(index * 2);    
}