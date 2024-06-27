//Variáveis

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

const messages = [
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Não importa o tamanho da montanha, ela não pode tapar o sol.",
    "São os nossos amigos que nos ensinam as mais valiosas lições.",
    "Você sempre será a sua melhor companhia!",
    "Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.",
    "A paciência na adversidade é sinal de um coração sensível.",
    "Você é do tamanho do seu sonho.",
    "Vencer é 90 por cento suor e 10 por cento de engenho.",
    "Deixe de lado as preocupações e seja feliz."
]

// Eventos
btnTry.addEventListener('click', toggleScreen)
btnReset.addEventListener('click', toggleScreen)

// Função
function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')

    const randomMessage = Math.floor(Math.random() * messages.length)
    screen2.querySelector("#message").innerHTML = messages[randomMessage]
}



