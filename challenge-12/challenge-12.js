/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/
(function(){   
    /*
    Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */
    
    var person = {
        name: 'Mario',
        lastname : 'oliveira',
        age: 30
    };
    console.log( 'Propriedades de "person":' );
    
    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    console.log(Object.keys( person));
    
    
    /*
    Crie um array vazio chamado `books`.
    */
    var  books = [];
    
    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    
    books.push({ name: 'Javascript', pages: 150});
    books.push({ name: 'Angular', pages: 250 });
    books.push({ name: 'Node' , pages: 125 });
    
    
    
    
    
    console.log( '\nLista de livros:' + books );
    
    /*
    Mostre no console todos os livros.
    */
    console.log(books);
    
    console.log( '\nLivro que está sendo removido:' );
    /*
    Remova o último livro, e mostre-o no console.
    */
    
    console.log(books.pop());
    
    console.log( '\nAgora sobraram somente os livros:');
    /*
    Mostre no console os livros restantes.
    */
    
    console.log(books);
    
    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    books =JSON.stringify(books);
    
    
    /*
    Mostre os livros nesse formato no console:
    */
    
    console.log( '\nLivros em formato string:');
    console.log(books)
    
    /*
    Converta os livros novamente para objeto.
    */
    books = JSON.parse(books);
    console.log( '\nAgora os livros são objetos novamente:' + books );
    
    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
    */
    for(var i = 0; i < books.length; i++){
        for(var book in books[i]){
            console.log(book +' : ' + books[i][book] );
        }
    }
    
    /*
    
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    var  myName = ['m','a','r','i','o']
    
    
    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    myName.join('' );
    console.log( '\nMeu nome é:' + myName);
    
    
    
    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    console.log(myName.reverse());
    
    console.log( '\nMeu nome invertido é:' );
    
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    myName.sort();
    console.log( '\nAgora em ordem alfabética:' + myName );
})();

