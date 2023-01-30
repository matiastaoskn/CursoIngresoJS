/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

let respuesta = 0;
let contador = 0;

function Sumar () 
{

    let precio1 = document.getElementById("txtIdPrecioUno").value;
    let precio2 = document.getElementById("txtIdPrecioDos").value;
    let precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseInt(precio1)
    precio2 = parseInt(precio2)
    precio3 = parseInt(precio3)

    respuesta = (precio1 + precio2 + precio3);
    alert("La suma es " + respuesta)

}
function Promedio () 
{
    let precio1 = document.getElementById("txtIdPrecioUno").value;
    let precio2 = document.getElementById("txtIdPrecioDos").value;
    let precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseInt(precio1)
    precio2 = parseInt(precio2)
    precio3 = parseInt(precio3)

	if (precio1 > 1 && precio2 > 1 && precio3 > 1){
        contador = 3;
    }else{
        contador = 2
    }
    respuesta = (precio1 + precio2 + precio3) / contador;
    alert("El promedio es de " + respuesta + "y su promedio en base a: " + contador)
}
function PrecioFinal () 
{
    let precio1 = document.getElementById("txtIdPrecioUno").value;
    let precio2 = document.getElementById("txtIdPrecioDos").value;
    let precio3 = document.getElementById("txtIdPrecioTres").value;

    precio1 = parseInt(precio1)
    precio2 = parseInt(precio2)
    precio3 = parseInt(precio3)

	let respuesta1 = (precio1 + precio2 + precio3);
    let respuesta2 = respuesta1 * 0.21;
    let respuestafinal = respuesta1 + respuesta2;
    alert("La suma con iva es " + respuestafinal )
}