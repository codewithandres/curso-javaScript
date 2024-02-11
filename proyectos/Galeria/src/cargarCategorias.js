import dataCategorias from "./data/categorias.js";

const { categorias } = dataCategorias;
const contenedorCategorias = document.getElementById('categorias');

categorias.map(categoria => {

    const nuevaCategoria = document.createElement('a');


    const platilla = `
        <img class="categoria__img" src="${categoria.imagenPortada}" alt="Portada de las imagenes" />
        <div class="categoria__datos">
            <p class="categoria__nombre">${categoria.nombre}</p>
            <p class="categoria__numero-fotos">${categoria.numeroFotos} Fotos</p>
        </div>
    `;


    nuevaCategoria.innerHTML = platilla;
    nuevaCategoria.classList.add('categoria');
    nuevaCategoria.href = '#';
    nuevaCategoria.dataset.categoria = categoria.id;

    contenedorCategorias.append(nuevaCategoria);
});