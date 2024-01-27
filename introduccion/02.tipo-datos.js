// tipo de dato string o code de texto '' o "" o ¨ ¨
const nombre = 'Fabian';

// tipo numerico acepta numeros positivos, negativos decimales
const edad = 24;
const precio = 9.9;
const descuento = -5;

// tipo boleanos true o false o undefine

const pago = true;
const mayorque = 1 > 2;

console.log(mayorque);


// arreglo y arrays puedo guardar varios valores

const arreglo = [1,2,23,5,17,20];
const arreglo2 = ['Fabian', 24, true, { propiedad: valor }, [1,2,3]];
console.log(arreglo);

// objetos

const persona = {
    nombre : 'Fabian',
    edad: 24,
    carro: {
        modelo: 'toyota',
        color: 'negro'
    }
}

console.log(persona.carro.modelo);

// funciones 

function hola() {
    console.log('hola mundo');
}
hola()

// variables undefine | null