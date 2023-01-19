/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let acumuladorSuma = document.getElementById("txtIdSuma");
	let acumuladorPromedio = document.getElementById("txtIdPromedio");
	let contador = 0;
	let respuesta = "si";

	while(respuesta == "si"){
		numeros = parseInt(prompt("Ingrese el numero"));
		contador = contador + numeros;
		respuesta = prompt("Quiere que le vuelva a preguntar un numero? || si || no ||")

	}

	acumuladorSuma.value = contador;
	acumuladorPromedio.value = contador / 5;

}
//FIN DE LA FUNCIÓN