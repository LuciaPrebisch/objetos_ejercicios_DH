document.write("OBJETOS DIGITAL HOUSE")

/* 1- un objeto es una entidad independiente con propiedades, que a su vez esas propiedades tienen valores
Ej: un pais (OBJETO) tiene propiedades con valores (cant habitantes, capital, presidente etc). */

// TODO LO QUE ESTA DENTRO DE LAS LLAVES ES EL "PROPERITY"
// LA VARIABLE CIUDADES SERIA "KEY" Y EL NOMBRE DE CIUDADES SERIA "VALUE"


let pais = {
    nombre : "Estados Unidos" ,
    cantidadHabitantes : 1700000,
    ciudades : ["Nueva York" , "Chicago" , "Miami"] ,
    presidente : "Joe Biden" ,
    decirNacionalidad : function () {
        return "Yo naci en " + this.nombre // se coloca this haciendo referencia al objeto + nombre xq es el mismo valor de lo que quisieramos decir
    }
} ;

// para acceder a las propiedades del objeto se utiliza "dot notation" (PUNTO)

console.log (pais.decirNacionalidad()) // acordarse siempre de poner () luego de la funcion para ejecutarla

 
/* METODOS: Son funciones que se asignan como valor a una clave, buscan hacer algo mas alla de guardar un dato.
Por ejemplo: creo otra key que sea: decir.Nacionalidad. 
A la misma le creamos una funcion (return) que diga "Yo naci en Estados Unidos"
*/

/*
CONSTRUCTOR DE OBJETOS: 
funcion constructora: nos permite armar un molde y luego todas los objetos que queramos 

*/

function Auto (marca, modelo) { 
    this.marca = marca ;
    this.modelo = modelo ;
}

// el nombre de la funcion constructora siempre en mayuscula. 
// los parametros serian marca y modelo
// es necesario definirle la propiedad del objeto con "this"

let miAuto = new Auto ("Ford" , "Falcon") ;
let miOtroAuto = new Auto ("Toyota" , "Corolla") ;

/* es necesario llamar a la funcion "Auto" con "new" y pasarle dos parametos. Lo que 
devuelve es una instancia del objeto "Auto".

*/
