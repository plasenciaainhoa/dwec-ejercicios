# INFORME · A7 · Caza de errores

## Registro de errores corregidos

* **1. programa1.js:**
  * **Error detectado:** Fallaba al leer la entrada del usuario porque faltaba cerrar bien el prompt y no convertía el valor a número.
  * **Tipo:** Sintaxis / Ejecución.
  * **Cómo lo encontré:** Mirando el aviso que soltaba la consola al arrancar con Live Server.
  * **Corrección:** Arreglar la sintaxis del prompt y usar `Number()` para parsear el input adecuadamente.

* **2. programa2.js:**
  * **Error detectado:** Se quedaba la página congelada en un bucle infinito que no terminaba nunca.
  * **Tipo:** Lógico.
  * **Cómo lo encontré:** Al ver que el navegador se bloqueaba y usar el depurador.
  * **Corrección:** Añadir el incremento `contador++` dentro del bucle para que la condición de parada pueda cumplirse.

* **3. programa3.js:**
  * **Error detectado:** El cálculo del descuento salía raro o concatenaba mal las variables como si fueran texto.
  * **Tipo:** Ejecución / Lógico.
  * **Cómo lo encontré:** Probando el programa con números y viendo que el resultado no cuadraba.
  * **Corrección:** Envolver la entrada en `Number()` y ordenar bien la operación matemática con el porcentaje.

* **4. programa4.js:**
  * **Error detectado:** Te trataba como menor de edad aunque tuvieras 20 años porque la condición del `if` estaba al revés.
  * **Tipo:** Lógico.
  * **Cómo lo encontré:** Poniendo un punto de ruptura y mirando el panel *Scope* en el depurador.
  * **Corrección:** Cambiar el operador de comparación para que evalúe correctamente la mayoría de edad.

* **5. programa5.js:**
  * **Error detectado:** Tenía un `=` simple dentro del `if` en vez de comparar con tres iguales (`===`), lo que rompía la condición.
  * **Tipo:** Lógico / Sintaxis.
  * **Cómo lo encontré:** Pasando el comando `npx eslint .` por la terminal.
  * **Corrección:** Sustituir el operador de asignación por el de comparación estricta.
