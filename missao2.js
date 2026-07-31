
function calcularFrete(valorCompra){
    if (valorCompra >= 150) {
        console.log("Frete grátis");
    }
    else {
        console.log("Frete de 20,00 reais");
    }
}
calcularFrete(180)