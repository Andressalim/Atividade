class Person{
    _idade = 0
    constructor (nome){
        this.nome = nome 
    }
    setarIdade(novaIdade){
        if (typeof novaIdade == "number") {
            this._idade = novaIdade
            
        }
    }

    get idade(){
        return this._idade
    }

    set idade(x){
        if (typeof x == "number") {
            this._idade = x
            
        }
    }
    hello(){
        alert(`${this.name} diga ESTUDE + POO!!!`)
    }
}



let p1 = new Person("Lara");


p1.idade = 30
p1.nome = "Lara"
p1.hello()

console.log(`${p1.nome} tem ${p1.idade}`);



