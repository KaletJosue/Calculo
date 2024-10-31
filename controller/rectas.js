document.querySelector(".bars__menu").addEventListener('click', animateBars)

var line1__bars = document.querySelector('.line1__bars-menu')
var line2__bars = document.querySelector('.line2__bars-menu')
var line3__bars = document.querySelector('.line3__bars-menu')

var menu = document.querySelector('.menu')

var hr = document.querySelectorAll('.hr')

function animateBars() {
    line1__bars.classList.toggle('activeline1__bars-menu')
    line2__bars.classList.toggle('activeline2__bars-menu')
    line3__bars.classList.toggle('activeline3__bars-menu')

    menu.classList.toggle('active')

    hr.forEach(elemento => {
        elemento.classList.toggle('active')
    });
}

var plus = document.querySelector('.plus')
var barra = document.querySelector('.barra')
var close_barra = document.querySelector('.close_barra')

plus.addEventListener('click', () => {
    barra.classList.add('active')
})
close_barra.addEventListener('click', () => {
    barra.classList.remove('active')
})