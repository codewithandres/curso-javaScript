export const cargarImagen = () => {

    if (e.target.tagName === 'IMG') {
        const imagenSrc = e.target.src;
        const lasIndex = imagenSrc.lastIndexOf('/');
        const nombreImagen = imagenSrc.substring(lasIndex + 1);

        productoIamgen.src = `./img/tennis/${nombreImagen}`;
    }
}

export const cargarIamgenColor = (e) => {
    if (e.target.tagName === 'INPUT') {
        const colorIamgen = e.target.value;
        productoIamgen.src = `./img/tennis/${colorIamgen}.jpg`;
    }
}

export const IncrementarCantidad = () => {
    InputCatidad.value = parseInt(InputCatidad.value) + 1;
}

export const DisminuirCantidad = () => {
    if (parseInt(InputCatidad.value) > 1) {
        InputCatidad.value = parseInt(InputCatidad.value) - 1;
    }
}
export {
    cargarImagen,
    cargarIamgenColor,
    IncrementarCantidad,
    DisminuirCantidad
}