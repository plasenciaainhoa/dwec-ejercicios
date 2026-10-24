const main = document.querySelector('main');

//Literal
main.textContent = '<h1>Hola</h1>';

//que inperprete HTML
main.innerHTML = ' caracola';

//añade luego de lo anterior
main.insertAdjacentHTML('beforeend', ' Chao pescao');