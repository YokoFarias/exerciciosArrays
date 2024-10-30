/*3. Crie uma função que adicione uma fruta ao início de um array de frutas e exiba o
array atualizado. */

function adicionarFrutas(){
    let frutas = ["maçã", "banana", "laranja"];
    frutas.unshift("pera")
    console.log(frutas)
}
adicionarFrutas()

//Ou dessa maneira:


function adicionarFruta(array, fruta) {
    array.unshift(fruta);
    console.log("Array atualizado: ", array);
}
let fruta = ['banana', 'maçã'];
adicionarFruta(fruta, 'laranja');