// Para el uso de while, simplemente estableceremos una condición, mientras ésta se cumpla la iteración continuara.
var listaEstudiantes = ['Acamapixtli','Huitxilihuitl','Chimalpopoca','Itzcoatl','Axayacatl', 'Tizoc'];


// Igual que con los 2 ejemplos anteriores, se crea una función que realice la tarea de imprimir el saludo.
function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`);
}


// Aquí estamos haciendo uso, no solamente de la herramienta While, para hacer una iteración.
// Sino que además estamos utilizando .shift(), así en cada iteración despues de lanzar el saludo, se borrará el último registro de la lista.
// Estableciendo como condición para que el ciclo se detenga, que la lista se encuentre completamente vacia.
while(listaEstudiantes.length > 0){
    console.log(listaEstudiantes); // Con ésto comprobamos que los registros esten borrandose en cada iteración.
    var estudiante = listaEstudiantes.shift();
    saludarEstudiantes(estudiante);
}