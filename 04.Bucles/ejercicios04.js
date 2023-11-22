function cantidadDeVocales(phrase){
// Cuenta la cantidad de vocales en la frase pasada por parametros utilizando un bucle for
// Tu código:👇
let suma= 0;

for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === "A" || phrase[i] === "a" || phrase[i] === "E" || phrase[i] === "e" || phrase[i] === "I" || phrase[i] === "i" ||
    phrase[i] === "O" || phrase[i] === "o" || phrase[i] === "U" || phrase[i] === "u"){
        console.log(phrase[i]); 
        suma++; 
    }
}
return suma; 
}

function primerDivisible(divisor, dividendo) {
// Encuentra el primer número divisible por 'num' a partir de un número dado utilizando un bucle while
// Tu código:👇
let aux = divisor

while(aux <= dividendo){
    if(dividendo % aux === 0) return aux
    aux++
    }
}


function encuentraX(x){
//Realiza un algoritmo que recorre numeros del 1 al 100, cuando pase por el numero X pasado por parametros
// retornar "El numero X es: ..."
// Tu Código:👇
for (let i = 1; i <= 100; i++) {
    if(i === x){
        return ("El numero X es: " + i);
    }
}
}

function sumandoTodo(num){
// Realiza un algoritmo que el cual recorra del 0 al numero pasado por parametros, debes retornar la suma de todo los
// numeros que se recorrio
// Tu código:👇
let suma = 0; 
for (let i = 0; i <= num; i++) {
    suma += i; 
}
return suma; 
}

function BinarioADecimal(num) {
// La funcion recibe por parametro, un numero binario pero en tipo de dato String
// debes tomar este numero binario y ayudandote de un bucle pasarlo a binario
// tu código:👇
let decimal = 0; 

for (let i = 0; i < num.length; i++) {
    //Obtener el digito binario en la posicion i
    let digito = parseInt(num.charAt(i));

    if (digito !== 0 && digito !== 1) {
        return "Número binario no válido";
    }
    // Calcular la contribución de este dígito a la representación decimal
    let contribucion = digito * Math.pow(2, num.length - 1 - i);
    decimal += contribucion;
}
return decimal;
}



function Fibonacci(n){
// Realiza una secuencia Fibonacci con el indice pasado por paramentro
// Se puede representar mediante la siguiente fórmula: F(n) = F(n-1) + F(n-2)
// Tu código:👇
    let resultado = 0;
    let fib= [0,1]; 

    for (let i = 2; i < n; i++) {
        fib[i]= fib[i-1] + fib[i-2];
    }
    fib.slice(0,n+1) ; 

    resultado = fib[fib.length - 1] + fib[fib.length - 2];
    return resultado; 
}

function esPrimo(numero) {
//Escribe un programa que verifique si un número dado es primo o no.
//Un número primo es aquel que solo es divisible por 1 y por sí mismo.
//Si el numero pasado es primo devolve: numero " es primo." , caso contrario: numero " no es primo."
// Tu código:👇

if( numero=== 1 || numero === 0 || numero === 4) return numero + " no es primo."; 

// colocamos la raiz cuadrada como limite superior en el bucle, asi optimizar la busqueda de divisores 
for (let i = 2; i <= Math.sqrt(numero); i++) {
    if(numero %  i == 0) return  numero + " no es primo.";
}
return numero + " es primo."; 
}


function invertirCadena(cadena) {
//La función toma una cadena de texto como parámetro, devuelve la cadena invertida.
//Ejemplo: 'Hola' -> devolver 'aloH'
//Tu codigo:👇

let cadenaInvertida = ""; 

for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida += cadena.charAt(i); 
}
return cadenaInvertida; 
}

module.exports = {
    encuentraX,
    sumandoTodo,
    BinarioADecimal,
    Fibonacci,
    esPrimo,
    invertirCadena,
    cantidadDeVocales,
    primerDivisible
}