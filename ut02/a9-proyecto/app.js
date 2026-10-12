'use strict';

const receta1Nombre = "Tortilla de patatas";
const receta1Tiempo = 35;
const receta1Calorias = 250;
const receta1EsVegetariana = true;
const receta1Dificultad = "media";

const receta2Nombre = "Ensalada César";
const receta2Tiempo = 15;
const receta2Calorias = 180;
const receta2EsVegetariana = false;
const receta2Dificultad = "baja";

const receta3Nombre = "Lasaña de verduras";
const receta3Tiempo = 60;
const receta3Calorias = 400;
const receta3EsVegetariana = true;
const receta3Dificultad = "alta";

function calcularMediaCalorias() {
  const suma = receta1Calorias + receta2Calorias + receta3Calorias;
  return suma / 3;
}

function obtenerTiempoMaximo() {
  let max = receta1Tiempo;
  if (receta2Tiempo > max) {
    max = receta2Tiempo;
  }
  if (receta3Tiempo > max) {
    max = receta3Tiempo;
  }
  return max;
}

function procesarLogicaProyecto() {
  const mediaCalorias = calcularMediaCalorias();
  const tiempoMax = obtenerTiempoMaximo();

  console.log("DATOS DEL PROYECTO");
  console.log(`Plato 1: ${receta1Nombre} | Tiempo: ${receta1Tiempo} min | Calorías: ${receta1Calorias}`);
  console.log(`Plato 2: ${receta2Nombre} | Tiempo: ${receta2Tiempo} min | Calorías: ${receta2Calorias}`);
  console.log(`Plato 3: ${receta3Nombre} | Tiempo: ${receta3Tiempo} min | Calorías: ${receta3Calorias}`);
  console.log(`Media de calorías de los platos: ${mediaCalorias.toFixed(2)} kcal`);
  console.log(`El tiempo máximo de preparación es de ${tiempoMax} minutos.`);

  let clasificacionReceta1 = "";
  if (receta1Calorias < 200) {
    clasificacionReceta1 = "Calorías ligeras";
  } else if (receta1Calorias <= 350) {
    clasificacionReceta1 = "Calorías moderadas";
  } else {
    clasificacionReceta1 = "Calorías altas";
  }
  console.log(`Clasificación de ${receta1Nombre}: ${clasificacionReceta1}`);

  const aptaParaRapidoYVegano = receta2EsVegetariana && receta2Tiempo < 30;
  console.log(`¿${receta2Nombre} es apta para vegetarianos y se hace en menos de 30 min?: ${aptaParaRapidoYVegano ? "Sí" : "No"}`);

  let mensajeCategoria = "";
  switch (receta3Dificultad) {
    case "baja":
      mensajeCategoria = "Ideal para principiantes en la cocina.";
      break;
    case "media":
      mensajeCategoria = "Requiere algo de práctica previa.";
      break;
    case "alta":
      mensajeCategoria = "Nivel avanzado, requiere paciencia.";
      break;
    default:
      mensajeCategoria = "Dificultad desconocida.";
  }
  console.log(`Dificultad de ${receta3Nombre}: ${receta3Dificultad} -> ${mensajeCategoria}`);

  console.log("Cuenta atrás de preparación para " + receta1Nombre );
  let segundosRestantes = 5;
  while (segundosRestantes > 0) {
    console.log(`Quedan ${segundosRestantes} segundos para empezar...`);
    segundosRestantes--;
  }
  console.log("Terminado");

  const textoResumen = `Proyecto cargado con éxito. Se han analizado 3 recetas ("${receta1Nombre}", "${receta2Nombre}", "${receta3Nombre}"). La media de calorías es de ${mediaCalorias.toFixed(2)} kcal y el plato más lento tarda ${tiempoMax} minutos en prepararse.`;
  
  const parrafoInfo = document.getElementById("info");
  if (parrafoInfo) {
    parrafoInfo.textContent = textoResumen;
  }
}

procesarLogicaProyecto();