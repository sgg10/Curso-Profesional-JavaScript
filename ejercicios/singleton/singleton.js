class Singleton1{
    constructor(name){
        this.name = name

        if(Singleton1.instance){
            return Singleton1.instance
        }
        Singleton1.instance = this
        return this
    }
}

const s1 = new Singleton1("Singleton 1")
console.log(s1)
const s2 = new Singleton1("Singleton 2")
console.log(s2)

console.log(s1 == s2)