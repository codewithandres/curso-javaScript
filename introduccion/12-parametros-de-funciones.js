const saludo = (nombre) => console.log(` hola ${nombre} `);

const saludo2 = (nombre2 = 'amigo') => console.log(`Hola ${nombre2} con parametro definido`);

saludo('Fabian');
saludo2('Sebas');


// multiples parametros 

const operacion  = ( tipo, numer1, numero2) => {
    if (tipo === 'suma') {
        console.log( numer1 + numero2);
    } else if (tipo === 'resta') {
        console.log(numer1 - numero2);
    }
};
operacion('suma',652,254);