function mostrar()
{	
	let numero = 0;
	let contador = 0;
	numero = parseInt(prompt("Ingrese el numero para saber su par"))

	for(let i = 0; i <= numero; i++){
		if(i % 2 == 0){
			contador++;
			console.log(i)
		}
	}

console.log("Pares encontrados: " + contador)

}//FIN DE LA FUNCIÓN