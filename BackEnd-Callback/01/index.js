const tabuada = (numero, callback) => {
    let multiplicador = -1
    for (i = 0; i < 11; i++) {
        multiplicador++
        resultado = numero * multiplicador
        callback(`${numero} x ${multiplicador} = ${resultado}`)
    }
}

tabuada(5, (resultado) => {
    console.log(resultado)
})