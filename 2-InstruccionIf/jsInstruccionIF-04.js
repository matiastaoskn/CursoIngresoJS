function mostrar()
{
	//tomo la edad  

	edad = txtIdEdad.value
	edad = parseInt(edad)

	if (edad >= 13 && edad <= 17){
		alert("Eres adolecente")

	}else if(edad >= 18){
		alert("Eres mayor de edad")
	} 	
	else{
		alert("Eres menor, no te muestro la edad")
	}



}//FIN DE LA FUNCIÓN