//Comentario de una línea
/*
Comentario multilínea
*/

//Hola, soy una función
function miFuncion()
{
    //Aquí va todo mi código...
    //Hola, soy una variable
    var miVariable0 = "Soy una variable que varía";
    

    //Hola, soy una salida de consola y me usan para depurar este código
    //Me verás en acción cuando abras tu página y oprimas F12 seleccionando la pestaña consola
    console.log(miVariable0);

    //Cambiando el valor de la variable
    miVariable0 = 10;
    //Mostrando el nuevo valor
    console.log(miVariable0);
}

//Hola, soy otra función
function bucles()
{
    //Soy un bucle de tipo 'for'
    for(/* Inicio*/ var x = 0; /* Fin */x < 10; /* Incremento*/ x++)
    {
        //Salida de 'x'
        console.log(x);
        //Termina el bucle
    }
    //Otro código...
    console.log("Iniciando el segundo bucle: \n");
    //Bucle cuenta atrás
    for(var x = 10; x > 0; x--)
    {
        console.log(x);
    }
}

//Función para ver bucles de tipo while - do while
function buclesWhile()
{
    /////////////////////////////////
    /////// Tipo while //////////////
    //Inicio contador
    var contador = 0;
    //Inicio bucle con la condición de término
    while( contador < 10)
    {
        //Salida de consola del contador
        console.log(contador);
        //Incrementar el contador
        contador++;
    }
    //
    var contador1 = 10;
    //Inicio bucle con la condición de término
    while( contador1 > 0)
    {
        //Salida de consola del contador
        console.log(contador1);
        //Incrementar el contador
        contador1--;
    }


}

//Función para bucles do while
function buclesDoWhile()
{
    //Mi variable contadora
    var contador3 = 0;
    //Definición del bucle
    do{
        //Salida de consola
        console.log(contador3);
        //Incremento en el contador
        contador3++;
     //Condición de salida   
    }while( contador3 < 10 );
}

//Función para usar operadores aritmético
function operacionesAritmeticas()
{
    //Definición de variables
    //Suma
    var op1 = 3;
    var op2 = 10;
    var res = 0;
    //operación suma
    res = op1 + op2;
    //Mostrar en consola
    console.log("Suma!");
    console.log(res);
    ///////////////
    //Multiplicación
    console.log("Multiplicación!");
    res = op1 * op2;
    console.log(res);
    ///////////////////
    //División
    console.log("División!");
    res = op1 / op2;
    console.log(res);
    ///////////////////
    //Resta
    console.log("Resta!");
    res = op1 - op2;
    console.log(res);
    ///////////////////
    //Módulo - residuo de una división
    console.log("Módulo!");
    res = op1 % op2;
    console.log(res);
    ///////////////////
    //Elevar a un exponente
    console.log("Exponencial!");
    res = op1**2;
    console.log(res);
    //Raíz cuadrada
    console.log("Raíz cuadrada!");
    res = Math.sqrt(op2);
    console.log(res);
    ////////////////
    //Logaritmo
    console.log("Logaritmo!");
    res = Math.log(op2);
    console.log(res);
    res = Math.log(-op2);
    console.log(res);
    res = Math.log(0);
    console.log(res);
}

//Función de operaciones lógicas
function operacionesLogicas() 
{
    //Valores booleanos
    var b = true;
    var c = false;
    var d = (b && c);
    console.log(b && c);
    //AND
    if(!(b && c))
    {
        console.log(c);
        console.log(d);
    }

    //OR
    console.log("OR!");
    var d = (b || c);
    console.log(d);

    //Números
    //Comparar dos números
    console.log("Comparar dos números!!");
    var g = 0;
    var f = 3;
    var h = -3;
    if(h < g)
    {
        console.log(h);
    }
    else{
        console.log(g);
    }

    if(h < g)
    {
        //console.log(h);
    }
    else if(h > g)
    {

    }
    else if(h > g)
    {

    }
    else if(h > g)
    {

    }

    var opcion = 2;
    switch(opcion)
    {
        case 0:
            console.log(opcion);
        break;
        
        case 1:
            console.log(opcion);
        break;

        case 2:
            console.log(opcion);
        //break;

        case 3:
            console.log(opcion);
        break;

        case 4:
            console.log(opcion);
        break;
        default:
            console.error("No está en la lista");
    }

}

//Manejo de arreglos
function manejarArreglos()
{
    //Iniciar un arreglo con todos sus índices como enteros
    var miArreglo = [5, 1, 3, 7, 8, 0, 9, 4];
       /* Posición   0  1  2  3  4  5  6  7 */

    //Mostrar el arreglo
    console.log("Inicializar y mostrar todos los elementos de un arreglo");
    for(var t = 0; t < miArreglo.length; t++)
    {
        console.log("Posición o índice "+t+" :"+miArreglo[t]);
    }
    
    //Búsqueda binaria
    console.log("Buscar en un arreglo un número y romper el ciclo cuando se haya encontrado");
    var valorReferencia = 9; 
    for(var t = 0; t < miArreglo.length; t++)
    {
        //Si encuentro el valor
        if(miArreglo[t]=== valorReferencia)
        {
            //Mostrar donde lo encontré
            console.log("Valor encontrado en : "+t+" - "+valorReferencia);
            //Romper el ciclo
            break;
        }
        else //Si no lo encontré
        {
            //Mostrar donde voy
            console.log(miArreglo[t]);
        }
        //Seguir buscando
        
    }

    //Búsqueda binaria con while
    console.log("Buscar en un arreglo un número y romper el ciclo while cuando se haya encontrado");
    var t = 0;
    valorReferencia = 0;
    var bandera = false;
    while( !bandera && (t < miArreglo.length))
    {
        console.log(miArreglo[t]+" : "+valorReferencia);
        bandera = (miArreglo[t] == valorReferencia);
        console.log(bandera);
        t++;
        
    }
    //Mostrar donde lo encontré
    console.log("Valor encontrado en : "+t+" - "+valorReferencia);
    
    //foreach ?
    console.log("For each");
    for (var e in miArreglo)
    {
        console.log(miArreglo[e]);
        miArreglo[e] = -1;
    }  

    console.log(miArreglo);
    //console.clear();
   
}

//Variable global, puede ser usada en cualquier función
var cadena = "Soy global!";

//Función para llamar a alert()
function misAlerts()
{
    //Enviar la alerta
    alert("Hola... "+cadena);
}

//Variable global objeto
var persona = {
    nombre : "Juan", 
    edad : 25,
    colorDeOjos : "verde",
    miFuncion : function unaFuncion()
                { 
                    console.log("función interna");
                }
}

function manejarObjeto()
{
    console.log(Object.keys(persona));
    var dinamico = "colorDeOjos";
    var dinamico2 = "RH";
    console.log(persona);
    console.log(persona.nombre);
    console.log(persona["nombre"]);
    console.log(persona[dinamico]);
    //console.error(persona[dinamico2]);
    persona.miFuncion();
}
