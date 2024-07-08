function numeroDinamico(max, min) {
  max = prompt("Ingrese un rango maximo: ");
  min = 1;
  return Math.floor(Math.random() * max + 1);
}
let numeroSecreto = numeroDinamico();
let numeroAdivinar = 0;
let intentos = 1;
let personalizarIntentos = prompt("Si tu rango es +10, te recomendamos escoger más intentos, ¿cuantos necesitas?");
while (numeroAdivinar != numeroSecreto) {
  numeroAdivinar = parseInt(prompt(`Ingresa un numero entre uno y tu rango maximo`));
  if (numeroAdivinar == numeroSecreto) {
    alert(`Has acertado, numero secreto: ${numeroSecreto}, has intentado ${intentos} ${intentos == 1 ? ' vez' : ' veces'}`);
  } else if (numeroAdivinar < numeroSecreto) {
    alert(`El numero es mayor al ingresado, numero ingresado: ${numeroAdivinar}`);
  } else {
    alert(`El numero es menor al ingresado, numero ingresado: ${numeroAdivinar}`);
  }
  intentos++;
  if (intentos > personalizarIntentos) {
    alert("¡Has llegado al numero maximo de intentos!");
    break;
  }
  
}
