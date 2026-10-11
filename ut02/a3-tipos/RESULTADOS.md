## 1. Expresiones y clasificaciones

- **'5' + 3** -> `"53"` (Inesperable - El operador `+` prioriza concatenar)
- **'5' - 3** -> `2` (Inesperable - El operador `-` convierte el string a número)
- **'5' * '2'** -> `10` (Inesperable - La multiplicación convierte ambos a número)
- **1 + 2 + '3'** -> `"33"` (Inesperable - Suma 1+2 y concatena el texto de la derecha)
- **'1' + 2 + 3** -> `"123"` (Inesperable - Como empieza con texto, concatena todo)
- **true + true** -> `2` (Inesperable - `true` vale 1 numéricamente en operaciones)
- **'hola' * 2** -> `NaN` (Esperable - No se puede multiplicar una palabra)
- **null + 1** -> `1` (Ineserable - `null` se interpreta como 0 al operar)
- **undefined + 1** -> `NaN` (Esperable - `undefined` da `NaN` al intentar operarlo)
- **0.1 + 0.2 === 0.3** -> `false` (Inesperable - Fallo clásico de precisión decimal en JS)
- **10 / 0** -> `Infinity` (Esperable - Dividir por cero da infinito en vez de error)
- **'10' < '9'** -> `true` (Inesperable - Compara caracteres por orden alfabético/ASCII)
- **10 < '9'** -> `false` (Esperable - Al haber un número, pasa el `'9'` a número y compara)
- **5 == '5'** -> `true` (Esperable - `==` hace conversión débil automática)
- **5 === '5'** -> `false` (Esperable - `===` es estricto y los tipos son distintos)
- **0 == ''** -> `true` (Inesperable - El string vacío equivale a 0 con igualdad débil)
- **'' == '0'** -> `false` (Inesperable - Compara ambos textos directamente y no son iguales)
- **null == undefined** -> `true` (Esperable - Regla especial de JS, se consideran iguales)
- **null === undefined** -> `false` (Esperable - Sus tipos son distintos)
- **NaN === NaN** -> `false` (Inesperable - `NaN` nunca es igual a sí mismo)
- **Boolean('false')** -> `true` (Inesperable - Cualquier string con contenido es truthy)
- **Boolean(0)** -> `false` (Esperable - El 0 es falsy)
- **Boolean('0')** -> `true` (Inesperable - Al tener un carácter, da truthy)
- **Boolean([])** -> `true` (Esperable - Los arrays vacíos son truthy en JS)
- **Number('')** -> `0` (Inesperable - Un string vacío pasado a Number da 0)
- **Number(' 12 ')** -> `12` (Esperable - Ignora los espacios de los lados)
- **Number('12px')** -> `NaN` (Esperable - Falla al tener letras mezcladas)
- **parseInt('12px')** -> `12` (Esperable - Lee desde la izquierda y extrae el número)
- **parseInt('3.9')** -> `3` (Esperable - Trunca los decimales y se queda con la parte entera)
- **parseFloat('3.9')** -> `3.9` (Esperable - Este sí respeta y devuelve los decimales)

## Punto 2: Conversiones de tipos específicos
- **' ' (un espacio):** 
  - Boolean() -> `true` 
  - Number() -> `0` 
  - String() -> `" "`

  - **[] (array vacío):** 
  - Boolean() -> `true` 
  - Number() -> `0` 
  - String() -> `""`

  - **'12.5':** 
  - Boolean() -> `true` 
  - Number() -> `12.5` 
  - String() -> `"12.5"`

  - **-0:** 
  - Boolean() -> `false` 
  - Number() -> `-0` 
  - String() -> `"0"`

  - **[7] (array con un elemento):** 
  - Boolean() -> `true` 
  - Number() -> `7` 
  - String() -> `"7"`