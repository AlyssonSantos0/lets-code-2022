var valor = 1500
let quant_nota2 = 0
let quant_nota5 = 0
let quant_nota10 = 0
let quant_nota20 = 0
let quant_nota50 = 0
let quant_nota100 = 0
let quant_nota200 = 0

function Verificar() {
    if (valor >= 2) {
        quant_nota2 += 1
        valor -= valor
    }
    else if (valor >= 5) {
        quant_nota5 += 1
        valor -= valor
    }

    else if (valor >= 10) {
        quant_nota10 += 1
        valor -= valor
    }

    else if (valor >= 20) {
        quant_nota20 += 1
        valor -= valor
    }

    else if (valor >= 50) {
        quant_nota50 += 1
        valor -= valor
    }

    else if (valor >= 100) {
        quant_nota100 += 1
        valor -= valor
    }

    else if (valor >= 200) {
        quant_nota200 += 1
        valor -= valor
    }
        
    console.log("CÉDULAS                     QUANTIDADE");
    console.log("---------------------------------------")
    console.log("2"                         ,quant_nota2);
    console.log("5"                         ,quant_nota5);
    console.log("10"                        ,quant_nota10);
    console.log("20"                        ,quant_nota20);
    console.log("50"                        ,quant_nota50);
    console.log("100"                       ,quant_nota100);
    console.log("100"                       ,quant_nota200);
};

Verificar();