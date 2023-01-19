/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreIngresado = txtIdNombre.value;
	var edadIngresada = txtIdEdad.value;
	var respuesta = "El nombre es " + nombreIngresado + " Y su edad es " + edadIngresada + " Años";
	alert(respuesta);
}

