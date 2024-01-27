const usuario = {
    nombre: 'fabian',
    pais: 'mexico',
}


switch (usuario.pais) {
    case 'colombia':
        console.log('el usuario es de colombia');
        break;
    case 'mexico':
        console.log('el usuario es mexicnao');
        break;
    default: 
    console.log('el usuario es de otro pias');
}