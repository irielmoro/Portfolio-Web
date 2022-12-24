const nav = document.querySelector('nav');

let positionY= window.scrollY;

window.addEventListener('scroll', ()=>{

    if ( positionY > window.scrollY) {
        nav.classList.remove('off');

    } else {
        nav.classList.add('off');
    }

    if ( window.scrollY > 60 ) {
        nav.classList.add('color');
        
    } else {
        nav.classList.remove('color');
        
    }

    positionY= window.scrollY;
});