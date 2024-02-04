/**
     📌 Elemento.innerHTML
    Nos permite cambair el contenido HTM de un elemento    
 */
const primerCaja = document.querySelector('.caja');
primerCaja.innerHTML = '<b>Hola<b/>';

/*
    📌 elemento.atributa
    Nos permite acceder y cambiar atributos del elemento
*/
primerCaja.id = 'nuevoid';

/*
    📌 Elemento.setAtribute();
    Nos permite agregar o esteblacer el valor de un atributo del elemtento
*/
primerCaja.setAttribute('class', 'caja activa');
primerCaja.setAttribute('data-id', '123-456-789');

/*
    elemeto.style.property
    nos permite cambiar los stylos css de un elemento
*/

const contenedor2 = document.querySelector('#contenedor2 .caja');
contenedor2.style.background = '#000';
contenedor2.style.color = '#fff';
