// METODO PUSH
// Recordemos que para añadir registros a un array tenemos el metodo push()
let numArray = [1,2,3,4,5]

function newNum(){
  numArray.push(6,7)
}

newNum()
// En éste caso nos devolvería el array numArray[1,2,3,4,5,6,7]


//  METODO SHIFT
//Creamos el array
let array = [1,2,3,4,5]
console.log(array)

// Aplicamos .shift()
let shiftArray = array.shift()

//Revisamos. El output debe de ser [2,3,4,5]
console.log(array)


// METODO POP
//Creamos el array
let array = [1,2,3,4,5]
console.log(array)

// Aplicamos .shift()
let shiftArray = array.pop()

//Revisamos. El output debe de ser [1,2,3,4]
console.log(array)