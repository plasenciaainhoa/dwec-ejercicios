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
