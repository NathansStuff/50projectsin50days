const search = document.querySelector('.search')
const input = document.querySelector('.input')

search.addEventListener('click', expand)

function expand () {
    search.classList.toggle('active')
    input.focus()
}