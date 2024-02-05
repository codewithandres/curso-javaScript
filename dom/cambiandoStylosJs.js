const caja = document.querySelectorAll('#contenedor1 .caja');

let tamaño = 22;

const incrementar = () => {
    caja.forEach(caja => {
        tamaño++;
        caja.style.fontSize = `${tamaño + 1}px`;
    });
}

const disminuir = () => {
    caja.map(element => {
        tamaño--;
        element.style.fontSize = `${tamaño - 1}px`;
    });
}