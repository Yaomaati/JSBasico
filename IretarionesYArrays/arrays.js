//Se declara un array
var frutas = ['Manzana','Fresa','Guayaba','Aguacate','Naranja'];

// Utilizamos el metodo 'push' para añadir un elemento al FINAL de la lista.
var masfrutas = frutas.push('Melón');

// Con el metodo 'pop' se elimina el ULTIMO registro dentro del array o lista.
var menosfrutas = frutas.pop('Melón');

// Aquí añadimos un nuevo registro al INICIO del array
var nuevaLongitud = frutas.unshift('Sandía');

// Y ahora removemos un registro al INICIO del array
var borrarFruta = frutas.shift('Sandía');

// Ahora, existe un metodo que nos devolverá la posición de un elemento de la lista si nosotros le ofrecemos el contenido de dicho elemento.
var posicionRegistro = frutas.indexOf('Aguacate'); //En éste caso, nos devolverá como resultado el número 3, ya que en nuestra lista original, el aguacate ocupa el cuarto registro de nuestra lista.
