/*  ⚠️⚠️ Ejercicios de funciones - es IMPORTANTE que la funcion se llame como se pide, esto hará que pueda correr los test. ⚠️⚠️
    ⚠️⚠️ No es necesario que se ejecute a la funcion. ya se ejecuta desde los test. ⚠️⚠️    */

//Debes crear un funcion que retorne un mensaje de bienvenida con nombre y apellido de la persona
//Ejemplo "Bienvenido Leonardo Avila" -> IMPORTANTE la funcion tiene que llamarse 'bienvenida'
//Tu código:
function bienvenida(nombre, apellido){
    return 'Bienvenido '+ nombre + ' ' + apellido; 
}
    



/**********************************************************************************/
// Crea una funcion el cual cumpla la funcion de una calculadora.. tiene que recibir 3 parametros num1, operador y num2
// IMPORTANTE -> la funcion debe llamarse 'calc'
// Tu código:
function calc(num1, operador, num2 ){
        switch (operador) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "/":
                result = num1 / num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            default:
                return "El operador ingresado no es valido."
        }
        return result;
}



/**********************************************************************************/
// Crea una funcion que en base a la temperaturma maxima, min y porcentaje de lluvia, diga si es necesario salir con abrigo,
// paraguas o sin nada. ejemplos
// Para max < 15 devolver 'Es recomendable salir con abrigo'
// Para max < 26 y min > 17 devolver 'El día está lindo'
// Para min > 25 'El día estará caluroso' 
// Y para cada uno de los anteriores casos, si el porcentaje de lluvia es mayor a 50 agregar al mensaje 'recomendable un paragua'
// ejemplo => max = 20 y porcentaje de lluvia = 70 => devolver "El día está lindo, recomendable un paraguas"
// IMPORTANTE -> la funcion debe llamarse 'temp'    
// Tu código:
function temp(max, min, porcentaje){
    let tiempo; 

    if(min > 25){
        tiempo = "El día estará caluroso"; 
    }else if(max < 26 && min > 17){
        tiempo = "El día está lindo"; 
    } else if( max < 15){
        tiempo = "Es recomendable salir con abrigo"; 
    }

    if(porcentaje > 50 ){
        return tiempo + ", recomendable un paraguas"; 
    }else {
        return tiempo; 
    }
}




/**********************************************************************************/

// Crea una función que reciba un array de strings como parámetro y devuelva un nuevo array con solo los strings que tienen una longitud mayor a 5.
// IMPORTANTE -> la funcion debe llamarse 'arrayDeStrings'
// Tu código:
function arrayDeStrings(strings){

    let newStrings = [];    

    for (let i = 0; i < strings.length; i++) {
        if(strings[i].length >= 5){
            newStrings.push(strings[i]);
        }
    }
    return newStrings;
}



/**********************************************************************************/
// Crea una función que reciba un string como parámetro y devuelva el mismo string pero con todas las palabras en orden inverso.
// IMPORTANTE -> la funcion debe llamarse 'stringInverso'
// Tu código:
function stringInverso(string){
        // primero split SEPARÁ cada caracter y convierte la cadena en un array, luego reverse INVIERTE los elementos y join UNIRÁ los elementos invertidos 
        return string.split("").reverse().join("");
}


/**********************************************************************************/
// Crea una función que reciba un array de objetos con propiedades "nombre" y "edad" y devuelva el nombre de la persona más joven.
// IMPORTANTE -> la funcion debe llamarse 'personaMásJoven'
// Tu código:
function personaMásJoven(personas){
    let menor = personas[0].edad; 
    let nombreMenor= personas[0].nombre;

    for (let i = 1; i < personas.length; i++) {

        if(personas[i].edad < menor){
            menor = personas[i].edad;
            nombreMenor = personas[i].nombre;
        }
    }
    return nombreMenor;
}


/**********************************************************************************/
// Crea una función que reciba una cadena de texto y devuelva un objeto con la cantidad de veces que aparece cada letra en la cadena.
// IMPORTANTE -> la funcion debe llamarse 'contadorDeLetras'
// Tu código:
function contadorDeLetras(cadena){

    let contador = {};

    for (let i = 0; i < cadena.length; i++) {
        let letra = cadena[i].toLowerCase(); 

        // Verificar si el carácter es una letra, singos o espacio
        if (/^[a-z\s?]$/.test(letra)) {
            // Incrementar el contador para la letra actual
            contador[letra] = (contador[letra] || 0) + 1;
        }
    }
return contador;
}




/**********************************************************************************/
// Crea una función que reciba un array de objetos que tiene como propiedades "nombre" y "sueldo" y devuelva el objeto con el sueldo más alto.
// IMPORTANTE -> la funcion debe llamarse 'sueldoMasAlto'
// Tu código:
function sueldoMasAlto(personas){

    let sueldoMayor = personas[0].sueldo; 
    let persona = personas[0];

    for (let i = 1; i < personas.length; i++) {

        if(personas[i].sueldo > sueldoMayor){
            sueldoMayor = personas[i].sueldo;
            persona = personas[i];
        }
    }
    return persona;
        
}



/**********************************************************************************/
// Crea una función que reciba un array de objetos que tiene como propiedades propiedades "nombre" y "nota" 
// y devuelva un nuevo array con los nombres de los estudiantes que obtuvieron una nota mayor o igual a 80.
// IMPORTANTE -> la funcion debe llamarse 'aprobados'
// Tu código:
function aprobados(alumnos){
    let alumnosAprobados = [];
    
    for (let i = 0; i < alumnos.length; i++) {
        if(alumnos[i].nota >= 80){
            alumnosAprobados.push(alumnos[i].nombre);
        }
    }
    return alumnosAprobados;
}



/**********************************************************************************/

module.exports = {
    bienvenida,
    calc,
    temp,
    arrayDeStrings,
    stringInverso,
    personaMásJoven,
    contadorDeLetras,
    sueldoMasAlto,
    aprobados
}