var piedra = 'piedra';
var tijeras = 'tijeras';
var papel = 'papel';

var usuario = tijeras;
var cpu = eleccionCpu();

function eleccionCpu(){ 
    //Esta función crea una lista con las 3 respuestas de las variables
    //Despues utiliza el metodo "Math.random()" para elegir un número aleatorio dentro del rango que nosotros le demos.
    const opciones = [piedra, papel, tijeras];
    const eleccion = Math.floor(Math.random() * 3); //Aquí le damos a "Math.random()" parametros de 0 a 3 para que elija y se pasa por "Math.floor()" para que calcule solo enteros.
    return opciones[eleccion]; //Por último pedimos que dentro de las 'opciones' actue nuestra operación de elección aleatoria.
}

switch(usuario + cpu){


    case 'piedratijeras':
    case 'papelpiedra':
    case 'tijeraspapel':
        console.log('GANASTE');
        break;

    case 'piedrapiedra':
    case 'papelpapel':
    case 'tijerastijeras':
        console.log('EMPATE')
        break;

    default:
        console.log('Perdiste :c');

}