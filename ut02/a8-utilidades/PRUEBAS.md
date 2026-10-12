## A8. Consola de utilidades

* **1. Conversor de unidades:**
  * **Caso 1 (Kilómetros a millas):**
    * Entrada: Opción 1, valor = 10
    * Resultado esperado: 10 km son ~6.21 millas.
    * Resultado obtenido: Correcto, hace la conversión de forma precisa.
  * **Caso 2 (Grados Celsius a Fahrenheit):**
    * Entrada: Opción 2, valor = 100
    * Resultado esperado: 100 ºC son 212.00 ºF.
    * Resultado obtenido: Correcto, aplica la fórmula correctamente.
  * **Caso 3 (Valor no numérico):**
    * Entrada: Opción 1, valor = "hola"
    * Resultado esperado: Mensaje de error indicando que no es un número válido.
    * Resultado obtenido: Correcto, la validación frena la ejecución sin romper el programa.

* **2. Calculadora de IMC:**
  * **Caso 1 (Peso normal):**
    * Entrada: Peso = 70, Altura = 1.75
    * Resultado esperado: Tu IMC es 22.86 (Peso normal).
    * Resultado obtenido: Correcto, clasifica el resultado en su rango.
  * **Caso 2 (Bajo peso):**
    * Entrada: Peso = 48, Altura = 1.70
    * Resultado esperado: Tu IMC es ~16.61 (Bajo peso).
    * Resultado obtenido: Correcto, evalúa la condición inferior.
  * **Caso 3 (Datos erróneos o negativos):**
    * Entrada: Peso = -5, Altura = 1.75
    * Resultado esperado: Mensaje de error por datos incorrectos.
    * Resultado obtenido: Correcto, la cláusula de guarda detecta el número negativo.

* **3. Precio con IGIC:**
  * **Caso 1 (Cálculo estándar):**
    * Entrada: Precio base = 100, Porcentaje = 7
    * Resultado esperado: Precio base: 100 € | Total con IGIC: 107.00 €.
    * Resultado obtenido: Correcto, calcula el impuesto canario de forma exacta.
  * **Caso 2 (Precio cero):**
    * Entrada: Precio base = 0, Porcentaje = 7
    * Resultado esperado: Total con IGIC: 0.00 €.
    * Resultado obtenido: Correcto.
  * **Caso 3 (Entrada de texto):**
    * Entrada: Precio base = "abc"
    * Resultado esperado: Mensaje pidiendo números positivos.
    * Resultado obtenido: Correcto.

* **4. Calificación de notas:**
  * **Caso 1 (Suficiente):**
    * Entrada: Nota = 5
    * Resultado esperado: Tu calificación es: Suficiente.
    * Resultado obtenido: Correcto, entra en el rango correcto.
  * **Caso 2 (Sobresaliente):**
    * Entrada: Nota = 9.5
    * Resultado esperado: Tu calificación es: Sobresaliente.
    * Resultado obtenido: Correcto.
  * **Caso 3 (Fuera de rango):**
    * Entrada: Nota = 11
    * Resultado esperado: Mensaje de error (la nota debe estar entre 0 y 10).
    * Resultado obtenido: Correcto, la validación de límites funciona.

* **5. Generador de series (Tabla de multiplicar):**
  * **Caso 1 (Tabla correcta):**
    * Entrada: Base = 4
    * Resultado esperado: Muestra por consola las líneas de 4x1 hasta 4x10.
    * Resultado obtenido: Correcto, el bucle `for` recorre del 1 al 10 sin fallos.
  * **Caso 2 (Valor inválido):**
    * Entrada: Base = "texto"
    * Resultado esperado: Aviso de que no es un número válido.
    * Resultado obtenido: Correcto.

* **6. Estadísticas de números:**
  * **Caso 1 (Varios números y fin con 0):**
    * Entrada: 5, 10, 15 y luego 0
    * Resultado esperado: Total números: 3 | Suma: 30 | Media: 10.00
    * Resultado obtenido: Correcto, acumula y calcula la media con el `for...of`.
  * **Caso 2 (Salir directamente con 0):**
    * Entrada: 0 directamente
    * Resultado esperado: No has metido ningún número.
    * Resultado obtenido: Correcto.
  * **Caso 3 (Valores no numéricos intermedios):**
    * Entrada: "abc", 10, 0
    * Resultado esperado: Salta el error del texto y procesa el 10 correctamente antes de cerrar.
    * Resultado obtenido: Correcto.

* **7. Adivina el número:**
  * **Caso 1 (Acierto en varios intentos):**
    * Entrada: Varios números guiados por las pistas de mayor/menor hasta dar con el secreto.
    * Resultado esperado: ¡Ole! Has acertado en X intentos.
    * Resultado obtenido: Correcto, el bucle `while` se repite hasta que se acierta.
  * **Caso 2 (Cancelar el prompt):**
    * Entrada: Pulsar Cancelar (null)
    * Resultado esperado: Sale del juego limpiamente.
    * Resultado obtenido: Correcto.