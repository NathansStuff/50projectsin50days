const boxes = document.querySelectorAll('.box')
const triggerBottom = window.innerHeight / 5 * 4
    
window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}