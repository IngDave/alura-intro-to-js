/*Verifica si un número ingresado por el usuario es positivo o negativo. 
Muestra una alerta informativa.*/

let numero = prompt("Validemos si tu numero es positivo (+) o negativo (-):\n Ingresa un numero cualquiera:  ");
if(numero < 0){
    alert("El numero esta dentro del rango (-) negativo.");
}else if(numero > 0){
    alert("El numero esta dentro del rango (+) positivo.");
}else if (numero==0){
    alert("Signo numérico de valor nulo");
}else{
    alert("Error intenta nuevamente")
}