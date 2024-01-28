/*
    los metodos eestaticos sirven para aceceder ha los metodos y propiedades de la clase sin nesecidad de instanciarla
*/

class Usario {
    constructor(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
    }
    static borrar() {
        console.log(`El Usuario con el ${id} ha sido borrado`);
    }

    static registrados = 125;
}
Usuario.borrar(2)
console.log(Usuario.registrados);