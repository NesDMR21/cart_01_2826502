//Ejemplo
//Sintaxis: Declaracion de funcion
function saludo(nombre){//-> parametro 
    console.log(`hola ${nombre} como estas`);

}
//invocar, llamar, ejectutar saludo
saludo("Harryson")//-> argumento: Harryson

//sintaxis espresion funcion 

const saludo2 = function(nombre="Harryson2"){//parametros por defecto
    console.log(`Hola ${nombre} como estas`);
}

//invocar saludo2
saludo2();
