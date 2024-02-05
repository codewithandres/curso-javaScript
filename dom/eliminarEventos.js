const boton1 = document.getElementById('boton1'),
    boton2 = document.getElementById('boton2');

const primeraCja = document.querySelector('.caja');

const toggleClase = () => {
    primeraCja.classList.toggle('activa');
}

boton1.addEventListener('click', () => {
    primeraCja.addEventListener('click', toggleClase)
})

boton2.addEventListener('click', () => {
    primeraCja.removeEventListener('click', toggleClase)
})
