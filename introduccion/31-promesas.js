const promesa = new Promise((resolve, reject) => {
    // Accionque se ejecuta
    setTimeout(() => {
        const exito = false;

        if (exito) {
            resolve('la operacion tuvo exito');
        } else {
            reject('la operacion No tuvo exito');
        }
    }, 4000);
});

promesa.then((mensaje) => {
    alert(mensaje);
})
promesa.catch((mensaje) => {
    alert(mensaje)
})