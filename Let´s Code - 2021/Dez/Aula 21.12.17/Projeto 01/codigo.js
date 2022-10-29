function calcular() {
    
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let resultado = 0

    valor1 = parseInt(valor1)
    valor2 = parseInt(valor2)

    if (document.getElementById("opcaoSomar").checked == true) {
        resultado = valor1 + valor2;
    }

    else if (document.getElementById("opcaoSubtrair").checked == true) {
        resultado = valor1 - valor2;
    }

    else if (document.getElementById("opcaoMultiplicar").checked == true) {
        resultado = valor1 * valor2;
    }

    else if (document.getElementById("opcaoDividir").checked == true) {
        resultado = valor1 / valor2;
    }

    alert("O resultado: " + resultado)
}