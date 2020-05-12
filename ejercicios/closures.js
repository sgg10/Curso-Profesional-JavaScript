/**
 * *Es la forma que tenemos de usar el SCOPE(Alcance de las variables) junto con las funciones
 * *Un ejemplo de uso es que podemos crear variables privadad (cosa que en JS no existe) / Se puede generar el encapsulamineto
 * *Tambien puede emplearse para crear metodos que recuerden el valor con el que fueron llamados
 */

function makeCounter(n){
    let count = n;
    return {
        incrase: function(){count++},
        decrase: function(){count--},
        getCount: function(){return count},
    }
}

let counter = makeCounter(7);
console.log(counter.count) //Intentando acceder al atributo
console.log(counter.getCount())
counter.incrase()
console.log(counter.getCount())
