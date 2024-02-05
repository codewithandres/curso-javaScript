const agregarCaja = () => {

    const nuevaCaja = document.createElement('div')
    nuevaCaja.innerText = 'nueva caja';
    // nuevaCaja.setAttribute('id', 'nuevo-id');
    nuevaCaja.setAttribute('class', 'caja activa');

    const contenedor = document.getElementById('contenedor1');

    // contenedor.appendChild(nuevaCaja);

    contenedor.insertAdjacentElement('beforeend', nuevaCaja)

    // repleceWithn() - nos permite rempalsar un elemento por otro

    document.querySelector('#contenedor1 .caja').replaceWith(nuevaCaja)
}

/*
    isertAdjacentElement()- nos permite agregar un elemento 
    Valores: 
        afterbegin - como primer Elemento
        beforebegin - antes del elemento padre
        beforeEnd - como ultimo elemento 
        afterend - des´pues del elemento padre
*/

