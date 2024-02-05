const boton1 = document.getElementById('boton1'),
    primeraCja = document.querySelector('.caja');


const cajas = document.querySelectorAll('.caja');

cajas.forEach(element => {
    element.addEventListener('click', (e) => { console.log(`Has echo click en: ${e.target.innerHTML}`); })
});

boton1.addEventListener('click', (e) => {
    console.log(e);
    primeraCja.classList.toggle('activa')
});