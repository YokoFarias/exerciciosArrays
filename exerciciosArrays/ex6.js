
/*6. Crie uma função que receba um número. Se o número for maior que 50, remova
o último número do array. Caso contrário, adicione o número ao final do array.*/

function manipularArray(array, numero) {
    if (numero > 50) {
      let removido = array.pop();
      console.log("Número maior que 50, removido:", removido);
    } else {
      array.push(numero);
      console.log("Número adicionado:", numero);
    }
    console.log("Array atualizado:", array);
  }
  let numeros = [10, 20, 30, 40,50];
  manipularArray(numeros, 55); 
  manipularArray(numeros, 30); 

//Ou:
/*function receberNumeros(numero){
    let numeros = [7,5,10]
if (numero>50)
    numeros.pop()
else 
    numeros.push(numero)
console.log(numeros)
   
}
receberNumeros(59)
*/

