// Prueba de control de flujos
// let nombre = prompt("Ingrese su nombre");
// console.log(nombre)

// let edad = parseInt(prompt("Ingrese su edad"));

// if (edad >= 18) {
//     alert("Sos mayor de edad");
// }
// else if (edad == 4) {
//     alert("Sos un bebe");
// }
// else {
//     alert("No sos mayor de edad");
// }

// Prueba de ciclos e iteracciones

// for(let i = 1; i >= 5; i= i + 1){
//     console.log(i);
// }

// for(let i = 1 ; i < 3 ; i++){

//     if(i == 2){
//         alert("Apurate, este es el ultimo turno")
//     }
//     let nombreIngresado = prompt("Ingrese su nombre:")
//     alert("Bienvenido " + nombreIngresado + "." + "\nSu turno es el N:" + i)
// }
// alert("Nos quedamos sin turnos por hoy")


// let precio = parseInt(prompt("Ingrese el precio:"))

// switch(true){
//     case precio < 20:
//         alert("El precio es menor que 20");
//         break;
//     case precio < 50:
//         alert("El precio es menor que 50");
//         break;
//     case precio < 100:
//         alert("El precio es menor que 100");
//         break;
//     case precio > 100:
//         alert("El precio es mayor que 100");
//         break;
//     default:
//         console.log(precio)
//         alert("No ingresaste un precio en numeros");
//         break;
// }

// Funciones ejemplos

// function saludar(){
//     console.log("Bienvenidos a todos")
// }

// saludar();

// function suma (num1, num2){
//     let numero = num1 + num2;
//     console.log(numero)
// }

// suma(2, 6)
// suma(8, 24)

// function suma(num1, num2){
//     return num1 + num2
// }

// function mensaje(resultado){
//     console.log(resultado)
// }

// let numeroA = parseInt(prompt("Ingrese el primer numero"))
// let numeroB = parseInt(prompt("Ingrese el segundo numero"))

// let numeroTotal = suma(numeroA, numeroB)
// mensaje(numeroTotal)

// Objetos:

// function Producto(nombre, precio, stock){
//     this.nombre = nombre
//     this.precio = precio 
//     this.stock = stock
// }

// const productoB = new Producto("Silla", 3000, 20)

// Metodos

// let text = "hola amigos";
// console.log(text.length)