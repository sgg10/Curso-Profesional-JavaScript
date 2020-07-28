/*const cap = {
    name: 'Steve Rogers'
}
//cap.saludar = () => console.log(`Hola, soy ${cap.name}`)
cap.saludar = function(){
    console.log(`Hola, soy ${this.name}`)
}
cap.saludar()

const ironMan = {
    name: 'Tony Stark'
}
//ironMan.saludar = () => console.log(`Hola, soy ${ironMan.name}`)
ironMan.saludar = function(){
    console.log(`Hola, soy ${this.name}`)
}
ironMan.saludar()*/ // ===========> Se puede generar una clase/prototype

/*
?Se hara una referencia a un objeto en los metodos del prototipo, para evitar instanciar en memoria el mismo metodo multiples veces
const heroMethods = {
    saludar: function(){
        console.log(`Hola, soy ${this.name}`)
    }
} 

function Hero(name){
    const hero = {name}

    hero.saludar = heroMethods.saludar
    return hero
}

const cap = new Hero('Steve Rogers')
const ironMan = new Hero('Tony Stark')

cap.saludar()
ironMan.saludar()*/

// *Una mejor forma
/*const heroMethods = {
    saludar: function(){
        console.log(`Hola, soy ${this.name}`)
    }
} 

function Hero(name){
    const hero = Object.create(heroMethods) //Hacre que las propiedades que le pasasmos por parametro, se ubiquen en __proto__
    hero.name = name;
    return hero
}

const cap = new Hero('Steve Rogers')
const ironMan = new Hero('Tony Stark')

cap.saludar()
ironMan.saludar()*/

// *Otra forma aun mejor
/*function Hero(name){
    const hero = Object.create(Hero.prototype) //Hacre que las propiedades que le pasasmos por parametro, se ubiquen en __proto__
    hero.name = name;
    return hero
}
Hero.prototype.saludar = function(){
    console.log(`Hola, soy ${this.name}`)
}


const cap = new Hero('Steve Rogers')
const ironMan = new Hero('Tony Stark')

cap.saludar()
ironMan.saludar()*/

// ? new es un atajo para llevar Hero.prototype al objeto --- Una forma aun mejor

function Hero(name){
    this.name = name;
}
Hero.prototype.saludar = function(){
    console.log(`Hola, soy ${this.name}`)
}
const cap = new Hero('Steve Rogers')
const ironMan = new Hero('Tony Stark')

cap.saludar()
ironMan.saludar()

// ? Esto aun es valido pero ya se puede crear clases normalmente con la llegada de ECMAScript