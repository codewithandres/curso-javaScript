const eliminarCaja = () => {
    const padre = document.querySelector('#contenedor1');
    const cajaAEliminar = padre.querySelector('.caja');

    if (cajaAEliminar) {
        padre.removeChild(cajaAEliminar);
    }
}