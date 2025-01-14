# Soluções de Exercícios de Programação

Este repositório contém soluções para uma série de problemas de programação em diferentes áreas, como manipulação de strings, cálculos matemáticos e análise de dados. A seguir, estão descritos os problemas e as respectivas soluções implementadas em **JavaScript**.

## Exercícios Resolvidos

### 1. **Soma dos Números de 1 até um Valor Definido**
   **Objetivo**: Calcular a soma dos números de 1 até um valor informado (no exemplo, o valor é 13).

   - **Descrição**: O programa utiliza um laço `while` para somar os números de 1 até o valor de 13 e imprime o resultado da soma.
   - **Como testar**: Execute o código e o valor da variável `SOMA` será impresso no terminal após o cálculo.

   **Código**: `somaValores.js`

   **Exemplo**:
   - Saída:
     ```txt
     Soma dos números de 1 até 13: 91
     ```

### 2. **Sequência de Fibonacci**
   **Objetivo**: Calcular a sequência de Fibonacci até o número informado e verificar se o número pertence à sequência.

   - **Descrição**: O programa gera a sequência de Fibonacci até o número informado e verifica se o número está presente nela.
   - **Como testar**: Informe um número e o programa calculará a sequência até esse número, retornando uma mensagem indicando se ele pertence à sequência.

   **Código**: `calcularFibonacci.js`

   **Exemplo**:
   - Entrada: `13`
   - Saída: 
     ```txt
     13 pertence à sequência de Fibonacci
     ```

### 3. **Análise de Faturamento Diário**
   **Objetivo**: Analisar os valores de faturamento diário de uma distribuidora, encontrando o menor valor, o maior valor e o número de dias em que o faturamento foi superior à média mensal.

   - **Descrição**: O programa processa os dados de faturamento diário de uma distribuidora, ignora os dias sem faturamento e calcula:
     - O menor e maior valor de faturamento.
     - O número de dias com faturamento acima da média.
   - **Como testar**: Execute o código após carregar os dados de faturamento no formato JSON ou XML.

   **Código**: `faturamentoDiario.js`

   **Exemplo**:
   - Dados de entrada (JSON):
     ```json
     {
       "dias": [
         {"dia": "2021-01-01", "faturamento": 500},
         {"dia": "2021-01-02", "faturamento": 700},
         {"dia": "2021-01-03", "faturamento": 800}
       ]
     }
     ```
   - Saída:
     ```txt
     Menor faturamento: 500
     Maior faturamento: 800
     Dias com faturamento acima da média: 2
     ```

### 4. **Cálculo de Percentual de Representação por Estado**
   **Objetivo**: Calcular o percentual de representação de cada estado dentro do valor total mensal de faturamento de uma distribuidora.

   - **Descrição**: O programa calcula o percentual de faturamento de cada estado com base nos dados fornecidos.
   - **Como testar**: Execute o código para calcular e exibir os percentuais de cada estado.

   **Código**: `percentualEstados.js`

   **Exemplo**:
   - Dados de entrada (JSON):
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
     ```txt
     Percentual de SP: 42.3%
     Percentual de RJ: 23.5%
     Percentual de MG: 18.2%
     Percentual de ES: 16.5%
     Percentual de Outros: 11.5%
     ```

### 5. **Inverter os Caracteres de uma String**
   **Objetivo**: Inverter os caracteres de uma string informada.

   - **Descrição**: O programa inverte os caracteres de uma string e imprime o resultado. Não é permitido o uso de funções prontas como `reverse()`.
   - **Como testar**: Informe uma string e o programa irá retornar a string com seus caracteres invertidos.

   **Código**: `inverterString.js`

   **Exemplo**:
   - Entrada: `JavaScript`
   - Saída:
     ```txt
     tpircSavaJ
     ```

## Como Executar

### Pré-requisitos

- **Node.js**: Todos os códigos foram escritos para rodar no **Node.js**. Se ainda não tiver o Node.js instalado, baixe e instale a partir do [site oficial](https://nodejs.org/).

### Passos para Executar

1. **Clone este repositório**:
   ```bash
   git clone https://github.com/seu-usuario/repositorio.git
   cd repositorio
