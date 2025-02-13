
let numerosSorteados = [];
function sortear() {
    let quantidadeNumero = parseInt(document.getElementById("quantidade").value);
    let primeiroNumero = parseInt(document.getElementById("de").value);
    let ultimoNumero = parseInt(document.getElementById("ate").value);
    for (var i = 0; i < quantidadeNumero; i++) {
        sorteiaNumero(primeiroNumero, ultimoNumero)
    }
    document.querySelector('#resultado .texto__paragrafo').textContent = `Números sorteados: ${numerosSorteados.join(", ")}.`;
}

function verificaRepetido(num) {
    let primeiroNumero = parseInt(document.getElementById("de").value);
    let ultimoNumero = parseInt(document.getElementById("ate").value);
    
    if (numerosSorteados.includes(num)){
        sorteiaNumero(primeiroNumero, ultimoNumero);
    } else {
        numerosSorteados.push(num);
    }
    return numerosSorteados;
}

function sorteiaNumero(minimo, maximo) {
    
    let numeroAleatorio = parseInt(Math.random() * (maximo - minimo + 1) + minimo);
    if (numerosSorteados.length <= maximo) {
        verificaRepetido(numeroAleatorio);
    } else {
        numerosSorteados = [];
        return numerosSorteados;
    }
    return numerosSorteados;   
}

function mensagemDeErro () {
    alert("Digite valores válidos!")
}
