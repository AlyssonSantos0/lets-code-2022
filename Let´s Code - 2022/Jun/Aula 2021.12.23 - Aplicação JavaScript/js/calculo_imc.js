
var pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length; i++){
    let peso = pacientes[i].querySelector(".info-peso").textContent;
    let altura = pacientes[i].querySelector(".info-altura").textContent;
    let campoIMC = pacientes[i].querySelector(".info-imc");   
    campoIMC.textContent = calcularImc(peso, altura);
}

function calcularImc(peso, altura){
    if( (peso <= 0 || peso >= 500) || (altura <= 0 || altura >= 3) ){
        return "IMC Inválido";
    }
    else{
        let imc = peso / (altura * altura)
        return imc.toFixed(1);       
    }
}

