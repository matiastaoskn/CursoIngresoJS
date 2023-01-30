/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables

	let Maximo = document.getElementById("txtIdMaximo");
	let Minimo = document.getElementById("txtIdMinimo");

let respuesta = "si";
let numeroMaximo = 0;
let numeroMinimo = 0;
let numeros = 0;
let numerocomparado = 0;

}while(respuesta == "si"){
	umeros = parseInt(prompt("Ingrese un numero"))
	respuesta = prompt("Sigo preguntando?")
	if (numeros < 0){
		numeroMinimo = numeros;
	}else if (numeros > 0){
		numeroMaximo = numeros;
	}
}
Maximo.value = numeroMaximo;
Minimo.value = numeroMinimo;
}//FIN DE LA FUNCIÓN