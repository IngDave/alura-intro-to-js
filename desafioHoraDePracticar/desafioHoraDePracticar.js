/*Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra 
"¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!". */

alert("Recomendación: Ingrese solo minusculas. click en Aceptar para continuar"); let question = prompt("Que dia de la semana es hoy?");
if (question == "sabado" || question == "domingo"){
     alert("¡Buen fin de semana!");
}else{
    alert("¡Buena semana!");
}
