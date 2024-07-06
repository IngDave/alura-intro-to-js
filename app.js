let numeroSecreto = 8;
let numeroAdivinar = 0;
let intentos = 1;
let palabraVeces = 'vez';
//loop para dinamimizar el juego
while (numeroAdivinar != numeroSecreto) {
  numeroAdivinar = prompt("Ingresa un numero del 1 - 10");
  console.log(numeroAdivinar);

  if (numeroAdivinar == numeroSecreto) {
    alert(`Has acertado, numero secreto: ${numeroSecreto}. Has intentado ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
  } else {
    if (numeroAdivinar < numeroSecreto) {
      alert(`El numero es mayor al ingresado, numero ingresado: ${numeroAdivinar}`);
    } else {
      alert(`El numero es menor al ingresado, numero ingresado:${numeroAdivinar}`);
    }
    //se incrementa el contador de veces para el acierto
    intentos++;
    //palabraVeces = 'veces';

    //limitar intentos
    if(intentos > 3){
      alert("¡Has llegado al numero max de intentos!");
      break;
    }
  }
}
