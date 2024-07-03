let numeroSecreto = 10;
let numeroAdivinar = prompt("Ingresa un numero del 1 - 10");
console.log(numeroAdivinar);

if(numeroAdivinar==numeroSecreto){
    alert('Has acertado, el numero es: ' + numeroAdivinar) + alert('¡Game Over!');
} else {
    alert('Intenta nuevamente')
}