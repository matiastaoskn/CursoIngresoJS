function mostrar()
{
	//tomo el mes
	mesdelaño = document.getElementById("txtIdMes").value;
	
	switch(mesdelaño){
			case "Abril":
			case "Septiembre":
			case "Noviembre": 
			alert("Este mes tiene 30 días");
			break;

		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Junio": 
		case "Julio": 
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Este mes tiene 31");
			break;

		case "Febrero":
			alert("Este mes tiene 28 días.");
			break;

}	



}//FIN DE LA FUNCIÓN