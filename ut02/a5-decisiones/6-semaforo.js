const entradaColor = prompt("Introduce el color del semáforo (rojo, ambar, verde):");
const color = entradaColor ? entradaColor.toLowerCase().trim() : "";

switch (color) {
  case "rojo":
    console.log("Acción: Detente, el semáforo está en rojo.");
    break;
  case "ambar":
  case "ámbar":
    console.log("Acción: Precaución, el semáforo está en ámbar.");
  case "verde":
    console.log("Acción: Puedes pasar, el semáforo está en verde.");
    break;
  default:
    console.log("Color desconocido");
}