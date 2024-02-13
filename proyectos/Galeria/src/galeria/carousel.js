const galeria = document.getElementById('galeria');

const obsiones = {
    root: document.querySelector('.galeria__carousel'),
    rootMargin: '0px',
    threshold: 0.9,
}

const carousel = direccion => {
    const observer = new IntersectionObserver(entry => {

        const slideVisible = entry.filter(entrada => {
            if (entrada.isIntersecting === true) {
                return entrada;
            }
        });

        if (direccion === 'atras') {
            const primerSlideVisble = slideVisible[0];
            const indexPirmerSlideVisible = entry.indexOf(primerSlideVisble);
            if (indexPirmerSlideVisible >= 1) {
                entry[indexPirmerSlideVisible - 1].target.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start'
                });
            }
        } else if (direccion === 'adelante') {
            const ultimoSlideVisible = slideVisible[slideVisible.length - 1];
            const indexUltimoSlideVisible = entry.indexOf(ultimoSlideVisible);
            if (entry.length - 1 > indexUltimoSlideVisible) {

                entry[indexUltimoSlideVisible + 1].target.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start'
                });
            }
        }

        slides.forEach(slide => {
            observer.unobserve(slide)
        })
    }, obsiones);

    const slides = galeria.querySelectorAll('.galeria__carousel-slide')

    slides.forEach(slide => {
        observer.observe(slide)
    })
}

export { carousel }