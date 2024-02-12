import dataFotos from './data/foto';
import { cargarImagen } from './galeria/cargarImagen';

const contenedorCategorias = document.getElementById('categorias');
const galeria = document.getElementById('galeria');

contenedorCategorias.addEventListener('click', e => {

    e.preventDefault();

    if (e.target.closest('a')) {

        galeria.classList.add('galeria--active');

        document.body.style.overflow = 'hidden';

        const categotiaActiva = e.target.closest('a').dataset.categoria;
        galeria.dataset.categoria = categotiaActiva;
        const fotos = dataFotos.fotos[categotiaActiva];
        const carusel = galeria.querySelector('.galeria__carousel-slides');
        const { id, nombre, ruta, descripcion } = fotos[0];

        cargarImagen(id, nombre, ruta, descripcion);

        carusel.innerHTML = '';

        fotos.map(foto => {

            const slide = `
            <a href="#" class="galeria__carousel-slide">
                <img class="galeria__carousel-image" src="${foto.ruta}" data-id='${foto.id}' alt="" />
            </a>
            `;

            galeria.querySelector('.galeria__carousel-slides').innerHTML += slide;
        });
        galeria.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slides--active')
    }
});