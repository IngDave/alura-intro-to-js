/*Pide al usuario que ingrese su nombre mediante un prompt. Luego, 
muestra una alerta de bienvenida usando ese nombre.*/

function mostrarAlert(){
    let msj = prompt("Cual es tu nombre: ")
    return msj;
}

alert("Hola!"+" "+mostrarAlert() )