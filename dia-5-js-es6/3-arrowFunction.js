/*ARROW FUNCTION
1. Ela é uma função anônima;
2. Não precisamos utilizar a palavra chave function;
3. Ela possui uma seta => entre os parâmetros e o corpo da função;
4. Quando tenho uma única linha, não precisamos utilizar {}, pois o return é implícito;
5. Quando tivermos um único parâmetro podemos usar () ou não. Sem parâmetros = () ou _
*/

// function sum (num1, num2) {
//   return num1 + num2;
// }

const sum = () => console.log('olá');

const xablau = () => {};

console.log(sum(2, 8));