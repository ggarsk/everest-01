/* 
    OBJETIVO - quando clicarmos no botão de login, temos que mostrar a área de login do usuário, e quando clicarmos em "Não tenho uma conta", exibir a área de registro de usuário.

    - PASSO 1 - Dar um jeito de pegar o elemento HTML do botão de login E de registro de usuário

    - PASSO 2 - Dar um jeito de identificar o clique do usuário no botão de login

    - PASSO 3 - Exibir APENAS a área de login do usuário

    - PASSO 4 - Dar um jeito de identificar o clique do usuário no botão de registro, caso não tenha uma conta

    - PASSO 5 - Esconder a área de login do usuário e exibir APENAS a de registro de usuário

*/

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});








