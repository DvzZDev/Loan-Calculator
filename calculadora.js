// Obtener referencias a los elementos del DOM
let btn = document.getElementById("btn");
let range1 = document.getElementById("range1");
let range2 = document.getElementById("range2");
let range3 = document.getElementById("range3");
let totalPrestamoElement = document.getElementById("cantidad");
let intMensualElement = document.getElementById("interes");
let mensualidadElement = document.getElementById("mensualidad");
let totalElement = document.getElementById("total");

// Manejadores de eventos para los inputs
range1.oninput = function () {
  // Formatear el valor del primer rango y mostrarlo en el campo correspondiente
  let valorFormateado = new Intl.NumberFormat("es-ES").format(this.value);
  totalPrestamoElement.value = valorFormateado;
};

range2.oninput = function () {
  // Actualizar el valor de las mensualidades con el valor del segundo rango
  mensualidadElement.value = this.value;
};

range3.oninput = function () {
  // Actualizar el valor del interés mensual con el valor del tercer rango
  intMensualElement.value = this.value;
};

// Manejador de eventos para el botón
btn.addEventListener("click", () => {
  // Obtener y limpiar los valores de los inputs
  let totalPrestamo = parseInt(totalPrestamoElement.value.replace(/\./g, ""));
  let intMensual = parseFloat(intMensualElement.value);
  let mensualidad = parseInt(mensualidadElement.value);

  // Función para calcular el préstamo
  const Prestamo = (totalPrestamo, intMensual, mensualidad) => {
    const interesMensual = intMensual / 100 / 12;
    const meses = mensualidad;
    const factorial = Math.pow(1 + interesMensual, meses);
    return (totalPrestamo * interesMensual * factorial) / (factorial - 1);
  };

  // Calcular y mostrar el total del préstamo
  totalElement.innerHTML = `${Prestamo(totalPrestamo, intMensual, mensualidad).toFixed(2)}€`;

  document.getElementById("container-mensualidad").classList.add("expand");
  totalElement.classList.remove("hiden");

  totalElement.classList.add("number");
});
