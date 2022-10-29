const pi = 3.14;
var teste;
var aluno = "João";
var Aluno = "Erick";


let A = 100;
let B = 20;

A = A + B; //10 + 20 = 30
B = A - B; //30 - 20 = 10
A = A - B; //30 - 10 = 20 



var pessoa  = {
    nome: 'Lucas',
    idade: 27,
    nacionalidade: "brasileira",
}



var times = ['Vasco', 'Flamengo', 'Corintias'];
times.push("Parnaíba")
times.push("Parlmeiras")


for (p in pessoa){
    console.log(pessoa[p])
}


console.log(times)

for (let index = 0; index < times.length; index++) {
     console.log(times[index]);
}

let controle = 0

while (controle <= 5) {
    if (controle === 3 ) {
        break;
    }
    console.log("while: ", controle);
    

    controle++;
    
}
 

// do {
//     console.log("Do while: ", controle);
//     controle++;
// } while (controle < 5);



let count = 5;

count += 3;
console.log(count);



console.log("idade:", pessoa.idade);


if (aluno === "João") {
    var nota = 7;
    let aluno = "Marcos";
    console.log(aluno);
    console.log(Aluno);
    
    if (nota <= 7) {
        
        console.log(aluno);
        let nova_nota = 10;
        console.log(nova_nota);
    }
} else if(aluno === "Erick" ){
    console.log("Olá, ", aluno);
} else if(aluno === "Marcos" ){
    console.log("Olá, ", aluno);
}else{
    alert("Quem é você?");
}

console.log(nota)
console.log(pi)





console.log("Olá, mundo");


let operacao = '/';

switch (operacao) {
    case '+':
        console.log("Adição");
        break;
    case '-':
        console.log("Subtração");
        break;
    default:
        console.log("digite uma operação válida!");
        break;
}



function soma(numero1, numero2) {
    return numero1 + numero2;
}

var soma_anonima = function (numero1, numero2) {
    return numero1 + numero2;
}

// var soma_arrow = (n1,n2)=> {
//     alert("Ue sou uma Arrow function sendo chamada")
//     return n1 + n2;
// }

let btn_soma =  document.querySelector("#btn_soma");

// btn_soma.addEventListener('click', (n1,n2)=>{
//     return n1+n2;
// })

numb1 = 2;
numb2 = 5;

result = soma(numb1,numb2);

console.log(result)
console.log(soma_anonima(10,20))

// console.log(soma_arrow(40,40))


console.log("A: ", A)
console.log("B: ", B)



let c = 10
let d = 20 
let aux 

aux = c; 
c = d;
d = aux;

console.log("c: ", c)
console.log("d: ", d)


//R$200 R$100 R$50 R$20 R$10 R$5 R$2


function verifica_par(numero){
    if (numero%2 === 0) {
        console.log('O Número é par');
    }else{
        console.log('O número é impar');
    }
}


function caixa_eletronico(valor){
    let qt_notas = {
        notas_200: 0,
        notas_100: 0,
        notas_50: 0,
        notas_20: 0,
        notas_10: 0,
        notas_5: 0,
        notas_2: 0
    }


    qt_notas.notas_200 = Math.floor(valor/200); 
    if ((valor - (qt_notas.notas_200 * 200) === 1) ||  (valor - (qt_notas.notas_200 * 200) === 3) ){

        qt_notas.notas_200-- 
    }

    qt_notas.notas_100 = Math.floor((valor = valor - (qt_notas.notas_200 * 200))/100); 
    if ((valor - (qt_notas.notas_100 * 100) === 1) ||  (valor - (qt_notas.notas_100 * 100) === 3) ){

        qt_notas.notas_100-- 
    }
    qt_notas.notas_50 = Math.floor((valor = valor - (qt_notas.notas_100 * 100))/50); 
    if ((valor - (qt_notas.notas_50 * 50) === 1) ||  (valor - (qt_notas.notas_50 * 50) === 3) ){

        qt_notas.notas_50-- 
    }
    qt_notas.notas_20 = Math.floor((valor = valor - (qt_notas.notas_50 * 50))/20);
    if ((valor - (qt_notas.notas_20 * 20) === 1) ||  (valor - (qt_notas.notas_20 * 20) === 3) ){

        qt_notas.notas_20-- 
    }
    qt_notas.notas_10 = Math.floor((valor = valor - (qt_notas.notas_20 * 20))/10); 
    if ((valor - (qt_notas.notas_10 * 10) === 1) ||  (valor - (qt_notas.notas_10 * 10) === 3) ){

        qt_notas.notas_10-- 
    }
    qt_notas.notas_5 = Math.floor((valor =valor - (qt_notas.notas_10 * 10))/5);
    if ((valor - (qt_notas.notas_5 * 5) === 1) ||  (valor - (qt_notas.notas_5 * 5) === 3) ){

        qt_notas.notas_5-- 
    }
    qt_notas.notas_2 = Math.floor((valor =valor - (qt_notas.notas_5 * 5))/2);

    console.log(qt_notas);


}


caixa_eletronico(401);


// verifica_par(200001)




