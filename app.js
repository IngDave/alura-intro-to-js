let numeroSecreto = Math.floor(Math.random()*10+1);
let numeroAdivinar = 0;
let intentos = 1;
//loop para dinamimizar el juego
while (numeroAdivinar != numeroSecreto) {
  numeroAdivinar = parseInt(prompt("Ingresa un numero del 1 - 10"));
  
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
    //limitar intentos
    if(intentos > 3){
      alert("¡Has llegado al numero maximo de intentos!");
      break;
    }
  }
}
