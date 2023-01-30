/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/


largo = parse

function Rectangulo () 
{
    let largo = parseInt(txtIdLargo.value);
    let ancho = parseInt(txtIdAncho.value);
    

    respuesta = (largo * 2) + (ancho * 2);

    alert("El terreno mide " +  respuesta + " metros." + "Y se necesitan 3 hilos de alambre")

}
function Circulo () 
{
	let radio = parseInt(txtIdRadio.value);
    let a = 0;
    let pi = 3.1416;

    a = pi * radio * radio;

    alert("El radio del circulo es: " + a + "Y se necesitan 3 hilos de alambre")

}
function Materiales () 
{
	let bolsas = 2;
    let cal = 3;

    let largo = parseInt(txtIdLargo.value);
    let ancho = parseInt(txtIdAncho.value);
    let radio = parseInt(txtIdRadio.value);

    if ( radio > 1){
        alert("El valor de radio ingresado, no se tomara en cuenta.")
        radio = 0;
    } 


    

    respuesta = (largo * 2) + (ancho * 2);

    bolsas = respuesta * largo;
    cal = respuesta * cal;

    alert("El terreno mide " +  respuesta + " metros." + "Y se necesitan " + "Bolsas de cemento: " + bolsas + " Cal: " + cal)
}