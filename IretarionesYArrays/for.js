// Creamos un array, el cuál recorreremos usando 'for'
var listaEstudiantes = ["Jose",'Maria','Morelos','Pavón'];

// Ahora creamos una función que imprima un saludo, y que use como parametro alguno de los elementos del array.
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`); //La coma invertida se utiliza para poder concatenar un string con variables al mismo tiempo
}

// Por último crearemos un for donde establescamos 3 parametros:
// 1) Declaramos la variable 'i' y donde comenzará 
// 2) El limite hasta donde esa función se detendrá 
// 3)La razón de crecimiento por cada iteración
// Una vez establecidos los parametros le diremos al bucle que en cada iteración use la función 'saludarEstudiantes()' tomando cada elemento del array como parametro.
for(var i = 0; i < listaEstudiantes.length; i++){
    saludarEstudiantes(listaEstudiantes[i]);
}