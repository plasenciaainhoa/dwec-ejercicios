# PRUEBAS - A2 Cadenas y números

## Punto 1. Nombre normalizado

| Entrada | Esperado | Obtenido |
|---|---|---|
| ` Ainhoa P P ` |  A. P. P.; 3 palabras | Aihoa P P ; A. P. P.; 3 palabras |

## Punto 2. Slug y nombre de fichero

| Entrada | Esperado | Obtenido |
|---|---|---|
| `Nose` | `Nose` | `2026-10-22-nose.md` |

El nombre del fichero debe empezar por la fecha actual y terminar en `.md`.

## Punto 3. Censura

| Entrada | Esperado | Obtenido |
|---|---|---|
| Frase: `Hola JavaScript`; palabra: `javascript` | `Hola **********` | `Hola **********` |

Las pruebas han dado los resultados esperados.