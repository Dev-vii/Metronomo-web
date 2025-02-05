let play_sumir = document.querySelector(".play")
let pause_aparecer = document.querySelector(".pause")
let hastemexer = document.querySelector(".haste")
function mudapause(){
    play_sumir.style.display = "none"
    pause_aparecer.style.display = "block"
    hastemexer.style.rotate = "50deg"
    hastemexer.style.transition = "3s"
}
function mudaplay(){
    play_sumir.style.display = "block"
    pause_aparecer.style.display = "none"
    hastemexer.style.rotate = "0deg"
    hastemexer.style.transition = "0.5s"
}