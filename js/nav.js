const nav = document.querySelector('nav');
const links = document.querySelectorAll('nav a');
const logo = document.querySelector('.logo');
console.log(links);
let positionY= window.scrollY;

window.addEventListener('scroll', ()=>{

    if ( positionY > window.scrollY) {
        nav.classList.remove('off');
        links.forEach( e=> e.classList.remove('white'));

    } else {
        nav.classList.add('off');
    }

    if ( window.scrollY > 60 ) {
        nav.classList.add('color');
        logo.classList.add('show');
        links.forEach( e=> e.classList.add('white'));
        
    } else {
        nav.classList.remove('color');
        logo.classList.remove('show');
    }

    positionY= window.scrollY;
});