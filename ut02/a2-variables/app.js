const nombreReceta = "Cupcake de vainilla";
const numeroComensales = 4;
let tiempoPreparacionMinutos = 40;
const categoriaReceta = "Postre";
let valoraciones = 10;

tiempoPreparacionMinutos = 36;
valoraciones = 9.7;

const fichaTecnica = `
Diarios de recetas :)

- Nombre: ${nombreReceta}
- Categoría: ${categoriaReceta}
- Comensales: ${numeroComensales} personas
- Tiempo estimado: ${tiempoPreparacionMinutos} minutos
- Valoración media: ${valoracionUsuarios} / 5

`;
console.log(fichaTecnica);

//comprobamos
console.log("Tipo de 'nombreReceta':", typeof nombreReceta);