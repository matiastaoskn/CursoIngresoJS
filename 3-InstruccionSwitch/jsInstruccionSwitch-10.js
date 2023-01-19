function mostrar()
{
	estaciondelaño = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	base = 15000;
	
	if(estaciondelaño === "Invierno"){
		switch(destino){
			case "Bariloche":
			alert(`Se viaja`)
			break;

			case "Cataratas":
			case "Cordoba":
			case "Mardelplata":
				alert("No se viaja")
			break;
		}
	}else if(estaciondelaño === "Verano"){
		switch(destino){
			case "Bariloche":
			case "Cordoba":
				alert("No se viaja")
			break;
			case "Cataratas":
			case "Mardelplata":
				alert(`Se viaja`)
			break;
		}
	}else if(estaciondelaño === "Otoño"){
		switch(destino){
			case "Bariloche":
			case "Cataratas":
			case "Cordoba":
			case "Mardelplata":
				alert(`Se viaja`)
			break;
		}
	}else if(estaciondelaño === "Primavera"){
		switch(destino){
			case "Bariloche":
				alert("No se viaja")
				break;

			case "Cataratas":
			case "Cordoba":
			case "Mardelplata":
				alert(`Se viaja`)
			break;
		}
	}	

}//FIN DE LA FUNCIÓN