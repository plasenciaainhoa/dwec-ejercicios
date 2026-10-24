/*
*/

const tiempoTrabajo = 5;
const tiempoDescanso = 3;

let tiempofase = 'trabajo';
let restante = tiempoTrabajo;

function formatear(segundos) {
    const min = Math.floor(segundos / 60);
    const seg = segundos % 60;
    return `${String(min).padStart(2, '0')}:${String(seg).padStart(2, '0')}`;
}

function mostrar() {
    const texto = `${tiempofase}: ${formatear(restante)}`;
        document.getElementById('salida').textContent = texto;
        document.title = texto;
}

function tiempo() {
    restante--;
    if (restante === 0) {
        if(tiempofase === 'trabajo'){
            tiempofase ='descanso';
            restante = tiempoDescanso;
        } else{
            tiempofase = 'trabajo';
            restante = tiempoTrabajo
        }
    }
    mostrar();
}
mostrar();
setInterval(tiempo, 1000);