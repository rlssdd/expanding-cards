const panels = document.querySelectorAll('.panel')
const cnt = document.querySelectorAll('.container')


panels.forEach((panel) =>{
    panel.style.backgroundImage = "url('https://picsum.photos/300/300?grayscale')"
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach (panel => {
        panel.classList.remove('active')
    })
}

