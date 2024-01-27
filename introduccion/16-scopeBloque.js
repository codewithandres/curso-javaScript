
/*
    Block Scope / Alcance de tipo bloque 
    -pertenecen ha variables declaradas con cosnt o let dentro de un bloque {}
    - solo pueden aceceder al ellas dentro de bloques
*/

const edad = 24;
if (edad >= 18){
    
    const AcesoPermitido = true;

    if (true) { console.log(AcesoPermitido); }

    const mifucion = () =>  console.log(AcesoPermitido) 
}