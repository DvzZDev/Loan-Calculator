const Prestamo = (totalPrestamo, interesAnual, años) => {
  const interesMenusual = interesAnual / 100 / 12;
  const cantidadPagos = años * 12;
  const factorial = Math.pow(1 + interesMenusual, cantidadPagos);
  return (cuotaMensual = (totalPrestamo * interesMenusual * factorial) / (factorial - 1));
};
const Cuota = Prestamo(70000, 2.4, 20);
console.log(`Cuota mensual de ${Cuota.toFixed(2)} €`);
