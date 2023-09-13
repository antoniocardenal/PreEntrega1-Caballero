// Precio por noche para cada tipo de habitación
const precioPorNocheEstandar = 750;
const precioPorNocheDeluxe = 1500;
const precioPorNocheSuite = 2000;

// Función para calcular el costo total de una reserva
function calcularCostoReserva(cantidadNoches, tipoHabitacion) {
  switch (tipoHabitacion) {
    case "estandar":
      return precioPorNocheEstandar * cantidadNoches;
    case "deluxe":
      return precioPorNocheDeluxe * cantidadNoches;
    case "suite":
      return precioPorNocheSuite * cantidadNoches;
    default:
      console.log("No encontramos la habitación que buscabas.");
      return 0;
      // Mostrar 0 para indicar una reserva inválida
  }
}

// Iniciar el costo total acumulado
let costoTotalAcumulado = 0;

// Ciclo para reservas múltiples
let continuar = true;
while (continuar) {
  // Solicitar la cantidad de noches y el tipo de habitación para cada reserva
  const cantidadNoches = parseInt(prompt("Ingrese la cantidad de noches que desea hospedarse:"));
  const tipoHabitacion = prompt("Seleccione el tipo de habitación (Estandar, Deluxe o Suite):").toLowerCase();

  // Función para calcular el total de la reserva
  const costoReserva = calcularCostoReserva(cantidadNoches, tipoHabitacion);

  // Mostrar el costo total de esta reserva
  if (costoReserva > 0) {
    console.log(`El costo total de esta reserva es de $${costoReserva}MXN`);
    costoTotalAcumulado += costoReserva; 
  }

// Preguntar al usuario si desea realizar otra reserva
const respuesta = prompt("¿Desea realizar otra reserva? (Sí/No)").toLowerCase();
if (respuesta !== "si" && respuesta !== "no") {
  console.log("Respuesta no válida. Por favor, responda con 'Sí' o 'No'.");
} else {
  continuar = respuesta === "si"; // En esta parte no encontré cómo hacerla funcionar si la respuesta es No en el prompt
}
}

// Arrojar el total de la reservación si no desean más reservas
if (costoTotalAcumulado > 0) {
    console.log(`El costo total de todas las reservas es de $${costoTotalAcumulado}`);
  } else {
    console.log("No se realizaron reservas válidas.");
  }

