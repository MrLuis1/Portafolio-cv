const mainEspañol = document.getElementById('main-español');
const mainIngles = document.getElementById('main-ingles');
const banderaIngles = document.getElementById('idioma-ingles');
const banderaEspañol = document.getElementById('idioma-español');

banderaIngles.addEventListener('click', () => {
    if( mainIngles.classList.contains('none') ) {
        mainEspañol.classList.add('none');
        mainIngles.classList.remove('none');
    }
});

banderaEspañol.addEventListener('click', () => {
    console.log('español')
    if( mainEspañol.classList.contains('none') ) {
        mainIngles.classList.add('none');
        mainEspañol.classList.remove('none');
    }
})