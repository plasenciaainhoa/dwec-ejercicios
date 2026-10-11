const brutoAnual = Number(prompt("Introduce el salario bruto anual : "));
const numPagas = Number(prompt("Introduce el número de pagas (12 o 24) : "));

const brutoMensual = brutoAnual / numPagas;
const irpMensual = brutoMensual * 0.15;
const seguridadSocialMensual = brutoMensual * 0.0647;
const netoMensual = brutoMensual - irpfMensual - seguridadSocialMensual;

const nominaData = [
  {
    Concepto: "Salario Bruto Mensual",
    Euros: Number(brutoMensual.toFixed(2))
  },
  {
    Concepto: "Retención IRPF (15%)",
    Euros: Number(irpfMensual.toFixed(2))
  },
  {
    Concepto: "Seguridad Social (6.47%)",
    Euros: Number(seguridadSocialMensual.toFixed(2))
  },
  {
    Concepto: "Salario Neto Mensual",
    Euros: Number(netoMensual.toFixed(2))
  }
];

console.log(`Nómina (${numPagas} pagas para ${brutoAnual} € anuales)`);
console.table(nominaData);