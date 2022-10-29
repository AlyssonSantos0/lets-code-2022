//somente para teste ficar dinamico
var saque = entrada  = prompt("Valor do saque(apenas números inteiros sem pontos)");

//var saque = entrada =  266;
var contador100 = 0;
var contador50 = 0;
var contador20 = 0;
var contador10 = 0;
var contador5 = 0;
var contador2 = 0;


if(saque != 0) {
for(;saque >= 100;) {
    contador100++;
    saque -= 100;
}
for(;saque >= 50;) {
    contador50++;
    saque -= 50;
}

for(;saque >= 20;) {
    contador20++;
    saque -= 20;
}

for(;saque >= 10;) {
    contador10++;
    saque -= 10;
}

for(;saque >= 5;) {
    contador5++;
    saque -= 5;
}

for(;saque >= 2;) {
    contador2++;
    saque -= 2;
}

}
var total = (contador100*100+contador50*50+contador20*20+contador10*10+contador5*5+contador2*2);
var resto = entrada - total;

console.log("A quantidade de notas 100 é: " + contador100);
console.log("A quantidade de notas 50 é: " + contador50);
console.log("A quantidade de notas 20 é: " + contador20);
console.log("A quantidade de notas 10 é: " + contador10);
console.log("A quantidade de notas 5 é: " + contador5);
console.log("A quantidade de notas 2 é: " + contador2);
if (resto!=0){
console.log("O resto é: " + resto);
}