/**
  Named Imports
 */
import { nombre as nombreCompleto, obtenerPost } from './nameExport.js'

console.log(`mi nombre es ${nombreCompleto}`);
console.log(obtenerPost());

/*
    Namespace Imports
*/

// import * as datos from './nameExport.js';

// console.log(datos.nombre);
// console.log(datos.obtenerPost);

// default Import - puedes colocarle cualquier nombre al importar

import obtener from './exportDefaul.js';

console.log(obtener());