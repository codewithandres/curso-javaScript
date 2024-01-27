const nombres = ['Andres', 'Arturo', 'Alejandro', 'Roberto', 'Adrian', 'Antonio', 'angel'];

//la palabra Break termina la ejecucion del ciclo
for (let i = 0; i < nombres.length; i++) {
    if ( nombres[i][0] !== 'A' ){
        console.log('ALTO hay un nombre que no enpieza por la letra A');
        console.log();
        break
    }
    nombres[i];
}