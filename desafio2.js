//Meu código ficou assim 

calcularResultadoRank(110, 5) 
exibirNivelRank(resultado)


function calcularResultadoRank (qtdVitoria, qtdDerrota) {

    resultado = qtdVitoria - qtdDerrota
    return resultado

}

function exibirNivelRank (resultado) {
    
    if (resultado <=10) {
        console.log("O Herói tem de saldo de " + resultado + " está no nível de Ferro")
    } else if (resultado > 10 && resultado <= 20) {
        console.log("O Herói tem de saldo de " + resultado + " está no nível de Bronze")
    } else if (resultado > 20 && resultado <= 50) {
        console.log("O Herói tem de saldo de " + resultado + " está no nível de Prata")
    } else if (resultado > 50 && resultado <= 80) {
        console.log("O Herói tem de saldo de " + resultado + " está no nível de Ouro")
    } else if (resultado > 80 && resultado <= 90) {
        console.log("O Herói tem de saldo de " + resultado + " está no nível de Diamante ")
    } else if (resultado > 90 && resultado <= 100) {
        console.log("O Herói tem de saldo de " + resultado + " está no nível de Lendário ")
    } else{
        console.log("O Herói tem de saldo de " + resultado + " está no nível de Imortal ")
    }


}


/* Com a ajuda do ChatGPT 

function main () {
    const {qtdVitoria, qtdDerrota} = obterEntradaUsuario()
    const resultado = calcularResultadoRank(qtdVitoria, qtdDerrota)
    exibirResultadoTela(resultado)
}

function obterEntradaUsuario(){
    let qtdVitoria = 49
    let qtdDerrota = 0 
    
    return {qtdVitoria, qtdDerrota}
}


function calcularResultadoRank (qtdVitoria, qtdDerrota) {

    return qtdVitoria - qtdDerrota

}

function exibirResultadoTela(resultado) {
    const nivel = exibirNivel(resultado)
    console.log(`O Herói tem de saldo de ${resultado} está no nível de ${nivel}`)
}

function exibirNivel (resultado) {
    
    if (resultado <=10) {
        return 'Ferro'
    } else if (resultado <= 20) {
        return 'Bronze'
    } else if (resultado <= 50) {
        return 'Prata'
    } else if (resultado <= 80) {
        return 'Ouro'
    } else if (resultado <= 90) {
        return 'Diamante'
    } else if (resultado <= 100) {
        return 'Lendário'
    } else{
        return 'Imortal'
    }

}

main()


*/
