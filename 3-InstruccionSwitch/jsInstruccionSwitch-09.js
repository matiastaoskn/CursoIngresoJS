function mostrar()
{
	estaciondelaño = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	base = 15000;
	
	if(estaciondelaño === "Invierno"){
		switch(destino){
			case "Bariloche":
				resultado = base + (base * 0.20)
				console.log(base)
			alert(`El precio es de Bariloche es  $${resultado}`)
			break;
			case "Cataratas":
				resultado = base - (base * 0.10)
			alert(`El precio es de Cataratas es $${resultado}`)
			break;
			case "Cordoba":
				resultado = base - (base * 0.10)
			alert(`El precio es de Cataratas es $${resultado}`)
			break;
			case "Mardelplata":
				resultado = base + (base * 0.20)
			alert(`El precio es de Mar del Plata es  $${resultado}`)
			break;
		}
	}else if(estaciondelaño === "Verano"){
		switch(destino){
			case "Bariloche":
				resultado = base - (base * 0.20)
				console.log(base)
			alert(`El precio es de Bariloche es  $${resultado}`)
			break;
			case "Cataratas":
				resultado = base + (base * 0.10)
			alert(`El precio es de Cataratas es $${resultado}`)
			break;
			case "Cordoba":
				resultado = base + (base * 0.10)
			alert(`El precio es de Cataratas es $${resultado}`)
			break;
			case "Mardelplata":
				resultado = base + (base * 0.20)
			alert(`El precio es de Mar del Plata es  $${resultado}`)
			break;
		}
	}else if(estaciondelaño === "Otoño" || estaciondelaño === "Primavera"){
		switch(destino){
			case "Bariloche":
				resultado = base + (base * 0.10)
				console.log(base)
			alert(`El precio es de Bariloche es  $${resultado}`)
			break;
			case "Cataratas":
				resultado = base + (base * 0.10)
			alert(`El precio es de Cataratas es $${resultado}`)
			break;
			case "Cordoba":
				resultado = base
			alert(`El precio es de Cataratas es $${resultado}`)
			break;
			case "Mardelplata":
				resultado = base + (base * 0.10)
			alert(`El precio es de Mar del Plata es  $${resultado}`)
			break;
		}
	}
}

//FIN DE LA FUNCIÓN

