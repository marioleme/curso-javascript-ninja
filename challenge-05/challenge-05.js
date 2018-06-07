/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
//

var myvar = ['mario',4,null,3,true,5] ;

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

 function myFunction (arg) {
 	return arg; 
 };



/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(myvar)[1];
 
 // 4


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
 function myFunction2(arr , x){

 	return arr[x]
 }; 




/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/


var myArry = ['mario', null,4,undefined,true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(myFunction(myArry)[0]);

console.log(myFunction(myArry)[1]);

console.log(myFunction(myArry)[2]);

console.log(myFunction(myArry)[3]);

console.log(myFunction(myArry)[4]);






/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/


function book (nomeDoLivro){

 var objLivro = {

 	"livro 01" :{
 		quantidadePaginas : 100,
 		autor : 'mario silva',
 		editora : 'javascscript'
 	},

 	"livro 02" :{
 		quantidadePaginas : 45,
 		autor : "jose da silva",
 		editora : "abril"
 	},

 	"livro 03" : {
 		quantidadePaginas : 250,
 		autor : "Fabio neto",
 		editora : "estilo"
 	}


 };

return !nomeDoLivro ? objLivro : objLivro[ nomeDoLivro ]


}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log("O livro livro 03 tem " + book('livro 03').quantidadePaginas +  "  páginas!")



/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro livro 03 é " + book('livro 03').autor +  "  páginas!") 

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log("O livro 01 foi publicado pela editora  " + book('livro 01').editora + " . ")