"use strict";
class Animal{

    constructor(habitat, tipo_alimentacao){
        this.habitat = habitat
        this.tipo_alimentacao = tipo_alimentacao
    }    
    

    fazer_barulho() {
        var _barulho="Ruaww"
        return console.log(_barulho);
    }

    static andar(){
        console.log("Estou andando");
    }

}


class Cachorro extends Animal{

    
    fazer_barulho(){
        return console.log("Au au au");
    }

    fazer_barulho_animal(){
        super.fazer_barulho()
    }

    andar_animal(){
        Animal.andar()
    }

    beber_agua(){
        console.log("bebendo água");
    }
}

class Gato extends Animal{
    fazer_barulho(){
        return console.log("Miau Miau");
    }
}



const animal = new Animal("aquático", "carnívoro")
const cachorro = new Cachorro("terrestre", "Onívoro")
const gato = new Gato("terrestre", "Onívoro")

// Animal.andar()

// animal.fazer_barulho()


// cachorro.fazer_barulho()
// cachorro.fazer_barulho_animal()
// cachorro.beber_agua()

// gato.fazer_barulho()




this.nome = "Piauí"

// console.log(this);

//Funções conseguem acessar o contexto global
function mostra_nome() {
    
    console.log(this.nome, arguments[0]);
}

//Objetos não conseguem acessar o contexto global
let mostra_nome_objeto = {
    nome: "Maranhão",
    mostra_nome: function () {
        console.log(this.nome);
    }
}




mostra_nome.apply(mostra_nome_objeto, ["terra das praias"] )

mostra_nome_objeto.mostra_nome()
