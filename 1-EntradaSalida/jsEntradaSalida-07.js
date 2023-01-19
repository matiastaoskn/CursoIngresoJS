/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function tomar(){
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	numeroUno =	parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
}
	


function sumar()
{	
	tomar()

	alert(numeroUno + numeroUno)	
}

function restar()
{
	tomar()
	alert(numeroUno - numeroDos)
}

function multiplicar()
{ 
	tomar()
	alert(numeroUno * numeroDos)
}

function dividir()
{
	tomar()
	alert(numeroUno / numeroDos)
}

