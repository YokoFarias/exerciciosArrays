/*8. Crie uma função que remova o último número de um array se houver mais de 3
números, caso contrário, remova o primeiro número.*/

let numeros = [1, 2, 3, 4, 5]; 
function removerNumero(array) {
    if (array.length > 3) {
      let removido = array.pop();
      console.log("Removido o último número:", removido);
    } else {
      let removido = array.shift();
      console.log("Removido o primeiro número:", removido);
    }
    console.log("Array atualizado:", array);
  }
  removerNumero(numeros); 

//Ou:
/*  function ultimoNúmero (){
    let numeros = [9,10,34,54,39];
   console.log(numeros.length)
if (numeros.length>3){
    numeros.pop()
}else {
    numeros.shift()
    
}console.log("array autorizado",numeros)
}
ultimoNúmero()
*/