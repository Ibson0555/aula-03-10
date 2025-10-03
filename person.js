class Person{
    constructor(nome){
        this.nome = nome
    }
    opa(){
        return console.log(`Meu nome é: ${this.nome}`)
    }
}

module.exports = Person