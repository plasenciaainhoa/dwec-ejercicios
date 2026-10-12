## 1. Clasificador de IMC con validación (1-imc.js)

* **Caso de prueba 1 (Peso normal):**
  * Entrada: Peso = 70 kg, Altura = 175 cm
  * Resultado esperado: IMC = 22.9 -> Normal
  * Resultado obtenido: Correcto, calcula el IMC y muestra la categoría adecuada.

* **Caso de prueba 2 (Sobrepeso):**
  * Entrada: Peso = 80 kg, Altura = 175 cm
  * Resultado esperado: IMC = 26.1 -> Sobrepeso
  * Resultado obtenido: Correcto, clasifica correctamente en sobrepeso.

* **Caso de prueba 3 (Cláusula de guarda / Error):**
  * Entrada: Peso = -5 kg, Altura = 175 cm
  * Resultado esperado: Mensaje de error indicando que los valores deben ser mayores que cero y no realiza el cálculo.
  * Resultado obtenido: Correcto, la validación detecta el número negativo y frena la ejecución.

## 2. Calificaciones (2-calificaciones.js)

* **Caso de prueba 1:**
  * Entrada: 4.99
  * Resultado esperado: Insuficiente
  * Resultado obtenido: Correcto, entra en el rango inferior a 5.

* **Caso de prueba 2:**
  * Entrada: 5
  * Resultado esperado: Suficiente
  * Resultado obtenido: Correcto, límite inferior del suficiente.

* **Caso de prueba 3:**
  * Entrada: 5.99
  * Resultado esperado: Suficiente
  * Resultado obtenido: Correcto, límite superior del suficiente.

* **Caso de prueba 4:**
  * Entrada: 6
  * Resultado esperado: Bien
  * Resultado obtenido: Correcto, límite inferior del bien.

* **Caso de prueba 5:**
  * Entrada: 8.99
  * Resultado esperado: Notable
  * Resultado obtenido: Correcto, límite superior del notable.

* **Caso de prueba 6:**
  * Entrada: 9
  * Resultado esperado: Sobresaliente
  * Resultado obtenido: Correcto, límite inferior del sobresaliente.

* **Caso de prueba 7:**
  * Entrada: 10
  * Resultado esperado: Sobresaliente
  * Resultado obtenido: Correcto, nota máxima permitida.

* **Caso de prueba 8:**
  * Entrada: 10.01
  * Resultado esperado: Error (fuera de rango)
  * Resultado obtenido: Correcto, la cláusula de guarda detecta que es mayor que 10.

* **Caso de prueba 9:**
  * Entrada: -1
  * Resultado esperado: Error (fuera de rango)
  * Resultado obtenido: Correcto, la cláusula de guarda detecta que es menor que 0.

## 3. Año bisiesto (3-bisiesto.js)

* **Caso de prueba 1:**
  * Entrada: 1900
  * Resultado esperado: No es bisiesto (divisible por 4 y por 100, pero no por 400)
  * Resultado obtenido: Correcto, la condición evalúa que no es bisiesto.

* **Caso de prueba 2:**
  * Entrada: 2000
  * Resultado esperado: Sí es bisiesto (divisible por 4, por 100 y también por 400)
  * Resultado obtenido: Correcto, la condición evalúa que sí es bisiesto.

* **Caso de prueba 3:**
  * Entrada: 2024
  * Resultado esperado: Sí es bisiesto (divisible por 4 y no por 100)
  * Resultado obtenido: Correcto, la condición evalúa que sí es bisiesto.

* **Caso de prueba 4:**
  * Entrada: 2026
  * Resultado esperado: No es bisiesto (no es divisible por 4)
  * Resultado obtenido: Correcto, la condición evalúa que no es bisiesto.

## 4. Días del mes (4-dias-mes.js)

* **Caso de prueba 1:**
  * Entrada: Mes = 2 (Febrero), Año = 2024 (Bisiesto)
  * Resultado esperado: 29 días
  * Resultado obtenido: Correcto, el cálculo bisiesto funciona y asigna 29 días a febrero.

* **Caso de prueba 2:**
  * Entrada: Mes = 2 (Febrero), Año = 2026 (No bisiesto)
  * Resultado esperado: 28 días
  * Resultado obtenido: Correcto, asigna 28 días a febrero.

* **Caso de prueba 3:**
  * Entrada: Mes = 4 (Abril), Año = 2026
  * Resultado esperado: 30 días
  * Resultado obtenido: Correcto, el switch agrupado procesa correctamente los meses de 30 días.

## 5. Tarifa de entrada

* **Caso de prueba 1 (Miércoles - Gratis general):**
  * Entrada: Edad = 30, Carnet = no, Día = miércoles
  * Resultado esperado: Entrada gratuita (por ser miércoles)
  * Resultado obtenido: Correcto, la primera condición del miércoles anula el precio a 0.

* **Caso de prueba 2 (Menor de edad con descuento):**
  * Entrada: Edad = 10, Carnet = no, Día = lunes
  * Resultado esperado: Precio: 6.00 € (50% de descuento por edad)
  * Resultado obtenido: Correcto, aplica el descuento por estar entre 6 y 17 años.

* **Caso de prueba 3 (Estudiante adulto con descuento):**
  * Entrada: Edad = 25, Carnet = si, Día = jueves
  * Resultado esperado: Precio: 6.00 € (50% de descuento por carnet)
  * Resultado obtenido: Correcto, detecta el carnet de estudiante.

* **Caso de prueba 4 (Tarifa general):**
  * Entrada: Edad = 40, Carnet = no, Día = viernes
  * Resultado esperado: Precio: 12.00 €
  * Resultado obtenido: Correcto, aplica la tarifa estándar al no cumplir ninguna excepción.

* **Caso de prueba 5 (Mayor de 65 años - Gratis):**
  * Entrada: Edad = 70, Carnet = no, Día = martes
  * Resultado esperado: Entrada gratuita
  * Resultado obtenido: Correcto, aplica la gratuidad por superar los 65 años.