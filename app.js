alert("Bienvenido al juego de adivinar numeros")
let numero = prompt("Ingresa un numero del 1 - 10")

let numeroSecreto = 18

if (numero =! numeroSecreto)
    console.log("Estas cerca sigue intentando!")
    if(numero==numeroSecreto)
        console.log("Adivistaste el numero")
        alert("Game Over!")
return numero;
