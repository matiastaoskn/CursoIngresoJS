/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	importe = txtIdImporte.value
	importe = parseInt(importe)

	respuesta = document.getElementById("txtIdResultado")

	respuesta.placeholder = importe - (importe * 0.25)
	//alert("ok")
	salert("ok");
}
