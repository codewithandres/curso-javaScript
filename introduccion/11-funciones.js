// Forma #1
function saludo(){
    console.log('Hola!');
}
saludo();

// forma #2 asiganado una funcion ha una variable
const saludo2 = function () {
    console.log('hola.! Desde variable');
}
saludo2()

// Forma #3 de tipo flecha
const saludo3 = () => console.log('hola.! dede arrow fucion')
saludo3();