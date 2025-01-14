// Função que calcula a sequência de Fibonacci e verifica se o número informado pertence
function verificarFibonacci(numero) {
    let a = 0, b = 1;
    
    // Verifica se o número é 0 ou 1, que já estão na sequência de Fibonacci
    if (numero === 0 || numero === 1) {
        return `${numero} pertence à sequência de Fibonacci.`;
    }

    // Calcula a sequência até encontrar o número ou ultrapassá-lo
    while (b < numero) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    // Se o número for igual ao b pertence à sequência
    if (b === numero) {
        return `${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `${numero} NÃO pertence à sequência de Fibonacci.`;
    }
}

let numero = 21; // Alterar para testar outros números
console.log(verificarFibonacci(numero));