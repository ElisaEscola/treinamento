const meuEstoque = [];

function guardarItem(nomeDoItem){
    meuEstoque.push(nomeDoItem);
    console.log(meuEstoque.length)

}
guardarItem("aleluia");
guardarItem("tanto faz");
guardarItem("pizza");
guardarItem("batata");
guardarItem("banana");
guardarItem("ata");
guardarItem("5");
guardarItem("testando...");
guardarItem("pisca");
guardarItem("bah");
guardarItem("tche");

console.log(meuEstoque[4])