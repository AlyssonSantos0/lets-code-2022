// Pegando todos os dados da classe paciente.
var pacientes = document.querySelectorAll(".paciente");

// Parte 1 -> variável que guarda o valor inicial.
// Parte 2 -> condição lógica que determina o fim da repetição.
// Parte 3 -> incremento: fazer a variável percorrer de 1 em 1.
for (let index = 0; index < pacientes.length; index++) {
    let peso = pacientes[index].querySelector(".info-peso").textContent;
    let altura = pacientes[index].querySelector(".info-altura").textContent;
    let campoIMC = pacientes[index].querySelector(".info-imc");

    if ((peso <= 0 || peso >= 500) || (altura <= 0 || altura >= 3)) {
        campoIMC.textContent = "IMC Inválido"
        pacientes[index].classList.add("imc-invalido");
    }
    else{
        let imc = peso / (altura * altura);
        campoIMC.textContent = imc.toFixed(1);
    }
}