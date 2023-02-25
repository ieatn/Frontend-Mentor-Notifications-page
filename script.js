/* when clicked, highlight the background */
const boxes = document.querySelectorAll('.box')

boxes.forEach(box => {
    box.addEventListener('click', () => {
        highlightBox(box)
    })
})
/* when mark all read is clicked, highlight all bgs */
const readAll = document.querySelector('.readAll')
readAll.addEventListener('click', () => {
    highlightAllBoxes()
})

function highlightBox(box) {
    box.style.background = `rgb(243, 240, 240)`
}
function highlightAllBoxes() {
    boxes.forEach(box => {
        highlightBox(box)
    })
}