
/*Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando 
un if-else y muestra el mensaje correspondiente.*/

let numero = prompt("Digite un numero: ");
if (numero == 0) {
    console.log("El numero es nulo.");
} else {
    if(numero<0){
        console.log("El numero es negativo.");
    }else{
        console.log("El numero es positivo.");
    }
}

