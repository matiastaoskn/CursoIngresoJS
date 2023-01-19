function mostrar()
{
	//tomo la edad  
	edad = txtIdEdad.value
	edad = parseInt(edad)

	if (edad >= 13 && edad <= 17){
		alert("Eres adolecente de edad, tu edad es: " + edad)

	}else if(edad >= 18){
		alert("Eres mayor de edad, tu edad es: " + edad)
	} 	
	else{
		alert("Eres menor, tu edad es: " + edad)
	}



}//FIN DE LA FUNCIÓN