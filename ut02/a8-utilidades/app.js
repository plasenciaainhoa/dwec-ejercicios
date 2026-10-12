'use strict';

function iniciarConsola() {
  let opcion = "";

  do {
    opcion = prompt(
      "CONSOLA DE UTILIDADES\n\n" +
      "1. Conversor de unidades\n" +
      "2. Calculadora de IMC\n" +
      "3. Precio con IGIC\n" +
      "4. Calificación de notas\n" +
      "5. Tabla de multiplicar\n" +
      "6. Estadísticas de números\n" +
      "7. Adivina el número\n" +
      "0. Salir\n\n" +
      "Elige una opción:"
    );

    const seleccion = opcion ?? "0";

    switch (seleccion.trim()) {
      case "1":
        conversorUnidades();
        break;
      case "2":
        calculadoraIMC();
        break;
      case "3":
        precioIGIC();
        break;
      case "4":
        calificacionNota();
        break;
      case "5":
        generadorSeries();
        break;
      case "6":
        estadisticasNumeros();
        break;
      case "7":
        adivinaNumero();
        break;
      case "0":
        console.log("¡Venga, hasta luego! Saliendo del programa.");
        break;
      default:
        console.error("Esa opción no existe, prueba con un número del 0 al 7.");
    }
  } while (opcion !== null && opcion.trim() !== "0");
}

function conversorUnidades() {
  const tipo = prompt("¿Qué quieres convertir?\n1. Kilómetros a millas\n2. Grados C a F\n3. Segundos a minutos");
  const valorNum = Number(prompt("Introduce la cantidad:"));

  if (Number.isNaN(valorNum)) {
    console.error("Ey, eso no es un número válido.");
    return;
  }

  let res = 0;
  switch (tipo?.trim()) {
    case "1":
      res = valorNum * 0.621371;
      console.log(valorNum + " km son " + res.toFixed(2) + " millas.");
      break;
    case "2":
      res = (valorNum * 9 / 5) + 32;
      console.log(valorNum + " ºC son " + res.toFixed(2) + " ºF.");
      break;
    case "3":
      res = valorNum / 60;
      console.log(valorNum + " segundos son " + res.toFixed(2) + " minutos.");
      break;
    default:
      console.error("Opción de conversión incorrecta.");
  }
}

function calculadoraIMC() {
  const peso = Number(prompt("¿Cuánto pesas en kg?"));
  const altura = Number(prompt("¿Cuánto mides en metros? (ej: 1.75)"));

  if (Number.isNaN(peso) || Number.isNaN(altura) || peso <= 0 || altura <= 0) {
    console.error("Datos incorrectos, revisa el peso y la altura.");
    return;
  }

  const imc = peso / (altura * altura);
  let estado = "";

  if (imc < 18.5) {
    estado = "Bajo peso";
  } else if (imc < 25) {
    estado = "Peso normal";
  } else if (imc < 30) {
    estado = "Sobrepeso";
  } else {
    estado = "Obesidad";
  }

  const mensajeSalida = imc ? "Tu IMC es " + imc.toFixed(2) + " (" + estado + ")" : "Error en el cálculo";
  console.log(mensajeSalida);
}

function precioIGIC() {
  const precioBase = Number(prompt("Introduce el precio base:"));
  const porcentaje = Number(prompt("Introduce el porcentaje de IGIC (ej: 7):"));

  if (Number.isNaN(precioBase) || Number.isNaN(porcentaje) || precioBase < 0 || porcentaje < 0) {
    console.error("Introduce números positivos por favor.");
    return;
  }

  const total = precioBase + (precioBase * (porcentaje / 100));
  console.log("Precio base: " + precioBase + " € | Total con IGIC: " + total.toFixed(2) + " €");
}

function calificacionNota() {
  const nota = Number(prompt("Introduce tu nota (0 a 10):"));

  if (Number.isNaN(nota) || nota < 0 || nota > 10) {
    console.error("La nota tiene que estar entre 0 y 10.");
    return;
  }

  let textoNota = "";
  if (nota < 5) {
    textoNota = "Insuficiente";
  } else if (nota < 6) {
    textoNota = "Suficiente";
  } else if (nota < 7) {
    textoNota = "Bien";
  } else if (nota < 9) {
    textoNota = "Notable";
  } else {
    textoNota = "Sobresaliente";
  }

  console.log("Tu calificación es: " + textoNota);
}

function generadorSeries() {
  const base = Number(prompt("¿De qué número quieres la tabla?"));

  if (Number.isNaN(base)) {
    console.error("Eso no es un número válido.");
    return;
  }

  console.log("--- Tabla del " + base + " ---");
  for (let i = 1; i <= 10; i++) {
    console.log(base + " x " + i + " = " + (base * i));
  }
}

function estadisticasNumeros() {
  const lista = [];
  let entrada = "";

  console.log("Ve metiendo números. Escribe 0 para acabar.");
  while (true) {
    entrada = prompt("Número (0 para salir):");
    if (entrada === null) break;

    const num = Number(entrada);
    if (Number.isNaN(num)) {
      console.error("Valor no válido, prueba otra vez.");
      continue;
    }
    if (num === 0) break;

    lista.push(num);
  }

  if (lista.length === 0) {
    console.log("No has metido ningún número.");
    return;
  }

  let sumaTotal = 0;
  for (const n of lista) {
    sumaTotal += n;
  }
  const media = sumaTotal / lista.length;

  console.log("Total números: " + lista.length + " | Suma: " + sumaTotal + " | Media: " + media.toFixed(2));
}

function adivinaNumero() {
  const secreto = Math.floor(Math.random() * 10) + 1;
  let intentos = 0;
  let ganado = false;

  console.log("¡Adivina el número secreto entre 1 y 10!");
  while (!ganado) {
    const intentoStr = prompt("Tu apuesta (1-10):");
    if (intentoStr === null) break;

    const intento = Number(intentoStr);
    intentos++;

    if (intento === secreto) {
      ganado = true;
      console.log("¡Ole! Has acertado en " + intentos + " intentos.");
    } else {
      console.log(intento < secreto ? "El número secreto es más alto." : "El número secreto es más bajo.");
    }
  }
}

iniciarConsola();