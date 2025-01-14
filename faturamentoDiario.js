// Dados de faturamento em JSON
const faturamentoDiario = [
    { "dia": 1, "faturamento": 1500 },
    { "dia": 2, "faturamento": 2000 },
    { "dia": 3, "faturamento": 0 },
    { "dia": 4, "faturamento": 1200 },
    { "dia": 5, "faturamento": 1800 },
    { "dia": 6, "faturamento": 0 },
    { "dia": 7, "faturamento": 2500 },
    { "dia": 8, "faturamento": 3000 },
    { "dia": 9, "faturamento": 0 },
    { "dia": 10, "faturamento": 1600 },
    { "dia": 11, "faturamento": 0 },
    { "dia": 12, "faturamento": 2200 }
  ];
  
  // Calcular informações solicitadas
  function calcularFaturamento(faturamentoDiario) {
    let menorFaturamento = Infinity;
    let maiorFaturamento = -Infinity;
    let somaFaturamento = 0;
    let diasComFaturamento = 0;
  
    // Itera sobre o vetor para calcular os valores
    for (let i = 0; i < faturamentoDiario.length; i++) {
      let faturamento = faturamentoDiario[i].faturamento;
      
      if (faturamento > 0) {
        // Atualiza o menor valor de faturamento
        if (faturamento < menorFaturamento) {
          menorFaturamento = faturamento;
        }
  
        // Atualiza o maior valor de faturamento
        if (faturamento > maiorFaturamento) {
          maiorFaturamento = faturamento;
        }
  
        // Soma o faturamento e conta os dias com faturamento
        somaFaturamento += faturamento;
        diasComFaturamento++;
      }
    }
  
    // Calcula a média mensal, considerando apenas os dias com faturamento
    let mediaFaturamento = somaFaturamento / diasComFaturamento;
  
    // Conta os dias com faturamento superior à média
    let diasAcimaDaMedia = 0;
    for (let i = 0; i < faturamentoDiario.length; i++) {
      if (faturamentoDiario[i].faturamento > mediaFaturamento) {
        diasAcimaDaMedia++;
      }
    }
  
    // Retorna resultados
    return {
      menorFaturamento,
      maiorFaturamento,
      diasAcimaDaMedia,
      mediaFaturamento
    };
  }
  
  // Executa o cálculo e exibe o resultado
  const resultado = calcularFaturamento(faturamentoDiario);
  
  console.log(`Menor faturamento: R$ ${resultado.menorFaturamento}`);
  console.log(`Maior faturamento: R$ ${resultado.maiorFaturamento}`);
  console.log(`Dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
  console.log(`Média mensal de faturamento: R$ ${resultado.mediaFaturamento.toFixed(2)}`);
  