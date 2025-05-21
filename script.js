let play_sumir = document.querySelector(".play")
let pause_aparecer = document.querySelector(".pause")
const click = document.getElementById('click')

// PAUSE
function mudapause() {
    play_sumir.style.display = "none"
    pause_aparecer.style.display = "block"
    return true
}

do {
    click.play()
} while (mudapause = true)

// PLAY
function mudaplay() {
    play_sumir.style.display = "block"
    pause_aparecer.style.display = "none"
}