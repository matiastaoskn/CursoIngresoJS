function mostrar()
{
let acumuladorSuma = document.getElementById("txtIdSuma");
let acumuladorPromedio = document.getElementById("txtIdPromedio");
let i = 0;
let acumulador = 0;
let numeros = 0;

while(i <= 5){
	numeros = parseInt(prompt("Ingrese un numero"))
	acumulador = acumulador + numeros;
	console.log(acumulador)
	i++;
}

acumuladorSuma.placeholder = acumulador;
acumuladorPromedio.placeholder = acumulador / 5

}//FIN DE LA FUNCIÓN