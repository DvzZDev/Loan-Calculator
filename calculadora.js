let btn = document.getElementById("btn");
let range1 = document.getElementById("range1");
let range2 = document.getElementById("range2");
let range3 = document.getElementById("range3");
let totalPrestamoElement = document.getElementById("cantidad");
let intMensualElement = document.getElementById("interes");
let mensualidadElement = document.getElementById("mensualidad");
let totalElement = document.getElementById("total");
let años = document.getElementById("años");

const conversorAños = () => {
  let totalMeses = parseFloat(mensualidadElement.value);
  let años = Math.floor(totalMeses / 12);
  let meses = Math.round(totalMeses % 12);
  return `${años} años y ${meses} meses`;
};

range1.oninput = function () {
  let valorFormateado = new Intl.NumberFormat("es-ES").format(this.value);
  totalPrestamoElement.value = valorFormateado;
};

totalPrestamoElement.oninput = function () {
  let valorSinFormato = this.value.replace(/\./g, "");
  if (Number(valorSinFormato) > Number(range1.max)) {
    range1.value = range1.max;
  } else {
    range1.value = valorSinFormato;
  }
  let valorFormateado = new Intl.NumberFormat("es-ES").format(valorSinFormato);
  this.value = valorFormateado;
};

mensualidadElement.oninput = function () {
  range2.value = this.value;
  años.innerHTML = conversorAños();
};

range2.oninput = function () {
  mensualidadElement.value = this.value;
  años.innerHTML = conversorAños(mensualidadElement.value);
};

intMensualElement.oninput = function () {
  let valorSinComas = this.value.replace(/,/g, ".");
  range3.value = valorSinComas;
};

range3.oninput = function () {
  intMensualElement.value = this.value;
};

btn.addEventListener("click", () => {
  let totalPrestamo = parseInt(totalPrestamoElement.value.replace(/\./g, ""));
  let intMensual = parseFloat(intMensualElement.value.replace(/,/g, "."));
  let mensualidad = parseInt(mensualidadElement.value);

  const Prestamo = (totalPrestamo, intMensual, mensualidad) => {
    const interesMensual = intMensual / 100 / 12;
    const meses = mensualidad;
    const factorial = Math.pow(1 + interesMensual, meses);
    return (totalPrestamo * interesMensual * factorial) / (factorial - 1);
  };

  totalElement.innerHTML = `${Prestamo(totalPrestamo, intMensual, mensualidad).toFixed(2)}€`;

  document.getElementById("container-mensualidad").classList.add("expand");
  totalElement.classList.remove("hiden");

  totalElement.classList.add("number");
});