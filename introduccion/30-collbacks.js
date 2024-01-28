const obtenerPost = (usuario, callback) => {
    console.log(`Obteniendo los post de ${usuario} ...`);

    setTimeout(() => {
        let post = ['post1', 'post2', 'post3', 'post4'];
        callback(post);
    }, 200);
};

obtenerPost('Andres', (post) => {
    console.log(post);
})