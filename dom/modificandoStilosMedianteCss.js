const primeraCaja = document.querySelector('#contenedor1 .caja');
console.log(primeraCaja.classList);

// classList.add() - Nos permite agregar clases
const agregarClase = () => primeraCaja.classList.add('activa');

// classList.remove() - Nos permite remover clases
const eliminarStylos = () => primeraCaja.classList.remove('activa');

const toggleClass = () => primeraCaja.classList.toggle('activa');

const comprobar = () => {
    if (primeraCaja.classList.contains('activa')) {
        console.log('la caja tiene la clase actiav');
    } else {
        console.log('la caja tiene la clase actiav');
    }

    primeraCaja.classList.forEach(clase => {
        console.log(`tiene estas clases: ${clase}`);
    });

}