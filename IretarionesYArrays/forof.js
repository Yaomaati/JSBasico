// Creamos un array para trabajar con él.
var listaEstudiantes = ['Hugo','Paco','Luis','Donald'];

// Creamos la función que se encargará de saludar al estudiante que usemos como parametro
function saludarEstudiantes(){
    console.log(`Hola, ${estudiante}`);
}

// Usaremos el bucle 'forof' para recorrer cada elemento de nuestro array.
// En éste bucle se declara la variable de iteración estudiante y al usar 'of' le pedimos que recorra la lista 1 registro a la vez.
// Y por último solo usamos nuestra función 'saludarEstudiantes()' y le damos nuestra variable estudiante como parametro.
// Este bucle hará la misma función que un for tradicional, con una sintaxis mas simple si solo queremos recorrer toda la lista de principio a fin.
for(var estudiante of listaEstudiantes){
    saludarEstudiantes(estudiante);
}