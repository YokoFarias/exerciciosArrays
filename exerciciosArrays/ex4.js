/*4. Crie uma função que remova o primeiro número de um array e exiba o número
removido e o array atualizado.*/

function removerNumero(){
    let numeros = [10,11,12];
    console.log(numeros[0])
    numeros.shift();
    console.log(numeros)
}
removerNumero()

// Ou dessa maneira:

function removerPrimeiroNumero(array) {
    let removido = array.shift();
    console.log("Número removido:", removido);
    console.log("Array atualizado:", array);
  }
  let numeros = [1,2,3,4,5]
  removerPrimeiroNumero(numeros);
