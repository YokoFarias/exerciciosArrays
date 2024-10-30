/* 10. Crie uma função que receba o nome de uma fruta. Se a fruta for "Morango",
remova o primeiro item do array. Caso contrário, adicione essa fruta ao final do
array.*/

let frutas = ["maçã", "banana", "laranja"]; 
function manipularFruta(array, fruta) {
    if (fruta === "Morango") {
      let removido = array.shift();
      console.log("Morango removido. Primeiro item removido:", removido);
    } else {
      array.push(fruta);
      console.log(`${fruta} adicionado ao final do array.`);
    }
    console.log("Array atualizado:", array);
  }
  manipularFruta(frutas, 'Morango'); 
  manipularFruta(frutas, 'Pera'); 
  

  