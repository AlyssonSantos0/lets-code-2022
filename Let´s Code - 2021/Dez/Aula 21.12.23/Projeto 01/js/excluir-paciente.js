pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(function(pacient) {
    paciente.addEventListener("dblclick", function() {
       this.remove(); 
    });
});