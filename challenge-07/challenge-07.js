/*
Crie um array com 5 items (tipos variados).
*/

var arry =  ["mario", {eu: 'vivo'}, 1, true,function(){}];




/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/ 
function addItem( item ) {
    arry.push( item );
    return ( arry );
  }


/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/


console.log( addItem( [ 13, "nadar", function(){} ] ) );



/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é ' + arry[5][1]) + '.';






/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
 console.log('O primeiro array tem ' + arry.length  + ' itens.');

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + arr[5].length + ' itens.');

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
var num = 10;
  while(num <= 20 ){
      num % 2 === 0 ? console.log( num ) : '';
      num++;
  }
console.log( 'Números pares entre 10 e 20:' );
// ?

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
num = 10;
while(num < 20){
    (num++) % 2 === 0 ? console.log(num): '';
}
console.log( 'Números ímpares entre 10 e 20:' );
// ?

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/


for(var num2 = 100; num2 <= 120; num2++){
    num2 % 2 === 0 ? console.log( num2) : '';
   
}



for(num2 = 111; num2 <= 125; num2++){
    num2 % 2 !== 0 ? console.log( num2) : '';
}


console.log( 'Números pares entre 100 e 120:' );
// ?

console.log( 'Números ímpares entre 111 e 125:' );
// ?