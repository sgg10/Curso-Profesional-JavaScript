function* IDS(){
    let id = 1;
    while(true){
        yield id;
        id = id + 1
    }
}

const getId = IDS()

console.log(getId.next())
console.log(getId.next())
console.log(getId.next())


function* fibonacci(){
    let a = 1
    let b = 1
    while(true){
        const nextNumber = a + b;
        a = b
        b = nextNumber
        yield nextNumber
    }
}

const gen = fibonacci()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())