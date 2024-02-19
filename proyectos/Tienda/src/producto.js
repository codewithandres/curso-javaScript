import {
    InputCatidad,
    btnDisminuirCantidad,
    btnIncrementarCantidad,
    productoIamgen,
    propiedadColor,
    thumb
} from './variables/index'



thumb.addEventListener('click', e => {

    if (e.target.tagName === 'IMG') {
        const imagenSrc = e.target.src;
        const lasIndex = imagenSrc.lastIndexOf('/');
        const nombreImagen = imagenSrc.substring(lasIndex + 1);

        productoIamgen.src = `./img/tennis/${nombreImagen}`;
    }
});

propiedadColor.addEventListener('click', e => {
    if (e.target.tagName === 'INPUT') {
        const colorIamgen = e.target.value;
        productoIamgen.src = `./img/tennis/${colorIamgen}.jpg`;
    }
});

btnIncrementarCantidad.addEventListener('click', () => {
    InputCatidad.value = parseInt(InputCatidad.value) + 1;
});

btnDisminuirCantidad.addEventListener('click', () => {
    if (parseInt(InputCatidad.value) > 1) {
        InputCatidad.value = parseInt(InputCatidad.value) - 1;
    }
});