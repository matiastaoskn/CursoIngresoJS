function mostrar()
{
	let numero = 0;
	let contadorDivisor = 0;
	numero = parseInt(prompt("Ingrese el numero para saber su divisor"))

	for(let i = 0; i <= numero; i++){
		if(numero % i == 0){
			contadorDivisor++;
			console.log(i)
		}
	}

	console.log("Divisores encontrados: " + contadorDivisor)


}//FIN DE LA FUNCIÓN