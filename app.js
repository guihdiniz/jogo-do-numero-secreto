let numeroSecreto = numeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');


function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('p', `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if ( chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparcampo();
    }
}


function limparcampo() {
    chute = document.querySelector('input');
    chute.value = '';
}


//novo jogo
function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    tentativas = 1;
    limparcampo();
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


//valor do numero secreto
function numeroAleatorio() {
    return parseInt(Math.random() * 100 + 1);
}