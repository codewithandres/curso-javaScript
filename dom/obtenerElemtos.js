/*
    📌 getElementById();
    Nos permite obtener un elemto en base a su atributo id
*/
const contenedor1 = document.getElementById('contenedor1');

/*
    📌 Children
    Nos permite aceder ha los hijos de elemto padre 
*/
console.log(contenedor1.children);

/*
    📌 parentElement
    Nos permite obtener el elemento padre de un elemento
*/
console.log(contenedor1.parentElement);

/**
  📌 getElementByTagName()
  Nos permite obtener una coleccion de elementos en base ala etiqueta.
  Nota: Deveulve una coleccion de HTML Una colecion no es un arreglo
*/

const div = document.getElementsByTagName('div');
console.log(div);
console.log(`Tenemos ${div.length} de elememtos`);

/*
    📌 getElementByClaseNmae()
    Nos permite obtener una coleccion de elementos en base a su clase css
    Nota: Devuelve una colecion de HTML
*/
const clases = document.getElementsByClassName('contenedor');
console.log(clases);

/*
    📌 querySelector();
    Nos Devuelve el primer elemento que coincida con un selector de estilo css.
    Nota: Nos Devuelve un nodoList
*/
const caja = document.querySelector('#contenedor1 .caja');
console.log(caja);

/*
    📌 querySelectorAll();
    Nos Devuelve el primer elemento que coincida con un selector de estilo css.
    Nota: Nos Devuelve un nodoList
*/

const caja2 = document.querySelectorAll('#contenedor1 .caja');
console.log(caja2);
caja2.forEach((caja) => console.log(caja2));

/*
    📌 Closest
    Nos permite bucar de dentro hacia afuera de un elemento 
*/
const ultimaCaja = document.querySelector('.caja:last-child');
console.log(ultimaCaja.closest('.contenedor-principal'));

/*
    📌 podemo9s encadnar todos los metodos para obtener elementos 
*/
const contenedor2 = document.getElementById('contenedor2');
console.log(contenedor2.querySelector('caja'));