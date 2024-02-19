const producto = document.getElementById('producto');
const productoIamgen = producto.querySelector('.producto__imagen')
const thumb = producto.querySelector('.producto__thumbs');
const propiedadColor = producto.querySelector('#propiedad-color');
const btnIncrementarCantidad = producto.querySelector('#incrementar-cantidad');
const btnDisminuirCantidad = producto.querySelector('#disminuir-cantidad');
const InputCatidad = producto.querySelector("#cantidad");


const btnabrirCarrito = document.querySelectorAll('[data-accion="abrir-carrito"]');
const btnacerrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito = document.getElementById('carrito');


export {
    producto,
    productoIamgen,
    thumb,
    propiedadColor,
    btnDisminuirCantidad,
    btnIncrementarCantidad,
    InputCatidad,
    btnabrirCarrito,
    btnacerrarCarrito,
    ventanaCarrito
}