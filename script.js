let play_sumir = document.querySelector(".play")
let pause_aparecer = document.querySelector(".pause")
let hastemexer = document.querySelector(".haste")

// PAUSE
function mudapause() { 
    play_sumir.style.display = "none"
    pause_aparecer.style.display = "block"
    hastemexer.style.rotate = "50deg"
    hastemexer.style.transition = "1s"
}
// PLAY
function mudaplay() {
    play_sumir.style.display = "block"
    pause_aparecer.style.display = "none"
    hastemexer.style.rotate = "0deg"
    hastemexer.style.transition = "0s"
}

// MUDAR VELOCIDADE
let velmedia = 60;
function aumentavel() {
    velmedia++;
    document.getElementById("velmedia").innerText = velmedia;
}

function diminuivel() {
    velmedia--;
    document.getElementById("velmedia").innerText = velmedia;
}