
var botaoAddPaciente = document.querySelector("#adicionar-paciente")
var formAddPaciente = document.querySelector("#form-adiciona");
var tabelaPacientes = document.querySelector("#tabela-pacientes");

/*
   addEventListener: escutar um evento de click em cima do botaoAddPaciente
   event (no parâmetro da função anônima): carregar o event da biblioteca do JS
*/
botaoAddPaciente.addEventListener("click", function(event){
    /* Previnindo (parando) o funcionamento padrão do botão */
    event.preventDefault();
    console.log("Cliquei no botão...");

    /* Capturando os valores que estão nos campos input do Form,
       guardando nas variáveis abaixo */
    let nome = formAddPaciente.nome.value;
    let peso = formAddPaciente.peso.value;
    let altura = formAddPaciente.altura.value;
    let taxaGordura = formAddPaciente.gordura.value;
    
    /* Criando elementos do tipo TR (linhas) e TD (Colunas) */
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    let nomeTd = document.createElement("td");
    let pesoTd = document.createElement("td");
    let alturaTd = document.createElement("td");
    let taxaGorduraTd = document.createElement("td");
    let imcTd = document.createElement("td");

    /* Jogar os dados dos valores coletados nas linhas 32 a 35, para dentro
       desses elementos que foram criados */
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    taxaGorduraTd.textContent = taxaGordura;
    imcTd.textContent = calcularImc(peso, altura);


    /** Dizer que os TDs (linha 39 a 42) pertece ao TR (linha 38) */
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(taxaGorduraTd);
    pacienteTr.appendChild(imcTd)

    /** Dizer que o PacienteTr é filho da Tabela Pacientes */
    tabelaPacientes.appendChild(pacienteTr);
});
