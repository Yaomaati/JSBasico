// Creamos un programa que se encargue de comparar las edades de 2 personas y decirnos si son o no mayores de edad.

var edadCiudadano1 = 21;
var edadCiudadano2 = 17;

function validarEdades(edad){
    if (edad >= 18){
        alert('Esta persona es mayor de edad')
    } else { //En éste caso, a diferencia de python la sintaxis exige cerrar completamente una condición antes de pasar la siguiente condicionante.
        alert('Esta persona es menor de edad')
    }
}

validarEdades(edadCiudadano1); //Llamamos a la función de validación, y como parametro le ofrecemos los datos contenidos en la variable que queramos comprobar.
validarEdades(edadCiudadano2);

// EXISTE UN SEGUNDO TIPO DE VALIDACIÓN EN JS QUE JUNTA IF/ELSE EN UNA SOLA SENTENCIA
// La sintaxis es similar a la siguiente: "condition ? if : else"
// Ejemplo:

var ciudadano = 25;

// Comprobamos directamente que el ciudadano tenga 25 años, si es así arrojará el primer mensaje, en caso contrario arrojará el segundo mensaje
var mayoriaEdad = ciudadano === 25 ? 'Tienes 25 años' : 'No tienes 25 años';

alert(mayoriaEdad)