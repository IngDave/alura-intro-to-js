/*Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
utilizando un template string para incluir el valor del saldo.*/

function consultarSaldo(){
    let saldoActual = 100000;
    return saldoActual;
}
const nombreUsuario = prompt("Ingrese su nombre");
const saldo = consultarSaldo();
const mensajeSaldo = `Hola ${nombreUsuario}, tu saldo es de $ ${saldo}`;
alert(mensajeSaldo);