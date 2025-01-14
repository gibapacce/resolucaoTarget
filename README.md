# Soluções em JavaScript - Exercícios de Programação

Este repositório contém soluções para diversos exercícios de programação em JavaScript. Os problemas abordam diferentes conceitos, como manipulação de strings, cálculos matemáticos e interação com o usuário.

## Exercícios Resolvidos

### 1. **Inverter os caracteres de uma string**
   **Objetivo**: Inverter os caracteres de uma string informada pelo usuário.

   - **Descrição**: O programa recebe uma string e inverte os caracteres, retornando a string invertida.
   - **Como testar**: Execute o código e informe uma string para inverter.

   **Exemplo**:
   - Entrada: `JavaScript`
   - Saída: `tpircSavaJ`

   **Código**: `inverterString.js`

### 2. **Sequência de Fibonacci**
   **Objetivo**: Calcular a sequência de Fibonacci até o número informado pelo usuário e verificar se esse número pertence à sequência.

   - **Descrição**: O programa gera a sequência de Fibonacci até o número informado e verifica se ele está presente na sequência.
   - **Como testar**: Execute o código e informe um número para calcular a sequência de Fibonacci e verificar se o número pertence à sequência.

   **Exemplo**:
   - Entrada: `21`
   - Saída: `21 pertence à sequência de Fibonacci`

   **Código**: `fibonacci.js`

### 3. **Faturamento Mensal**
   **Objetivo**: Analisar os dados de faturamento mensal, calculando o menor valor, o maior valor e o número de dias em que o faturamento diário foi superior à média mensal.

   - **Descrição**: O programa analisa um vetor de faturamento diário, encontrando o menor e maior valor de faturamento e o número de dias com faturamento acima da média mensal.
   - **Como testar**: Execute o código e forneça os dados de faturamento diário no formato adequado.

   **Exemplo**:
   - Entrada: `[500, 300, 700, 200, 900]`
   - Saída:
     - Menor valor: `200`
     - Maior valor: `900`
     - Dias com faturamento acima da média: `3`

   **Código**: `faturamento.js`

### 4. **Percentual de Representação de Estados**
   **Objetivo**: Calcular o percentual de representação de cada estado dentro do faturamento mensal de uma distribuidora.

   - **Descrição**: O programa calcula e exibe o percentual de representação de cada estado no faturamento total.
   - **Como testar**: Execute o código para calcular os percentuais a partir dos dados fornecidos no problema.

   **Exemplo**:
   - Entrada: 
     ```json
     {
       "SP": 67836.43,
       "RJ": 36678.66,
       "MG": 29229.88,
       "ES": 27165.48,
       "Outros": 19849.53
     }
     ```
   - Saída:
     - `SP: 42.3%`
     - `RJ: 23.5%`
     - `MG: 18.2%`
     - `ES: 16.5%`
     - `Outros: 11.5%`

   **Código**: `percentualEstados.js`

## Como Executar os Códigos

### Pré-requisitos

- **Node.js**: Todos os códigos foram escritos para rodar no **Node.js**. Se ainda não tiver o Node.js instalado, baixe e instale a partir do [site oficial](https://nodejs.org/).

### Passos para Executar

1. **Clone este repositório**:
   ```bash
   git clone https://github.com/seu-usuario/repositorio.git
   cd repositorio
