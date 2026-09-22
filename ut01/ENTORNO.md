# Configuración del Entorno de Trabajo

## 1. Sistema Operativo
* **Sistema:** Windows 11 / macOS / Ubuntu Linux *(elige el tuyo)*
* **Arquitectura:** 64 bits

## 2. Versiones de las Herramientas
* **Git:** `git --version` (Ej: git version 2.43.0)
* **Node.js:** `node -v` (Ej: v20.11.0)
* **npm:** `npm -v` (Ej: 10.2.4)
* **Visual Studio Code:** `code --version` (Ej: 1.85.1)

## 3. Extensiones instaladas en VS Code
* **Live Server** (Ritwick Dey) - Servidor local de desarrollo con recarga automática.
* **Prettier - Code formatter** - Formateador de código.
* **ESLint** - Linter para detección de errores en JavaScript.
* **Auto Rename Tag** - Renombrado automático de etiquetas HTML.

## 4. Comprobación de Live Server
A continuación se muestra la captura de pantalla de la página web de prueba ejecutándose correctamente a través de Live Server:

## 5. Problemas encontrados y soluciones
* **Problema 1:** Al intentar ejecutar comandos en la terminal de VS Code en Windows, aparecía un error de ejecución de scripts de PowerShell.
  * **Solución:** Ejecuté la terminal como Administrador y cambié la directiva mediante el comando `Set-ExecutionPolicy RemoteSigned`, o cambié el perfil por defecto de la terminal a **Command Prompt (cmd)**.
* **Problema 2:** Live Server no abría automáticamente el navegador por defecto.
  * **Solución:** Entré en los ajustes de la extensión en VS Code (*Settings > Live Server Config: Custom Browser*) y seleccioné mi navegador principal (Chrome/Firefox).