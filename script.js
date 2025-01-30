let play_sumir = document.querySelector(".play")
let pause_aparecer = document.querySelector(".pause")
function mudapause(){
    play_sumir.style.display = "none"
    pause_aparecer.style.display = "block"
}
function mudaplay(){
    play_sumir.style.display = "block"
    pause_aparecer.style.display = "none"
}