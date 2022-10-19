const menu = document.querySelector('.menu')
const NavMenu = document.querySelector('.navMenu')

menu.addEventListener('click',() =>{
    menu.classList.toggle('ativo')
    NavMenu.classList.toggle('ativo')
})
