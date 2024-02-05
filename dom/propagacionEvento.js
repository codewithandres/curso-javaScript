const contenedor = document.getElementById('contenedor1');

contenedor.addEventListener('click', (e) => {
    e.stopPropagation();
},
    true
);