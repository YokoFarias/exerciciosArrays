/*9. Crie uma função que exiba uma mensagem indicando se o array de números tem
mais ou menos de 5 elementos.*/

let frutas = ["maçã", "banana", "laranja"]; 
function verificarTamanho(array) {
    if (array.length > 5) {
      console.log("O array tem mais de 5 elementos.");
    } else {
      console.log("O array tem menos de 5 elementos.");
    }
  }
  verificarTamanho(frutas); 

//Ou:

function exibirMensagem(){
    let números = [3,9,54,55,73,98]
if (números.length > 5) {
    console.log("O array tem mais que cinco elementos")
}else {
    console.log("O array tem menos que cinco elementos")
}

}exibirMensagem()

