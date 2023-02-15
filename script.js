const Menu=document.querySelector('.Menu i');
const navbar=document.querySelector('ul');

Menu.addEventListener('click',()=>{
    Menu.classList.toggle('fa-house');
    navbar.classList.toggle('slide');
});