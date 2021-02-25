// La creación de objetos en JS ocupa una sintaxis específica. En éste caso será declarado como una variable mas.
// Y su identificador serán los corchetes.

var miAuto = {

    // Dentro del objeto la manera de asignar los diferentes parametros del objeto es asignar un identificador, seguido de un valor.
    marca: 'Toyota',
    modelo: 'Corolla',
    annio: 2020,

    // Además los objetos tambien pueden contener funciones para interactuar con el objeto mismo, igualmente usando un identificador, y un valor. Que en este caso será la función.
    detalleAuto: function(){
        console.log(`Auto ${this.marca} ${this.annio}`);
    } // Aquí cabe aclarar que el metodo "this" hace referencia a las carácteristicas contenidas DENTRO del objeto mismo en el que se genera la función.
      // Así, al pedirle 'this.marca' estamos diciendole a la función: "Dime la marca de ÉSTE auto".

};