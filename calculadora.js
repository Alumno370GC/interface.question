const interface =require ('readline-sync');

/**El metodo question permite recibir una respuesta por medio de la consola por parte del usuario */

let nombre = interface.question("Escribe tu nombre:");
console.log ("Hola"+nombre);


let response ="";


do {
console.log ("1.-Suma");
console.log ("2.-Resta");
console.log ("3.-Multiplicasion");
console.log ("4.-Division");
console.log ("5.-Division");

response = interface.question("Que operacion deseas realizar, escribe el numero: ");

if (response !="5"){
const firstNumber =interface.question("Dame el Primer numero:");
const seconNumeber =interface.question("Dame el Segundo numero:");

switch (response){

case "1":
var result =  parseInt(firstNumber) + parseInt(seconNumeber);
console.log("El resultado es:"+result);
break;


case "2":
var result =  parseInt(firstNumber) - parseInt(seconNumeber);
console.log("El resultado es:"+result);
break;

case "3":
var result =  parseInt(firstNumber) * parseInt(seconNumeber);
console.log("El resultado es:"+result);
break;

case "4":
var result =  parseInt(firstNumber) / parseInt(seconNumeber);
console.log("El resultado es:"+result);

break;
default:
break;






}


}
  
}while(response != "5");