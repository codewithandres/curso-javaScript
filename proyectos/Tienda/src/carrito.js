import {
    btnabrirCarrito,
    btnacerrarCarrito,
    ventanaCarrito
} from "./variables/index";

import data from './data/productos';

const btnAgregarCarito = document.getElementById('agregar-al-carrito');
const producto = document.getElementById('producto');

let carrito = [];
const formatearMoneda = new Intl.NumberFormat('en-MX', { style: "currency", currency: "MXN" })
const notificacion = document.getElementById('notificacion');
const renderCarrito = () => {

    ventanaCarrito.classList.add('carrito--active');
    const productosAmteriores = ventanaCarrito.querySelectorAll('.carrito__producto');
    productosAmteriores.forEach(productoCarrito => productoCarrito.remove())
    let toatal = 0;
    if (carrito.length < 1) {
        ventanaCarrito.classList.add('carrito--vacio');
    } else {
        ventanaCarrito.classList.remove('carrito--vacio');

        carrito.map(productoCarrito => {

            data.productos.map(productoDB => {

                if (productoDB.id === productoCarrito.id) {
                    productoCarrito.presio = productoDB.presio;
                    toatal += productoDB.presio * productoCarrito.cantidad
                }
                console.log(productoCarrito.presio);
            })

            let thumSrc = producto.querySelectorAll('.producto__thumb-img')[0].src;
            if (productoCarrito.color === 'rojo') {
                thumSrc = './img/thumbs/rojo.jpg';
            } else if (productoCarrito.color === 'negro') {
                thumSrc = './img/thumbs/negro.jpg';
            } else if (productoCarrito.color === 'amarillo') {
                thumSrc = './img/thumbs/amarillo.jpg';
            }
            const platilla = `
                <div class="carrito__producto-info">
                    <img src="${thumSrc}" alt="" class="carrito__thumb" />
                        <div>
                            <p class="carrito__producto-nombre">
                                <span class="carrito__producto-cantidad">${productoCarrito.cantidad} X </span>Lorem Ipsum Dolot Asimmet
                            </p>
                            <p class="carrito__producto-propiedades">
                                Tamaño:<span>${productoCarrito.tamaño}</span> Color:<span>${productoCarrito.color}}</span>
                            </p>
                            </div>
                        </div>
                        <div class="carrito__producto-contenedor-precio">
                            <button class="carrito__btn-eliminar-item" data-accion="eliminar-item-carrito">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16">
                                    <path
                                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                                </svg>
                            </button>
                            <p class="carrito__producto-precio"> ${formatearMoneda.format(productoCarrito.presio * productoCarrito.cantidad)
                }</p>
                </div>`

            const ItemCarrito = document.createElement('div');
            ItemCarrito.classList.add('carrito__producto');
            ItemCarrito.innerHTML = platilla;
            ventanaCarrito.querySelector('.carrito__body').appendChild(ItemCarrito);
        })
    }
    ventanaCarrito.querySelector('.carrito__total').innerText = formatearMoneda.format(toatal);

};
// abrirCarirto

btnabrirCarrito.forEach(botones => {
    botones.addEventListener('click', (e) => {
        renderCarrito();
    })
})
btnacerrarCarrito.forEach(botones => {
    botones.addEventListener('click', (e) => {
        ventanaCarrito.classList.remove('carrito--active');
    })
})
btnAgregarCarito.addEventListener('click', () => {

    const id = producto.dataset.productoId;
    const nombre = producto.querySelector('.producto__nombre').innerText;
    const cantidad = parseInt(producto.querySelector('#cantidad').value);
    const color = producto.querySelector('#propiedad-color input:checked').value;
    const tamaño = producto.querySelector('#propiedad-tamaño input:checked').value;

    if (carrito.length > 0) {
        let productoCarito = false;

        carrito.map(item => {
            if (item.id === id && item.nombre === nombre && item.color === color && item.tamaño === tamaño) {
                item.cantidad = cantidad;
                productoCarito = true;
            }
        })
        if (!productoCarito) { carrito.push({ id, nombre, cantidad, color, tamaño }) }
    } else { carrito.push({ id, nombre, cantidad, color, tamaño }) }

    let thumSrc = producto.querySelectorAll('.producto__thumb-img')[0].src;
    if (color === 'rojo') {
        thumSrc = 'img/thumbs/rojo.jpg';
    } else if (color === 'negro') {
        thumSrc = 'img/thumbs/negro.jpg';
    } else if (color === 'amarillo') {
        thumSrc = 'img/thumbs/amarillo.jpg';

    }

    notificacion.querySelector('img').src = thumSrc;
    notificacion.classList.add('notificacion--active');
    setTimeout(() => {
        notificacion.classList.remove('notificacion--active');

    }, 5000)
});

ventanaCarrito.addEventListener('click', e => {

    if (e.target.closest('button')?.dataset.accion === 'eliminar-item-carrito') {
        const producto = e.target.closest('.carrito__producto');
        const indexProducto = [...ventanaCarrito.querySelectorAll('.carrito__producto')].indexOf(producto);

        carrito = carrito.filter((item, index) => {
            if (index != indexProducto) { return item }
        });
        renderCarrito();
    }
})

ventanaCarrito.querySelector('#carrito__btn-comprar').addEventListener('click', () => {
    console.log(carrito);
})