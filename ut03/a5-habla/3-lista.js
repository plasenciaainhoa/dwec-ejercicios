const mainContainer = document.querySelector('main');

const coleccion = "Nicolas, Alfonso, Lucia, Mercedes, Veronica";
const nombres = coleccion.split(",");

let html = "";
for (let index = 0; index < nombres.length; index++) {
    html += `<li>${nombres[index].trim()}</li>`;}

document.querySelector('main').innerHTML = html;