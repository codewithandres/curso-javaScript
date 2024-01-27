/*
    Operedor Spreed
    permite tomar los elementos de un arreglo u objeto y expandirlos en otro sitio.
*/

const frutas = ['Manzana', 'Pera', 'piña', 'melon'];
const ComidaFavorita = ['pizza', 'Sishi', ...frutas];
console.log(ComidaFavorita);

const loginUsuario = {
    correo: 'correo@correo.com',
    password: '1123'
}

const usuario = {
    nombre: 'Andres',
    edad: '24',
    ...loginUsuario
}
console.log(usuario);

/*
    parametros REST
    permite que una funcion contenga un numer indefinido de argumentos.
    los argumentos extra que encuentren los convertira en arreglo
*/

const Registrarusuario = (nombre, correo, ...datos)  => {
    console.log(nombre, correo, datos);
}

Registrarusuario('Andres', 'correo@correo.com');

/*
    Desestructuarcion de Objetos
    Nos permiten obtener elemetos o propíedades de un arreglo u objeto y guardarlo en una variable
*/
//Destructurar Arrays
 const Amigos  = ['Sebas', 'Tatiana', 'Manuel'];

const [primerAmigo, segundoAmigo, tercerAmigo] = Amigos;
console.log(primerAmigo);


const persona = {
    nombre: 'Andres',
    Edad: 24,
    oais: 'colombia',
}
//Desestructurar Objetos tines que poner los nombres de las llaves del objeto
const  { pais } = persona;

 //Destructuarar parametros de funciones
const mostrarEdad = ( { nombre , edad } ) =>  console.log(`${nombre} tiene ${edad} años`);

mostrarEdad(persona)