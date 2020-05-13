class Observer{
    update(){}
}

class Subject{
    constructor() {
        this.observers = []
    }
    suscribe(){}
    unSuscribe(){}
}

class BitcoinPrice extends Subject{
    constructor(){
        super()
        const el = document.querySelector('#value')
        el.addEventListener('input',  () => this.notify(el.value))
    }

    suscribe(observer){
        this.observers.push(observer)
    }
    unSuscribe(observer){
        const index = this.observers.findIndex(obs => obs === observer)
        this.observers.splice(index, 1)
    }

    notify(data){
        this.observers.forEach(observer => observer.update(data))
    }
}

class PriceDisplay extends Observer{
    constructor(){
        super()
        this.el = document.querySelector('#price')
    }
    
    update(data){
        this.el.innerText = data;
    }
}

const value = new BitcoinPrice()
const display = new PriceDisplay()

value.suscribe(display)

setTimeout(() => value.unSuscribe(display), 6000) 