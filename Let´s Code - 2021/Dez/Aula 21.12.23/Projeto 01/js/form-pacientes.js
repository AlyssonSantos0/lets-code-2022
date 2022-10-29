var botaoAddPaciente = document.querySelector("#adicionar-paciente");
var formAddPaciente = document.querySelector("#form-adiciona");
var tabelaPacientes = document.querySelector("#tabela-pacientes");

botaoAddPaciente.addEventListener("click" , function (event) {
    event.preventDefault();
    
    let nome = formAddPaciente.nome.value;
    let peso = formAddPaciente.peso.value;
    let altura = formAddPaciente.altura.value;
    let taxaGordura = formAddPaciente.gordura.value;

    let pacienteTr = document.createElement("tr");
    let nomeTd = document.createElement("td");
    let pesoTd = document.createElement("td");
    let alturaTd = document.createElement("td");
    let taxaGorduraTd = document.createElement("td");
    let imcTd = document.createElement("td");

    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    taxaGorduraTd.textContent = taxaGordura
    imcTd.textContent = calcularImc(peso, altura);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(taxaGorduraTd);
    pacienteTr.appendChild(imcTd);

    tabelaPacientes.appendChild(pacienteTr)
});