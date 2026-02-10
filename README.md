# 🎥 Live Coding: Generador de Nombres de Usuario

## 🙌 Contexto

En esta demo vamos a construir **en vivo** un pequeño generador de
nombres de usuario.

La idea es combinar **nombres y apellidos al azar**, normalizar el texto
y mostrar el resultado en pantalla al presionar un botón.

Este ejercicio integra varios conceptos fundamentales de JavaScript que
ya hemos visto:

- Arrays
- Objetos
- Funciones
- Ciclos
- `Math.random()`
- Métodos de `String`
- Manipulación básica del DOM

## 🎯 Objetivo del ejercicio

Crear un generador que:

- Seleccione un **nombre** y un **apellido** al azar
- Normalice el texto (minúsculas, sin espacios)
- Muestre el nombre de usuario generado en la pantalla

Ejemplo de resultado esperado (solo como referencia visual):

juanperez\
martinasoto\
carlosdiaz

⚠️ _El formato final lo defines tú._

## 🧱 Estructura inicial del proyecto

/\
├── index.html\
└── script.js

## 🧩 Paso 1: Crear la estructura HTML

Pistas: - Un botón para generar el usuario - Un contenedor para mostrar
el resultado - Enlazar correctamente el archivo JavaScript

## 🧩 Paso 2: Definir los datos

- Array de nombres
- Array de apellidos
- Opcional: agrupar en un objeto

## 🧩 Paso 3: Número aleatorio

Crear una función que: - Use `Math.random()` - Use `Math.floor()` -
Devuelva un índice válido del array

## 🧩 Paso 4: Función generarUsuario()

Debe: - Elegir nombre y apellido al azar - Unirlos - Normalizar el texto

Métodos útiles: - `toLowerCase()` - `trim()` - `replace()`

## 🧩 Paso 5: Mostrar resultado

- Capturar el div desde JS
- Ejecutar la función al hacer clic
- Mostrar el resultado

## 🧠 Desafíos opcionales

- Agregar números aleatorios
- Evitar duplicados
- Generar múltiples usuarios

## 🚀 Cierre

Este ejercicio simula un problema real de generación de datos dinámicos.
