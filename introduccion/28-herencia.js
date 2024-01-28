class Usuario {

    constructor(usuario, password) {
        this.suario = usuario;
        this.password = password;
    }
    obtenerPost() {
        const poast = ['Post1', 'post2'];
    }
}


class Moderador extends Usuario {
    constructor(usuario, password, permisos) {
        super(usuario, password);
        this.permisos = permisos;
    }
    borrarPost(id) {
        if (this.permisos.includes('borrar')) {
            console.log(`este post con el ${id} ha sido borrado`);
        } else {
            console.log('No tienes permios de borrar este post');
        }
    }

}

const usuario = new Usuario('Andres', '123654789');

const usuario2 = new Moderador('arturo', '12345', ['borrar', 'editar']);
console.log(usuario2.obtenerPost());
usuario2.borrarPost(5)