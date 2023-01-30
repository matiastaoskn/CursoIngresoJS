function mostrar()
{
	let numero = 0;
	let contadorPrimo = 0;
	numero = parseInt(prompt("Ingrese el numero para saber si es primo o no."))
	while(isNaN(numero)){
		numero = parseInt(prompt("Eso no es un numero. Ingrese el numero para saber si es primo o no."))
	}

	/*
	Lo siento, cometí un error en mi última respuesta al comparar 
	el residuo con un número "justo" o "no justo" en lugar de primo o no primo. En realidad, 
	si el residuo es igual a cero significa que el número ingresado es divisible exactamente 
	por el número actual "i" en esa iteración del ciclo, es decir, no es primo ya que es divisible 
	por otro número diferente a 1 y a sí mismo. Si el residuo es distinto de cero, 
	significa que el número ingresado no es divisible exactamente por "i" y es primo.
	*/

	for(let i = 2; i < numero; i++){
		if(numero % i == 0){
			contadorPrimo++;
		}
	}

	if(contadorPrimo != 0 || numero <= 0){
		alert("El " + numero + " es primo")	
	}else{
		alert("El " + numero + " No es primo")	
	}
	
/*Se declaran dos variables: "numero" y "contadorPrimo". 
La variable "numero" se inicializa en cero, y la variable "contadorPrimo" se inicializa en cero.
Se pide al usuario que ingrese un número utilizando el método "prompt" y se guarda el resultado en la variable "numero". 
El método "parseInt" se utiliza para convertir el valor ingresado a un número entero.

Se inicia un ciclo "for" que comienza con la variable "i" igual a 2, y se ejecutará mientras "i" sea menor al número ingresado. 
La variable "i" se utiliza como contador y se incrementa en 1 en cada iteración.
Dentro del cuerpo del ciclo, se verifica si el residuo de dividir el número ingresado entre "i" es igual a cero. 
Si es así, significa que el número ingresado es divisible exactamente por "i" y no es primo, por lo que se incrementa el contador "contadorPrimo" en 1.
Una vez que el ciclo termina, se verifica si el contador "contadorPrimo" es igual a cero. 
Si es así, significa que el número ingresado no es divisible exactamente por ningún número entre 2 y él mismo menos 1, por lo que es primo y se muestra una alerta que indica "El [numero] es primo". Si el contador es distinto de cero, significa que el número ingresado es divisible exactamente por algún número entre 2 y él mismo menos 1, por lo que no es primo y se muestra una alerta que indica "El [numero] no es primo".
*/
}//FIN DE LA FUNCIÓN