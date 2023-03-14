/*
1- Vamos a ver cómo crear nuestro objeto "perro":
Declarar una variable llamada perro de tipo objeto literal.
Esa variable debe tener 3 propiedades:
a. nombre, con un valor de tipo String.
b. edad, con un valor de tipo Number.
c. vacunado, con un valor de tipo Boolean.


let perro = {
    nombre : "Zigor" ,
    edad : 3 ,
    vacunado : function () {
        return "true"
    }
}

console.log(perro.vacunado())
*/




/* 
2) Vamos a reforzar el concepto de un objeto literal tratando de representar un deportista y pedirle que entrene.
Para este ejercicio contamos con un objeto literal deportista ya definido, que tiene los siguientes atributos: nombre, energia, experiencia.
Queremos poder pedirle al deportista que entrene. Para esto, nuestro trabajo va a ser completar la función entrenarHoras.

La función entrenarHoras tiene las siguientes tres características:
Recibe por parámetro la cantidad de horas.
Resta a su energía (this.energia) la cantidad de horas x 5.
Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.
Una vez definida la función, podemos ejecutar el código y ver cómo va variando la energía y experiencia del deportista por consola.
*/

let deportista = {
    nombre : "Paula Pareto" ,
    experiencia : "Olimpica" , 
    energia : "10%" ,
    entrenarHoras : function () {
    

    }
}