listaDeNumerosSorteados = [];
numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibeTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemVenceu = `voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`;
        exibeTextoNaTela('h1', 'Parabens voce acertou!');
        exibeTextoNaTela('p', mensagemVenceu);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numeroSecreto) {
            exibeTextoNaTela('p', `o numero secreto é menor que ${chute}`);
        } else if (chute < numeroSecreto) {
            exibeTextoNaTela('p', `o numero secreto é maior que ${chute}`);
        }
        tentativas++;
        limpaCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosSorteados = listaDeNumerosSorteados.length;
    if(quantidadeDeNumerosSorteados == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limpaCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reinicarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limpaCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function mensagemInicial() {
    exibeTextoNaTela('h1', 'jogo do numero secreto!');
    exibeTextoNaTela('p', `digite um numero entra 0 e ${numeroLimite}.`);
}

