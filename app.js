let numeroSecreto = 8;
let numeroAdivinar = prompt("Ingresa un numero del 1 - 10");
console.log(numeroAdivinar);

if (numeroAdivinar == numeroSecreto) {
  alert(`Has acertado, numero secreto: ${numeroSecreto}`);
} else { 
  alert("Intenta nuevamente") + alert(`El numero secreto era: ${numeroSecreto}`);
}
