/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var i = 0;
	var contador = 0;
	var negativos = 1;
	var respuesta = "si";
	let acumuladorSuma = document.getElementById("txtIdSuma");
	let acumuladorPromedio = document.getElementById("txtIdProducto");
	let numeros = 0;
	while(respuesta == "si"){
		i++;
		numeros = parseInt(prompt("Ingrese el primer numero"));
		respuesta = prompt("Quiere que le vuelva a preguntar un numero? || si || no ||")
		if (numeros >= 0){
			contador = contador + numeros;
		}else if(numeros < 0){
			negativos = negativos * numeros;
		}else{
			t = 0;
		}

		acumuladorSuma.value = contador;
		acumuladorPromedio.value = negativos;
	}

}//FIN DE LA FUNCIÓN