
    const texto1 = document.querySelector('.texto1');
    const texto2 = document.querySelector('.texto2');
    const ARTHUR = document.querySelector('.ARTHUR');
    const Painel1 = document.querySelector('.Painel1');
    const Painel2 = document.querySelector('.Painel2');

    window.addEventListener('scroll', () => {
        let value = window.scrollY;

        // Movimento da primeira parte
        if (texto1) {
            texto1.style.transform = `translateX(${value * -5}px)`;
        }

        if (ARTHUR) {
            ARTHUR.style.transform = `translateX(${value * 0.7}px)`;
        }

        if (Painel2) {
            Painel2.style.bottom = `-${100 - value * 0.5}%`;
        }

        // Mostrar texto2 quando descer
        if (texto2) {
            if (value > 100) {
                texto2.style.opacity = 1;
                texto2.style.top = `calc(60% - ${value * 0.1}px)`; // acompanha Painel2
            } else {
                texto2.style.opacity = 0;
            }
        }
    });
