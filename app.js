
alert ('Boas vindas ao jogo número secreto!!!')
let numeroSecreto = 4;
console.log(numeroSecreto);
let chute ;

let tentativas = 1;

// Equanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 30');

    // se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break
    } else {
        if (chute > numeroSecreto) {
            alert (`O número secreto é menor que ${chute}`);

        } else {
            alert (`O número secreto é maior que ${chute}`);
        }
        
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Parabéns!!! você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);



