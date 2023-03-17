const about = document.querySelector('.about');
const close = document.querySelector('.close');
const navAbout = document.querySelector('.about-Popup');

navAbout.addEventListener('click', () =>{
    about.classList.add('active-popup');
});

close.addEventListener('click', () =>{
    about.classList.remove('active-popup');
});

console.log('Olá, mundo! Eu acabei de conseguir desenvolver esse JS sem ajuda!!');