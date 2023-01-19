function mostrar()
{

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
			alert("Sur y Este");
			break;
		case "Cataratas":
			alert("Norte y Oeste");
			break;
		case "Mar del plata":
			alert("Sur y Oeste");
			break;
		case "Ushuaia":
			alert("Sur");
			break;
	}
	

}//FIN DE LA FUNCIÓN