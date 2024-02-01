/*
    -📌 Nos permite ejecutar una funcion depues de cierto tiempo
    window.setTimeout()
*/

const saludar = () => {
    console.log('hola');
}
let id;
const Iniciar = () => {
    console.log('Iniciar');
    const id = setTimeout(saludar, 500);
}
//  para linpiando el setTimeout()
const parar = () => {
    console.log('parrar');
    clearTimeout(id)
}

// setInterval-nos opermite ejecutar una funciuon cada cierto tiempo

let cuenta = 0;
let id2;
const Inicaiar = () => {
    const id2 = setInterval(() => {
        console.log(cuenta);
        cuenta++;
    }, 1000);

}

const para2 = () => {
    clearInterval(id2)
}