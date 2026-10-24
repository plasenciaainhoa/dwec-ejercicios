'use strict';
console.log("¡El script está conectado y funcionando!");

const receta1Nombre = "Lasaña de verduras";
const receta1Tiempo = 60;
const receta1Calorias = 400;
const receta1EsVegetariana = true;
const receta1Dificultad = "alta";

const fechaActualizacion = new Date();

//reformatear 
const formateadorNumero = new Intl.NumberFormat('es-ES');
const formateadorFecha = new Intl.DateTimeFormat('es-ES', { 
    dateStyle: 'long' 
});

const mainContainer = document.getElementById('caja-tarjetas');

if (mainContainer) {
    const tarjetaHTML = `
        <article>
            <h2>${receta1Nombre}</h2>
            <dl>
                <dt>Tiempo de preparación:</dt>
                <dd>${formateadorNumero.format(receta1Tiempo)} minutos</dd>

                <dt>Calorías:</dt>
                <dd>${formateadorNumero.format(receta1Calorias)} kcal</dd>

                <dt>¿Es vegetariana?:</dt>
                <dd>${receta1EsVegetariana ? "Sí" : "No"}</dd>

                <dt>Dificultad:</dt>
                <dd>${receta1Dificultad.charAt(0).toUpperCase() + receta1Dificultad.slice(1)}</dd>

                <dt>Última revisión:</dt>
                <dd>${formateadorFecha.format(fechaActualizacion)}</dd>
            </dl>
        </article>
    `;
    mainContainer.innerHTML = tarjetaHTML;
}