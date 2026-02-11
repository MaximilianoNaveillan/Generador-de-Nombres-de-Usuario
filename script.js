// ==========================
// Paso 2: Definir los datos (ahora con nombres y apellidos con espacios)
// ==========================

// Creamos un array con nombres que pueden tener espacios (nombres compuestos)
const nombres = [
  'Juan Carlos',
  'Martina Sofía',
  'Carlos Andrés',
  'Lucía María',
  'Sofía Isabel',
  'Pedro José',
  'Ana Belén',
  'Diego Armando',
];

// Creamos un array con apellidos que pueden tener espacios (apellidos compuestos)
const apellidos = [
  'Pérez García',
  'De la Soto',
  'Díaz López',
  'Gómez Fernández',
  'Rodríguez Silva',
  'Martínez Torres',
  'Hernández Ruiz',
  'González Vargas',
];

// Opcional: agrupamos los arrays en un objeto para tenerlos organizados
const datos = {
  nombres: nombres,
  apellidos: apellidos,
};

// ====================================
// Paso 3: Función para número aleatorio (sin cambios)
// ====================================

// Definimos una función que recibe la longitud de un array
// y devuelve un índice aleatorio válido para ese array.
function obtenerIndiceAleatorio(longitudArray) {
  // Math.random() genera un número decimal entre 0 (incluido) y 1 (excluido)
  const numeroAleatorio = Math.random();

  // Multiplicamos el número aleatorio por la longitud del array
  // para obtener un rango entre 0 y longitudArray (sin incluirla)
  const numeroEscalado = numeroAleatorio * longitudArray;

  // Usamos Math.floor() para redondear hacia abajo y obtener un entero
  // Esto asegura que el índice vaya de 0 a longitudArray - 1, que son
  // los índices válidos de un array en JavaScript.
  const indice = Math.floor(numeroEscalado);

  // Devolvemos el índice calculado
  return indice;
}

// =======================================
// Paso 4: Función generarUsuario() (mejorada para espacios)
// =======================================

// Definimos una función que se encarga de:
// - Elegir nombre y apellido al azar (incluso con espacios)
// - Unirlos
// - Normalizar el texto eliminando TODOS los espacios
function generarUsuario() {
  // Obtenemos un índice aleatorio para el array de nombres
  const indiceNombre = obtenerIndiceAleatorio(datos.nombres.length);

  // Obtenemos un índice aleatorio para el array de apellidos
  const indiceApellido = obtenerIndiceAleatorio(datos.apellidos.length);

  // Tomamos el nombre usando el índice aleatorio (puede tener espacios)
  const nombreSeleccionado = datos.nombres[indiceNombre];

  // Tomamos el apellido usando el índice aleatorio (puede tener espacios)
  const apellidoSeleccionado = datos.apellidos[indiceApellido];

  // Unimos nombre y apellido en un solo string
  const combinado = nombreSeleccionado + apellidoSeleccionado;

  // Normalizamos el texto paso a paso:
  // 1) toLowerCase(): convierte todo a minúsculas
  // 2) trim(): elimina espacios en blanco al inicio y al final
  // 3) replace(/\s+/g, ""): elimina TODOS los espacios internos (clave para nombres con espacios)
  //    - \s+ busca uno o más espacios en blanco
  //    - g = global (reemplaza todas las ocurrencias)
  const usuarioNormalizado = combinado
    .toLowerCase() // pasamos a minúsculas
    .trim() // quitamos espacios al inicio y al final
    .replace(/\s+/g, ''); // eliminamos TODOS los espacios internos

  // Devolvemos el nombre de usuario ya normalizado y sin espacios
  return usuarioNormalizado;
}

// =======================================
// Paso 5: Mostrar resultado en el DOM (sin cambios)
// =======================================

// Capturamos el botón usando su id definido en el HTML
const botonGenerar = document.getElementById('btn-generar');

// Capturamos el contenedor donde mostraremos el resultado
const divResultado = document.getElementById('resultado');

// Agregamos un "escuchador" de eventos al botón para reaccionar al clic
botonGenerar.addEventListener('click', function () {
  // Cada vez que el usuario hace clic, llamamos a generarUsuario()
  const nuevoUsuario = generarUsuario();

  // Mostramos el resultado con clases Bootstrap para mejor visualización
  // Removemos la clase inicial y agregamos estilos de éxito
  divResultado.className = 'alert alert-success alert-dismissible fade show';
  divResultado.innerHTML = `
    <strong>¡Usuario generado!</strong> <code>${nuevoUsuario}</code>
    <button type="button" class="close" data-dismiss="alert">
      <span>&times;</span>
    </button>
  `;
});
