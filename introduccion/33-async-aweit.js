const fechPost = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const post = ['post1', 'post2', 'post 3'];
            const error = false;

            if (error) {
                reject('Hubo un error al obtener post');
            } else {
                resolve(post)
            }
        }, 2000);
    })
}

const mostrarPost = async () => {
    try {
        const post = await fechPost();
        console.log(post);
    } catch (error) {
        console.log(error);
    }
}
mostrarPost();