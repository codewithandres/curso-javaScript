//cuando trabajamos con defaul import exportamos una sola funcion No se necesita definir dicha funcion

export default () => {
    return {
        nombre: 'Andres',
        correo: 'correo@correo.com'
    }
}

//Forma 2

// const obtenerUsuario = () => {
//     return {
//         nombre: 'Andres',
//         correo: 'correo@correo.com'
//     }
// }
// export default obtenerUsuario;