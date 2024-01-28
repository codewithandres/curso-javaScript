const fechPost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const post = ['post1', 'post2', 'post 3'];
            const error = true;

            if (error) {
                reject('Hubo un error al obtener post');
            } else {
                resolve(post)
            }
        }, 2000);
    })
}

fechPost()
    .then(() => console.log(post))
    .catch((error) => console.log(error));

