// alert
alert('Hola Usuario')

const ingresar = () => {
    const AccesoPermitido = confirm('¿ Eres mayor de edad ?');

    if (AccesoPermitido) {
        console.log('Bienvenido');
    } else {
        console.log('no tinees permiso para entrar');
    }
}

const saludar = () => {
    const nombre = prompt('Escribe tu nombre');
    console.log(`Hola ${nombre}`);
}