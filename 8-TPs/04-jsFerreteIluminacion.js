/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */


function CalcularPrecio () 
{
    let cantidad = txtIdCantidad.value;
    let marca = Marca.value;
    let descuentazo = document.getElementById("txtIdprecioDescuento");
    let respuesfianl = 0
    let descuento = 0;

    if (cantidad > 0){



        if (cantidad >= 6){
             descuento = 50
            let respuesta1 = (cantidad * 35);
            let respuesta2 = (respuesta1 * descuento) / 100;
             respuesfianl = respuesta1 - respuesta2;
             // alert("A- El valor de las lamparitas es de " + respuesta + " Con un descuento de: " + descuento)
             // POR DIOS. I LOVE YOU PROGRAMEER

             if(respuesfianl > 120){
                descuento = 10;
               let ingresobruto = (respuesfianl * descuento) / 100;
               respuesfianl = ingresobruto + respuesfianl;
               alert("Agregado 10% de ingreso brutos")
               descuentazo.value = "Con descuento de 50% = " + respuesfianl;  

             }
    
            
        }
    
        if(cantidad == 5 && marca == "ArgentinaLuz"){
             descuento = 40
            let respuesta1 = (cantidad * 35);
            let respuesta2 = (respuesta1 * descuento) / 100;
             respuesfianl = respuesta1 - respuesta2;

             descuentazo.value = "Con descuento de 40% = " + respuesfianl;  
   
            
        }else if(cantidad == 5){
             descuento = 30
            let respuesta1 = (cantidad * 35);
            let respuesta2 = (respuesta1 * descuento) / 100;
             respuesfianl = respuesta1 - respuesta2;
    
            descuentazo.value = "Con descuento de 30% = " + respuesfianl;  
        }
    
        if(cantidad == 4 && marca == "ArgentinaLuz"){
             descuento = 25
            let respuesta1 = (cantidad * 35);
            let respuesta2 = (respuesta1 * descuento) / 100;
             respuesfianl = respuesta1 - respuesta2;
    
            descuentazo.value = "Con descuento de 25% = " + respuesfianl;  
        }else if(cantidad == 4 && marca == "FelipeLamparas"){
             descuento = 25
            let respuesta1 = (cantidad * 35);
            let respuesta2 = (respuesta1 * descuento) / 100;
             respuesfianl = respuesta1 - respuesta2;
    
            descuentazo.value = "Con descuento de 25% = " + respuesfianl;  
        }
    
        if(cantidad == 3 && marca == "ArgentinaLuz"){
             descuento = 15
            let respuesta1 = (cantidad * 35);
            let respuesta2 = (respuesta1 * descuento) / 100;
             respuesfianl = respuesta1 - respuesta2;
    
            descuentazo.value = "Con descuento de 15% = " + respuesfianl;  
        }else if(cantidad == 3 && marca == "FelipeLamparas"){
             descuento = 10
            let respuesta1 = (cantidad * 35);
            let respuesta2 = (respuesta1 * descuento) / 100;
             respuesfianl = respuesta1 - respuesta2;
    
            descuentazo.value = "Con descuento de 10% = " + respuesfianl;  
        }else if(cantidad == 3){
             descuento = 5
            let respuesta1 = (cantidad * 35);
            let respuesta2 = (respuesta1 * descuento) / 100;
             respuesfianl = respuesta1 - respuesta2;
    
            descuentazo.value = "Con descuento de 5% = " + respuesfianl;  
        }
        

    }
 	
}   
