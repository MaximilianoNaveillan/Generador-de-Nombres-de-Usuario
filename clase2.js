// Generación de números aleatorios Math.random()

// si necesitas un número dentro de un rango, usas la siguiente fórmula:
function numeroAleatorio(min, max) {
  //       ej: 0.3        12-10 = 2 --> 0.6 + 10 --> 10.6
  return Math.random() * (max - min) + min;
}
//                          min max
console.log(numeroAleatorio(10, 12));

console.log(numeroAleatorio('10', '12'));

// número entero en un rango, Math.floor() o Math.round()

function numeroEnteroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function numeroEnteroAleatorio(min, max) {
  return Math.floor(numeroAleatorio(min, max) + 1);
}

console.log(numeroEnteroAleatorio(10, 12));

// Redondeo de Números a Math

// Math.round() ej: 4.3 --> 4
console.log(Math.round(4.3));

// Math.floor() ej: 4.9 --> 4
console.log(Math.floor(4.9));

// redondea hacia arriba ej: 4.1 --> 5
console.log(Math.ceil(4.1));

// Elimina los decimales
console.log(Math.trunc(4.9)); // return 4

// Reemplazar partes de una cadena de texto por otra
const texto = 'Hola mundo, mundo!';

let nuevoTexto = texto.replace('mundo', 'Javascript');

console.log(nuevoTexto);
console.log(texto.split(',')[0].concat(',', texto.split(',')[1].replace('mundo', 'Javascript')));

// *******Expreciones Regulares**********
// remplaza todas las coincidencias, usa una expresión regular con bander g (global)

const texto2 = "'Hola mundo, mundo!'";

let nuevotexto2 = texto2.replace(/mundo/g, 'Javascript');
console.log(nuevotexto2);

//la bandera i hace que el remplazo ignore las diferencia entre minúscula y mayúscula
const texto3 = "'Hola Mundo, mundo!'";
let nuevotexto3 = texto3.replace(/mundo/gi, 'Javascript');
console.log(nuevotexto3);

// puedes usar simbolos especiales en el remplazo
// $& --> la coincidencia encontrada
let texto4 = 'Me gusta Javascript';

let nuevotexto4 = texto4.replace(/Javascript/, 'el lenguaje $&');
console.log(nuevotexto4);

// Metodo                    Función
//replace("a","b")           remplaza la primera ocurrencia de "a" por "b"
//replace(/a/g,"b")          remplaza todas las ocurrencia de "a" por "b"
//replace(/a/gi,"b")         remplaza todas las ocurrencia de "a" por "b" ignorando minúsculas y mayúsculas
//replaceAll("a","b")        remplaza todas las ocurrencia de "a" por "b" (solo ES2021+)

// ********Comparación de cadenas********

// Comparación Básica ignorando mayúsculas

// function nombre(prop1,prop2){bloque}

function comparacionDeCadena(a, b) {
  return a.toLowerCase().trim() === b.toLowerCase().trim();
}

console.log(comparacionDeCadena('hola  ', 'Hola')); // true  / false

// ***************Comparación de cadenas con expresiones regulares*****************

// sin mayusculas y sin acentos "/[\u0300-\u036f]/" --> ignora los acentos

function comparacionSinAcentos(a, b) {
  return (
    a
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase() ===
    b
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
  );
}

console.log(comparacionSinAcentos('Canción', 'cancion'));

function compararOrden(a, b) {
  return a.localeCompare(b, 'en', { sensitivity: 'base' }) === 0;
}

console.log(compararOrden('mañana', 'manana'));
