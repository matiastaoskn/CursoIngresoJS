function mostrar()
{
	//tomo la edad  
	edad = txtIdEdad.value
	edad = parseInt(edad)

	estadocivil = document.getElementById("estadoCivil").value



	if(edad < 18){
		if(estadocivil === "Soltero"){
		alert("Es muy pequeño para NO ser soltero")
		}else{
			alert("Perfecto, su informacion fue ingresada correctamente!")
		}
	}else if( edad >= 18 && estadocivil === "Soltero"){
		alert("Es soltero y no es menor.")
	}
	else{
		alert("Perfecto, informacion ingresada correctamente")
	}
	


}//FIN DE LA FUNCIÓN