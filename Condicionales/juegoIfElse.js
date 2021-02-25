var tijeras = 'Tijeras';
var piedra = 'Piedra';
var papel = 'Papel';

function jugar(usuario, cpu){ //Creamos una función que compare las decisiones de la CPU y el usuario para determinar quién gana.
    //Le decimos a la maquina que si ambos eligen la misma opción de un empate, en caso contrario seguirá avanzando.
    if (usuario === cpu){
        console.log('Empataste')
    } else if(
        //Ahora establecemos únicamente las condiciones de victoria para el usuario, de modo que cualquier opción que no sean éstas o un empate serán consideradas una derrota.
        (usuario === tijeras && cpu === papel)  ||
        (usuario === papel   && cpu === piedra) ||
        (usuario === piedra  && cpu === tijeras)
    ){
        console.log('¡GANASTE!')
    } else {
        console.log('Perdiste :C ')
    }
}

//Ahora solo llamamos a la función jugar() y le damos los parametros del usuario, y luego las del cpu ya que no tenemos incluida una decisión automática en éste ejemplo.
jugar(tijeras, tijeras);
jugar(tijeras, papel);
jugar(piedra, papel);