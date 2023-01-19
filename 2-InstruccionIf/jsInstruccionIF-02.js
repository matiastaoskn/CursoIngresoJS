function mostrar()
{
	//tomo la edad  
	edad = txtIdEdad.value
	edad = parseInt(edad)

	if (edad >= 18){
		alert("tu edad es " + edad)

	}else{
		alert("Eres menor, no te muestro la edad")
	}
	alert("ok");
	

}//FIN DE LA FUNCIÓN