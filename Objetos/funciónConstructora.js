// Una función constructora puede entenderse como la base sobre la cuál crear objetos nuevos.
function auto(marca, modelo, annio){

    this.marca;
    this.modelo;
    this.annio;

};

// Una vez creamos la función constructora la sintaxis para crear un objeto nuevo con esos parametros es sencilla.
// Solo hay que declarar una variable nueva, y con el metodo 'new' llamamos a la función constructora, y solo introducimos los datos deseados.
var autoNuevo1 = new auto('Toyota', 'Model 3', 2020);


