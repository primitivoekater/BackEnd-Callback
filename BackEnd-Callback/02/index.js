const tabuada = (arraynumeros, callback) => {
    for (let numeros of arraynumeros) {
        let multiplicador = -1
        for (i = 0; i < 11; i++) {
            multiplicador++
            resultado = numeros * multiplicador
            callback(`${numeros} x ${multiplicador} = ${resultado}`)
        }
    }
}





tabuada([1, 5, 2], (resultado) => {
    console.log(resultado)
})