// window.alert('Hola');

console.log(`la ventana del navegador mide ${window.innerWidth}px de ancho`);
console.log(`la ventana del navegador mide ${window.innerHeight}px de alto`);


let ventana;
const abrir = () => {
    ventana = window.open('http://google.com', 'Eta es mi nueva ventana', 'width=500, height=500');
    ventana.document.write('<h1>escribiendo en mi nueva ventana</h1>');
}
const cerrar = () => ventana.close();

//  screem Object

console.log('el ancho de la monitor es', window.screen.width);
console.log('el alto de la monitor es', window.screen.height);

console.log('el amcho disponible de la monitor es', window.screen.availWidth);
console.log('el alto disponible -de la monitor es', window.screen.availHeight);

