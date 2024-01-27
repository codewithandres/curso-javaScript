const amigos = ['alejandor', 'cesar', 'Manuel'];

amigos.forEach((amigos, index) => console.log(`El Amigo #${index} es ${amigos}`));

const persona = {
    nombre: 'Andres',
    edad: 24,
    correo: 'correo@correo.com'
}

for (persona in persona) {
    console.log(persona[persona]);
}

const etiquetas = document.children;
for (Elemento of etiquetas) {
    console.log(Elemento);
}


// Mejor Forma

[...etiquetas].map(Elemento => { console.log(Elemento); })