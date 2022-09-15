const jogadores = ["Guido", "Dani", "Ruli", "Diego", "Vidal"];
let time = (10 / jogadores.length) * 1000
let contador = 0
const leitor = () => {
    if (contador >= jogadores.length) {
        clearInterval(idsetinterval);
    }
    if (contador <= jogadores.length) {
        console.log(jogadores[contador])
        contador++
    }
}
const idsetinterval = setInterval(leitor, time)
