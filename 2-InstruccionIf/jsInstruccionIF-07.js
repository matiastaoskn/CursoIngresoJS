function mostrar()
{
	//tomo la edad  

	edad = txtIdEdad.value
	edad = parseInt(edad)

	estadocivil = document.getElementById("estadoCivil").value



	if(edad < 18){
		if(estadocivil === "Soltero"){
		alert("Es muy pequeño para NO ser soltero")
		}
		else if(estadocivil === "Casado"){
			alert("Es muy pequeño y esta casado.. Felicitaciones!")
		}
		else if(estadocivil === "Divorciado"){
			alert("Diablos señorit@!, usted esta divorsiad@ y es menor a 18")
		}else{
			alert("Perfecto, su informacion fue ingresada correctamente!")
		}
	} 	
	else{
		alert("Perfecto, informacion ingresada correctamente")
	}
	


}//FIN DE LA FUNCIÓN