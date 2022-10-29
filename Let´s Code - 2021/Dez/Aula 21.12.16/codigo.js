function media(){
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let valor3 = document.getElementById("valor3").value;
    let valor4 = document.getElementById("valor4").value;
    let valor5 = document.getElementById("valor5").value;
    let valor6 = document.getElementById("valor6").value;
    let valor7 = document.getElementById("valor7").value;
    let valor8 = document.getElementById("valor8").value;

    valor1 = parseFloat(valor1)
    valor2 = parseFloat(valor2)
    valor3 = parseFloat(valor3)
    valor4 = parseFloat(valor4)
    valor5 = parseFloat(valor5)
    valor6 = parseFloat(valor6)
    valor7 = parseFloat(valor7)
    valor8 = parseFloat(valor8)

    let bi1 = valor1+valor2;
    let bi2 = valor3+valor4;
    let bi3 = valor5+valor6;
    let bi4 = valor7+valor8;
    let media = (bi1+bi2+bi3+bi4)/8;

    alert("Sua Média: " + media)
}