// Estructura de la condicionales

// Ejemplo #1

const usuario = {
    nombre: 'Andres',
    pais: 'colombia',
    tiket: true,
    edad: 17
}
if (usuario.edad >18) {
    console.log('es mayor de edad tiene acceso');
}else{
    console.log('es menor de edad NO tiene acceso');
}

// ejemplo #2

if ( usuario.edad >= 18 && usuario.tiket ) {
    console.log(`El usuario ${nombre} tiene acceso`);
}else{
    console.log(`El usuario ${nombre} tiene acceso`);

}

// ejemplo #3 

if (usuario.edad >= 18) {
    if (usuario.tiket) {
    console.log(`El usuario ${nombre} tiene un Tiket`);
    }
    else{
        console.log(`El usuario ${nombre} es mayor de ead pero tiene un Tiket`);
    }
}else{
    console.log(`el usuario ${nombre} es menor de edad`);
}

// ejemplo #4 eseif

if (usuario.pais === 'colomabia') {
    console.log(`el usuario es de ${usuario.pais}`);
}else if(usuario.pais === 'mexico'){
    console.log(`el usuario es de ${usuario.pais}`);
}else{
    console.log('el usuario es de otro');
}