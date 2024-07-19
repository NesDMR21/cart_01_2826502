//sintaxis funcion = Arrow-flecha
//reglas:
//    1. si el bloque de codigo
//       de la funcion flecha solo tiene una linea, 
//       no hace flta poner corchetes
//    2. si la funcion tiene un solo 
//       parametro , se puede omitir el parentesis
//       de los parametros
//    3.si si el bloque de codigo
//      de la funcion flecha solo tiene una linea
//      y esta linea debe retornar un valor es posible omitir el return
//      pero solo si se aplica la regla 2

const saludo = nombre =>
         `Hola ${nombre} 
        desde una funcion flecha`;


// invocar a la funcion funcion flecha
console.log(saludo("Harryson")); 