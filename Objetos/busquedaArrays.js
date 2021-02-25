// Creamos el array que contendrá los diferentes objetos.
var listaLibros = [
    {nombre: 'Caos y complejidad', precio: 250},
    {nombre: 'Sapiens', precio: 450},
    {nombre: 'El placer de la X', precio: 350},
    {nombre: 'La fundación', precio: 180},
    {nombre: 'Nacidos de la bruma', precio: 300},
    {nombre: 'El origen de las especies', precio: 650},
];

// Usamos el metodo filter para sacar solo los registros que nos interesan y crear un nuevo array con ellos.
var articulosFiltrados = listaLibros.filter(function(articulo){
    return articulo.precio >= 350;
});

// Creamos un for para imprimir en el log todos los registros del array nuevo.
for(i = 0; i < articulosFiltrados.length; i++){
    console.log(articulosFiltrados[i]);
};

// En el caso de "map" solo nos traerá los datos del objeto solicitado, no al objeto entero.
var nombreArticulos = listaLibros.map(function(articulo){
    return articulo.nombre;
});

// Con el metodo "find" crearemos otro array que contenga SOLAMENTE el primer articulo que coincida de manera exacta con el parametro de busqueda.
// Este metodo si guarda objetos dentro del nuevo array, 
var articulosFind = listaLibros.find(function(articulo){
    return articulo.nombre === 'Sapiens'; //Se usa el === "estrictamente igual" para que haga la busqueda de la manera mas precisa posible.

});

// Tambien contamos con el metodo 'forEach()' que lo que hará es buscar aquellos elementos que solicitemos a la función. 
// Pero sin crear nuevos arrays, todo lo que hará será devolver la información que le solicitemos.
listaLibros.forEach(function(articulo){
    console.log(articulo.nombre);
});

// Por último tenemos el metodo 'some()' que lo que hará es una validación de datos dentro del array. 
// Es decir, le daremos una condición, y si existen registros que cumplan con esa condición, devolverá True y en caso contrario False.
var librosBaratos = listaLibros.some(function(articulo){
    return articulo.precio <= 500;
});