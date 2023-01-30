/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura = txtIdTemperatura.value;

    respuesta = ((temperatura - 32) * 5) / 9
    alert("La temperatura en Celcius es de :" + respuesta.toFixed(3));
    respuesta = 0;
}

function CentigradosFahrenheit () 
{
    let temperatura = txtIdTemperatura.value;

    respuesta = ((temperatura * 9) / 5) + 32;
    alert("La temperatura en Farenheit es de :" + respuesta.toFixed(3));
    respuesta = 0;

}
