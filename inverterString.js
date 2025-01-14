// Função para inverter os caracteres de uma string
function inverterString(str) {
    // Inicializa uma string vazia para armazenar o resultado
    let stringInvertida = "";
  
    // Itera sobre a string original de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
      stringInvertida += str[i];
    }
  
    return stringInvertida;
  }
  
  // Entrada de dados
  let string = prompt("Digite uma string para inverter:");
  
  // Chama a função para inverter a string e exibe o resultado
  let resultado = inverterString(string);
  console.log("String invertida: " + resultado);
  