document.querySelectorAll('.barra').forEach(barra => {
    barra.addEventListener('mouseenter', function () {
        let progreso = this.querySelector('.barra-progreso');
        let porcentaje = progreso.getAttribute('data-porcentaje');
        progreso.style.width = porcentaje + '%';
    });

    barra.addEventListener('mouseleave', function () {
        let progreso = this.querySelector('.barra-progreso');
        progreso.style.width = '0%';
    });
});