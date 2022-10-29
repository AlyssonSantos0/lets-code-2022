var pacientes = document.querySelectorAll(".paciente");

for (let index = 0; index < pacientes.length; index++) {
    let peso = pacientes[index].querySelector(".info-peso").textContent;
    let altura = pacientes[index].querySelector(".info-altura").textContent;
    let campoIMC = pacientes[index].querySelector(".info-imc");
    campoIMC.textContent = calcularImc(peso, altura);
}

function calcularImc(peso, altura) {
    if ((peso <= 0 || peso >= 500) || (altura <= 0 || altura >= 4.00))
    let imc = peso / (altura * altura)
        return imc.toFixed(1);
}