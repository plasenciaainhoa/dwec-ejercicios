/*
    Cuentra trás que se muestre en la pantalla y que se cancele a llegar a 0 
    y mostrar un mensaje en la salida
*/
const tiempo = prompt('¿De cuanto tiempo quieres la cuentra atras?');
let contador = Number(tiempo);

let salida = document.getElementById('salida');

if (!salida) {
    salida = document.createElement('p');
    salida.id = 'salida';
    document.body.appendChild(salida);
}

if (!Number.isInteger(contador) ||contador <= 0) { //para englobar mas tipos de datos 
    document.getElementById('salida').textContent = 'Lo siento, el número no es válido';
} else {
    mostrar();
    const id = setInterval(listaTiempo, 1000);

    function listaTiempo()  {
            contador --;
            console.log('tiempo : ', contador)

            if (contador === 0) {
                document.getElementById('salida').textContent = 'EL TIEMPO A FINALIZADO';
                clearInterval(id);
            } 
            else {
                    monstrar();
            }
    }

    function mostrar() {
        document.getElementById('salida').textContent = contador;
    }
}