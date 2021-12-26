const openBtn = document.getElementById('open-btn')
const closeBtn = document.getElementById('close-btn')
const navbar = document.getElementById('navbar')

openBtn.addEventListener('click', () => {
    navbar.classList.add('show')
})

closeBtn.addEventListener('click', () => {
    navbar.classList.remove('show')
})

window.onscroll = () => {
    navbar.style.backgroundColor = '#FFF'
}