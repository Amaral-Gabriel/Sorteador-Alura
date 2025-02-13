
let numerosSorteados = [];

function validaEntrada(quantidadeNumero, primeiroNumero, ultimoNumero) {
    if (quantidadeNumero <= 0){
        alert("A quantidade precisa ser maior que 0!");
        return false;
    } else if (ultimoNumero <= 0){
        alert("O último número precisa ser maior que 0!");
        return false;
    } else if (primeiroNumero < 0) {
        alert("O primeiro número precisa ser positivo ou 0!");
        return false;
    } else if (primeiroNumero > ultimoNumero) {
        alert("O primeiro número precisa ser menor que o último número!");
        return false;
    } else if (quantidadeNumero > (ultimoNumero - primeiroNumero)) {
        alert("A quantidade precisa ser menor ou igual a diferença entre o último e o primeiro");
        return false;
    }
    return true;
}
function sortear() {
    let quantidadeNumero = parseInt(document.getElementById("quantidade").value);
    let primeiroNumero = parseInt(document.getElementById("de").value);
    let ultimoNumero = parseInt(document.getElementById("ate").value);
    if (validaEntrada(quantidadeNumero, primeiroNumero, ultimoNumero)){
        for (var i = 0; i < quantidadeNumero; i++) {
            sorteiaNumero(primeiroNumero, ultimoNumero)
            }
            document.querySelector('#resultado .texto__paragrafo').textContent = `Números sorteados: ${numerosSorteados.join(", ")}.`;
        }
     document.getElementById("btn-reiniciar").classList.replace("container__botao-desabilitado", "container__botao");
}

function reiniciar() {
    limparCampos();
    numerosSorteados = [];
    document.getElementById("btn-reiniciar").classList.replace("container__botao", "container__botao-desabilitado");
    document.querySelector('#resultado .texto__paragrafo').textContent = "Números sorteados:  nenhum até agora";
    

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

function limparCampos() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
}
