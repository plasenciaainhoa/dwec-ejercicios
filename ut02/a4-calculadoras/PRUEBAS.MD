## 1. Conversor de unidades (1-conversor.js)

* **Caso de prueba 1:**
  * Entrada: 5 km y 25 °C
  * Resultado esperado: 5000 m, 3.11 mi, 2.70 NM / 77.00 °F, 298.15 K
  * Resultado obtenido: Correcto, coincide exactamente con el cálculo esperado.

* **Caso de prueba 2:**
  * Entrada: 1 km y 0 °C
  * Resultado esperado: 1000 m, 0.62 mi, 0.54 NM / 32.00 °F, 273.15 K
  * Resultado obtenido: Correcto, coincide exactamente con el cálculo esperado.

* **Caso de prueba 3:**
  * Entrada: 10.5 km y -10 °C
  * Resultado esperado: 10500 m, 6.52 mi, 5.67 NM / 14.00 °F, 263.15 K
  * Resultado obtenido: Correcto, coincide exactamente con el cálculo esperado.

## 2. Conversor de tiempo (2-tiempo.js)

* **Caso de prueba 1:**
  * Entrada: 3665 segundos
  * Resultado esperado: 01:01:05
  * Resultado obtenido: Correcto, coincide exactamente con el cálculo esperado.

* **Caso de prueba 2:**
  * Entrada: 90 segundos
  * Resultado esperado: 00:01:30
  * Resultado obtenido: Correcto, coincide exactamente con el cálculo esperado.

* **Caso de prueba 3:**
  * Entrada: 7384 segundos
  * Resultado esperado: 02:03:04
  * Resultado obtenido: Correcto, coincide exactamente con el cálculo esperado.

  ## 3. Cálculo de IMC (3-imc.js)

* **Caso de prueba 1:**
  * Entrada: Peso = 70 kg, Altura = 175 cm
  * Resultado esperado: IMC = 22.9
  * Resultado obtenido: Correcto, coincide exactamente con el cálculo esperado.

* **Caso de prueba 2:**
  * Entrada: Peso = 85 kg, Altura = 180 cm
  * Resultado esperado: IMC = 26.2
  * Resultado obtenido: Correcto, coincide exactamente con el cálculo esperado.

* **Caso de prueba 3:**
  * Entrada: Peso = 55 kg, Altura = 160 cm
  * Resultado esperado: IMC = 21.5
  * Resultado obtenido: Correcto, coincide exactamente con el cálculo esperado.

  ## 4. Nómina simplificada (4-nomina.js)

* **Caso de prueba 1:**
  * Entrada: Bruto anual = 24000 €, Pagas = 14
  * Resultado esperado: Bruto mensual = 1714.29 €, IRPF (15%) = 257.14 €, SS (6.47%) = 110.92 €, Neto mensual = 1346.23 €
  * Resultado obtenido: Correcto, mostrado correctamente en formato de tabla por consola.

* **Caso de prueba 2:**
  * Entrada: Bruto anual = 30000 €, Pagas = 12
  * Resultado esperado: Bruto mensual = 2500.00 €, IRPF (15%) = 375.00 €, SS (6.47%) = 161.75 €, Neto mensual = 1963.25 €
  * Resultado obtenido: Correcto, mostrado correctamente en formato de tabla por consola.

* **Caso de prueba 3:**
  * Entrada: Bruto anual = 18000 €, Pagas = 14
  * Resultado esperado: Bruto mensual = 1285.71 €, IRPF (15%) = 192.86 €, SS (6.47%) = 83.19 €, Neto mensual = 1009.66 €
  * Resultado obtenido: Correcto, mostrado correctamente en formato de tabla por consola.