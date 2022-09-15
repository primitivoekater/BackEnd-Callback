
let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;
let novoalarme = tempoParaAlarmarEmSegundos * 1000
console.log(`timer iniciado. disparando o alarme em ${tempoParaAlarmarEmSegundos} segundos `)
contador = 1
const despertador = () => {

    if (contador >= tempoAlarmandoEmSegundos) {
        clearInterval(idsetinterval)
    }
    if (contador <= tempoAlarmandoEmSegundos) {
        console.log("beep beep")
        contador++
    }
}
const idsetinterval = setInterval(despertador, 1000)




