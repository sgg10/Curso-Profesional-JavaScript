class Singleton2{
    private static instace: Singleton2

    private constructor(){/*init*/}

    static getInstance(){
        if(!Singleton2.instace){
            Singleton2.instace = new Singleton2()
        }

        return Singleton2.instace
    }
}

const a: Singleton2 = Singleton2.getInstance()
const b: Singleton2 = Singleton2.getInstance()

console.log(a === b)