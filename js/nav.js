const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');

let positionY= window.scrollY;

window.addEventListener('scroll', ()=>{

    if ( positionY > window.scrollY) {
        nav.classList.remove('off');

    } else {
        nav.classList.add('off');
    }

    if ( window.scrollY > 60 ) {
        nav.classList.add('color');
        logo.classList.add('show');
        
    } else {
        nav.classList.remove('color');
        logo.classList.remove('show');
    }

    positionY= window.scrollY;
});