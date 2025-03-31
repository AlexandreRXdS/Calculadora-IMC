function calcularIMC() {
    //Entrada

    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    //Processamento

    let valorIMC = Number(peso / (altura * altura));

    //Saída

    if (valorIMC < 18.5) {
        document.getElementById("classificacao").textContent = "Você está muito magro";
    } else if( valorIMC > 18.5 && valorIMC < 24.9) {
        document.getElementById("classificacao").textContent = "Você está no peso ideal";
    } else if(valorIMC > 24.9 && valorIMC < 29.9) {
        document.getElementById("classificacao").textContent = "Você está com sobrepeso";
    } else {
        document.getElementById("classificacao").textContent = "Você está obeso";
    }
    
    document.getElementById("valorCalculado").textContent = "Seu IMC é: " + valorIMC.toFixed(1);
}

const botao = document.getElementById("botaoCalculo");

document.addEventListener("keydown", function(evento) {
    if (evento.key === "Enter") {
        calcularIMC();
    }
})