# PRUEBAS - A3 Fechas e importes

## Punto 1. Edad exacta

| Entrada | Esperado | Obtenido |
|---|---|---|
| `2000-10-22` | 26 años, nació en domingo y faltan 0 días para el cumpleaños. | 26 años, domingo, 0 días. |
| `2000-10-23` | 25 años, nació en lunes y falta 1 día para el cumpleaños. | 25 años, lunes, 1 día. |
| `2026-02-30` | Debe mostrar que la fecha es incorrecta. | Fecha incorrecta. |

## Punto 2. Cuenta de días

| Fecha | Resultado esperado |
|---|---|
| 18/12/2026 | Faltan 57 días. |
| 05/02/2027 | Faltan 106 días. |

Los días se calculan tomando como fecha actual el 22/10/2026.

## Punto 3. Mismo importe, cinco países

Importe introducido: `1234.56`

| País o idioma | Moneda | Resultado aproximado |
|---|---|---|
| `es-ES` | EUR | 1234,56 € |
| `en-US` | USD | $1,234.56 |
| `de-DE` | EUR | 1.234,56 € |
| `ja-JP` | JPY | ¥1,235 |
| `en-IN` | INR | ₹1,234.56 |

## Punto 4. Tabla de precios localizada

| Precio | IGIC del 7 % | Total con IGIC |
|---:|---:|---:|
| 12,50 € | 0,88 € | 13,38 € |
| 8,00 € | 0,56 € | 8,56 € |
| 1250,00 € | 87,50 € | 1337,50 € |
| 0,99 € | 0,07 € | 1,06 € |
| 19999,00 € | 1399,93 € | 21398,93 € |

El porcentaje del IGIC se muestra como 7 %.

## Punto 5. Idioma del usuario

El programa muestra el idioma preferido del navegador, la lista de idiomas y la fecha actual en el formato correspondiente.
