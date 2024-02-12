import datos from '../data/foto'
import { cargarImagen } from './cargarImagen';

const slideClick = (e) => {

    let ruta, nombre, descripcion;

    const id = parseInt(e.target.dataset.id);
    const galeria = document.getElementById('galeria');
    const categoriaActiva = galeria.dataset.categoria;

    datos.fotos[categoriaActiva].map(foto => {

        if (foto.id === id) {
            ruta = foto.ruta;
            nombre = foto.nombre;
            descripcion = foto.descripcion;

        }

        cargarImagen(id, nombre, ruta, descripcion)
    });
}

export default slideClick;