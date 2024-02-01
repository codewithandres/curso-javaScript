
// const crearcooki = () => {

//     document.cookie = 'Nombre=andres; expirese=1 jan 2024 01:00:00 UTC';
// }


const iniciarSecion = () => {
    const usuario = prompt('Uusario');

    document.cookie = `nombre= ${usuario};expirese=1 jan 2024 01:00:00 UTC`;
    alert('secion iniciada')
}

let usuario;
const cookies = document.cookie.split(';');

cookies.forEach((cookie) => {
    const propiedad = cookie.split('=')[0];
    // console.log(propiedad);    
    if (propiedad === 'nombre') {
        usuario = cookie.split('=')[1]
    }
});

if (usuario) {
    console.log('Hola ' + usuario);
} else {
    console.log('por favor inicia secion');
};

const cerrarSecion = () => {
    document.cookie = 'nombre= ; expirese=1 jan 2023 01:00:00 UTC';
    console.log('hata Luego');
}