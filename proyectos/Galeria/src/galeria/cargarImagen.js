import data from "./../data/foto";

const galeria = document.getElementById('galeria');

const cargarImagen = (id, nombre, ruta, descripcion) => {

    galeria.querySelector('.galeria__imagen').src = ruta;
    galeria.querySelector('.galeria__imagen').dataset.idImagen = id;
    galeria.querySelector('.galeria__titulo').innerText = nombre;
    galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;

    const categoriaActual = galeria.dataset.categoria;
    const fotos = data.fotos[categoriaActual];
    let indexImagenActual;
    fotos.map((foto, index) => {
        if (foto.id === id) { indexImagenActual = index };
    });


    if (galeria.querySelectorAll('.galeria__carousel-slide').length > 0) {
        // eliminar las clase active 
        galeria.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active')
        galeria.querySelectorAll('.galeria__carousel-slide')[indexImagenActual].classList.add('galeria__carousel-slide--active');

    }

};

const cargarAnteriorSiguiente = direccion => {

    const categoriaActual = galeria.dataset.categoria;
    const fotos = data.fotos[categoriaActual];
    const idImagenActual = parseInt(galeria.querySelector('.galeria__imagen').dataset.idImagen);

    let indexIamgenAcual;
    fotos.map((foto, index) => {
        if (foto.id === idImagenActual) {
            indexIamgenAcual = index;
        }
    })

    if (direccion === 'siguiente') {
        if (fotos[indexIamgenAcual + 1]) {
            const { id, nombre, ruta, descripcion } = fotos[indexIamgenAcual + 1]
            cargarImagen(id, nombre, ruta, descripcion);
        }

    } else if (direccion === 'anterior') {
        if (fotos[indexIamgenAcual - 1]) {
            const { id, nombre, ruta, descripcion } = fotos[indexIamgenAcual - 1]
            cargarImagen(id, nombre, ruta, descripcion);
        }
    }

}

export {
    cargarImagen,
    cargarAnteriorSiguiente
}