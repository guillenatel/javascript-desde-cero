function arrayDuplicados(array){
    // Por parametros recibiras un array de numeros, tendras que el array duplicado! Usa: Metodo .map()
    // Tu codigo
    let duplicados=array.map(numero => numero * 2);
    
    return duplicados; 
}

const nombresPersonas = (array) => {
    // Por parametros recibiras un array de objetos. tendras que iterar entre ellos y devolver un array con todos los nombres
    // Usa metodo .map().. Ayuda => la propiedad de los nombres es => name.
    // Tu codigo:
    let arrayNombres = array.map(nombre => nombre.name);

    return arrayNombres;
}

function masImpuestos(array){
    // Tienes un array de objetos que contiene como propiedades => producto, nSerie, precio. tendrás que calcular impuestos del 10% y agregarlo como prodiedad
    // Ejemplo: {producto: 'Zapatillas Nike', nSerie: 1511440, precio: $1000}. Deberias devolver => {producto: 'Zapatillas Nike', nSerie: 1511440, precio: 1000, Impuestos: 100}
    // Usar metodo .map()
    // Tu codigo:
    arrayConImpuestos = array.map(producto => ({
        ...producto, // ("...producto") copia todas las propiedades del objeto original
           impuestos: Math.floor(producto.precio * 0.1) //math.floor redondea el valor hacia abajo
    })); 
    
    return arrayConImpuestos;
}

function NombresLargos(array){
    // Usando metodo Filter(), deberás retornar todos los nombres que superen una longitud mayor o igual a 5  (FILTER)
    // Tu codigo:
    let arrayNom = array.filter(nombre => nombre.length >= 5);

    return arrayNom;
}

function filtaradoPorCategoria(array, categoria){
    // Recibiras por porametros un array de objetos con peliculas de la siguiente manera: {titulo: 'Spiderman', Estreno: , Categoria:  }.
    // deberás usar metodo filter, para devolver un array con los nombres de las peliculas que sean de la categoria pedida.
    // Tu codigo:

    let arrayPeliculas = array.filter(pelicula => pelicula.categoria === categoria); 

    return(arrayPeliculas.map(pelicula => pelicula.titulo)); 
}

function examenIngreso(array){
    // Recibiras por parametros un array de objetos con datos de Alumnos que se presentaron a rendir el examen de ingreso.
    // Deberas devolver un array con los datos (obj). de los alumnos que aprobaron el examon (nota >= 70) y inscripcion completa (inscripcion = true)
    // Tu codigo:

    let alumnosAprobados = array.filter(alumnos => alumnos.nota >= 70 && alumnos.inscripcion === true); 

    return alumnosAprobados; 

}

function nombreContiene(nombres, search) {
    // Recibiras un array de strings con nombres de personas, que asistieron a un evento. deberas devolver un array con todos los nombres
    // que incluyan lo pedido por 'search'. Ej: ['Leo','Agustina','Martina','Pedro','Manuel', 'Cristina'] & Search = 'tina'
    // deberia devolver => ['Agustina','Martina','Cristina']
    // Tu código aquí 👈

    let nombreSearch = nombres.filter(persona => persona.includes(search)); 

    return nombreSearch;

}


module.exports = {
    arrayDuplicados,
    nombresPersonas,
    masImpuestos,
    NombresLargos,
    filtaradoPorCategoria,
    examenIngreso,
    nombreContiene

}