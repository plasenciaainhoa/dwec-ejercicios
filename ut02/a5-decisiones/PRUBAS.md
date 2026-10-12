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