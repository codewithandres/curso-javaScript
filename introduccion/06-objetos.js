const persona = {
    nombre: 'Andres',
    edad: 27,
    correo: 'correo@correo.com',
    subscripcion: {
        web: true,
        correo: true
    },
    colores: ['rojo', 'negro',], 
    saludo: function () { console.log('Hola'); }
}

console.log(persona.nombre); //para acceder alas propiedades del objeto usamos el . y el nombre de la propiedad
console.log(persona['subscripcion']);// acceder por nombre entre [] de la propiedad

persona.pais = 'colombia'; //para agregar una propiedad al objeto 

persona.saludo(); // las funciones dentro de los objetos se mandan ha llamar con () y se conocen como Metodos  