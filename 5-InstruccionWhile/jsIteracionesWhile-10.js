/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numero;
	let seguir = "s";
	let contadorPositivos = 0;
	let contadorNegativos = 0;
	let contadorCeros = 0;
	let contadorPares = 0;
	let acumuladorPositivos = 0;
	let acumuladorNegativos = 0;
	let promedioPositivos = 0;
	let promedioNegativos = 0;
	let diferencia;
	let respuestaUser = 0;
	let calculadora = 0;

	do{

		numero = parseInt(prompt("Ingrese un numero: "))

			if(numero < 0){
				// negativos
					acumuladorNegativos += + numero;
					contadorNegativos++;
		
					alert("La respuesta es: " + acumuladorNegativos)
				}else if(numero == 0){
					alert("cero")
					contadorCeros++;
				}else{
					alert("positivo")
					acumuladorPositivos += numero;
					contadorPositivos++;
				}

				//Analizar si es par:
				if(numero % 2 == 0){
					contadorPares++;
				}


		


		seguir = prompt("Quiere ingresar otro numero?");
	}while(seguir == "s");

	// promedio
	if (contadorPositivos > 0){promedioPositivos = acumuladorPositivos / contadorPositivos;}
		
	// El contador de negativos, si -5 es MENOR que 0, entoces no deberia hacer la cuenta
	/* es una condición que se verifica para determinar si hay al menos un número negativo 
		en un conjunto de números. 
	Si hay al menos un número negativo, se ejecuta la línea siguiente,*/

	/*Contador de negativos me suma la variable con ++, generando eso cuando se agrega cualquier numero, 
	mostrando la CANTIDAD de numeros Positivos o Negativos*/

	if (contadorNegativos > 0){
		// Explicacion : alert("Entrando y el numero es: " + contadorNegativos)
		promedioNegativos = acumuladorNegativos / contadorNegativos;}	
		
	
	diferencia = contadorPositivos - contadorNegativos;

	document.write(`	
	"1-Suma de los negativos." ${acumuladorNegativos}
	"2-Suma de los positivos." ${acumuladorPositivos} 
	"3-Cantidad de positivos." ${contadorPositivos} 
	"4-Cantidad de negativos." ${contadorNegativos} 
	"5-Cantidad de ceros." ${contadorCeros} 
	"6-Cantidad de números pares." ${contadorPares} 
	"7-Promedio de positivos." ${promedioPositivos} 
	"8-Promedios de negativos." ${promedioNegativos} 
	"9-Diferencia entre positivos y negativos." ${diferencia} `)


}//FIN DE LA FUNCIÓN