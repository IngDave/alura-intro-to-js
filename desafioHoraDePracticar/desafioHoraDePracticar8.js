/*Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 
hasta ese número utilizando un bucle 'while' en la consola del navegador.*/

let cuentaProgresiva = prompt("Ingrese 0 para comenzar a contar: ");

while(cuentaProgresiva < 11){
    let contando = cuentaProgresiva++;
    alert(`Cuenta progresiva: ${contando}`);
}