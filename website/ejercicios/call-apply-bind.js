 /** 
  * *Se usan cuando es necesario cambiar el contexto (this)
 */

function caminar(metros, direccion){
    console.log(`${this.name} camino ${metros} metros en direccion ${direccion}`)
}

let sebastian = {
    name: 'Sebastian',
    lastname: 'Granda Gallego'
}

/**
 * CALL
 * *Como primer parametro recibe el contexto en el que va a trabajar
 * *luego, recibe los parametros que pida la funcion.
 * *Se ejecuta inmediatamente
*/
caminar.call(sebastian, 400, 'Norte')

/**
 * APPLY
 * *Como primer parametro recibe el contexto en el que va a trabajar
 * *luego, recibe una lista con los parametros que pida la funcion
 * *Se ejecuta inmediatamente
*/
let valores = [800, 'Sur']
caminar.apply(sebastian, valores)

let issac = {
    name: 'Issac',
    lastname: 'Granda Gallego'
}

/**
 * Bind
 * *Como primer parametro recibe el contexto en el que va a trabajar
 * *Retorna una nueva funcion con el cambio de contexto, se puede ejecutar cuando se quiera usar
 * *luego, recibe los parametros como si fuera una funcion normal o se puede 
 * *ingresar los parametros despues de poner el contexto para que los almacene en memoria.
 * *Tambien es posible guardar argumentos parciales
*/

const saludoConBind = caminar.bind(issac) || caminar.bind(issac, 100, 'Este') || caminar.bind(issac, 100)

saludoConBind(100, 'Este') || saludoConBind() || saludoConBind('Este')