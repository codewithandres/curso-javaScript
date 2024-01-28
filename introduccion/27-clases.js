/**
 *  Estructura de una clase  
 *  Definicion 
 *  Propiedades- las clases pueden contener variables. dentro de una clase se llaman propiedades 
 *  Constructor- es un metodo especial para inicializar un objeto creado a partir de una clase 
 *  metodos - la clase puede  contener funciones. Dentro de una clase se llama metodo 
 *  el ojecto this hace referencia ala clase
 */

class Usuario {
    tipo = 'usuario';

    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        console.log('Nuevo usuario Registardo');
    }
    obtenerNombreCompleto() {
        console.log('obteniendo Datos.....');
        return `${this.nombre} ${this.apellido}`
    }
}
//los parametros del constructor se le pasan cuenado creamos una nueva iinstancia de la clase
const usario = new Usuario('Andres', 'Guzman');

console.log(usario.obtenerNombreCompleto());