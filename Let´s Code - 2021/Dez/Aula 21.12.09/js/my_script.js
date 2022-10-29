

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i]
    var peso = paciente.querySelector(".info-peso").textContent
    var altura = paciente.querySelector(".info-altura").textContent
    var imc = peso / (altura * altura)
    var campoIMC = paciente.querySelector(".info-imc")
    campoIMC.textContent = imc.toFixed(1)    
}
