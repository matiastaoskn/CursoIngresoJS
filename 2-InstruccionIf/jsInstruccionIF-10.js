function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	nota = Math.floor(Math.random() * 10)

	if (nota >= 9){
		alert(`Excelene, tu nota es ${nota}`)
	}else if(nota >= 4){
		alert(`Aprobo, tu nota es ${nota}`)
	}else 
		alert(`Vamos, la proxima se puede! tu nota es: ${nota}`)

}//FIN DE LA FUNCIÓN