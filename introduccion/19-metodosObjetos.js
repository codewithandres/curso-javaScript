const usuario = {
    nombre: 'carlos',
    edad: 24,
    amigos: ['sabastian', 'tatiana', 'jesus'],
    saludo: () => console.log('hola')
}

/*
    Metodos Propios 
    Los objetos pueden tener metodos personalizados;
*/
usuario.saludo()

/*
    Object.keys()
    Nos devuelve un arreglo con las llaves (keys) del objeto
*/
const resultados =Object.keys(usuario);
console.log(resultados);

/*
    Object.avlues()
    Nos devuelve un arreglo con los valores de los (keys) del objeto
*/
const resultados2 =Object.values(usuario);
console.log(resultados2);


/*
    object.entries();
    Nos devuelve un arreglo con las parejas clave valor del objecto
*/

const resulatdo3 = Object.entries(usuario)
console.log(resulatdo3);