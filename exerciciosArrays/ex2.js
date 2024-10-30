/*2. Crie uma função que remova o último número de um array e exiba o número
removido e o array atualizado.*/

function removerUltimoNumero(array) {
    let removido = array.pop();
    console.log("Número removido: ", removido);
    console.log("Array atualizado: ", array);

}
let numeros = [1, 2, 3, 4];
removerUltimoNumero(numeros);