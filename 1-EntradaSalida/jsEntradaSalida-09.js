/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	sueldo = txtIdSueldo.value
	sueldo = parseInt(sueldo)

	respuesta = document.getElementById("txtIdResultado")

	respuesta.placeholder = sueldo + (sueldo * 0.10)
	//alert("ok")
}
