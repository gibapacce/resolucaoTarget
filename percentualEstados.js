// Dados de faturamento por estado
const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  };
  
  // Calcular o percentual de representação
  function calcularPercentuais(faturamentoPorEstado) {
    // Calcula o faturamento total
    let faturamentoTotal = 0;
    for (let estado in faturamentoPorEstado) {
      faturamentoTotal += faturamentoPorEstado[estado];
    }
  
    // Calcular o percentual de representação de cada estado
    let percentuais = {};
    for (let estado in faturamentoPorEstado) {
      let percentual = (faturamentoPorEstado[estado] / faturamentoTotal) * 100;
      percentuais[estado] = percentual.toFixed(2); // Arredondando para 2 casas decimais
    }
  
    return percentuais;
  }
  
  // Executa o cálculo e exibe o resultado
  const percentuais = calcularPercentuais(faturamentoPorEstado);
  
  // Exibir os percentuais
  for (let estado in percentuais) {
    console.log(`Percentual de ${estado}: ${percentuais[estado]}%`);
  }
  