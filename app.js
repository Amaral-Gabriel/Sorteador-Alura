numerosSorteados = [];

function sortear() {
    let quantidadeNumero = parseInt(document.getElementById("quantidade").value);
    let primeiroNumero = parseInt(document.getElementById("de").value);
    let ultimoNumero = parseInt(document.getElementById("ate").value);
    sorteiaNumero(quantidadeNumero, primeiroNumero, ultimoNumero)
    document.querySelector('#resultado .texto__paragrafo').textContent = `Números sorteados: ${numerosSorteados}`;
}

function sorteiaNumero(vezes, minimo, maximo) {
    for (var i = 0; i < vezes; i++) {
        let numeroAleatorio = parseInt(Math.random() * (maximo - minimo + 1) + minimo);
        if (numerosSorteados.length <= maximo) {
            if (numerosSorteados.includes(numeroAleatorio)){
                sorteiaNumero(vezes, minimo, maximo);
                return numeroAleatorio;
            } else {
                numerosSorteados.push(numeroAleatorio);
                
            }
        }
    } 
    return numerosSorteados;   
}

function mensagemDeErro () {
    alert("Digite valores válidos!")
}
