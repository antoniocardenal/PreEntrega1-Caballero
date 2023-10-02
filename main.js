// Precio por noche para cada tipo de habitación
const preciosPorNoche = {
  estandar: 750,
  deluxe: 1500,
  suite: 2000
};

// Array para almacenar las reservas
const reservas = [];

// Función para calcular el costo total de una reserva
function calcularCostoReserva(cantidadNoches, tipoHabitacion) {
  if (tipoHabitacion in preciosPorNoche) {
    return preciosPorNoche[tipoHabitacion] * cantidadNoches;
  } else {
    console.log("No encontramos la habitación que buscabas.");
    return 0;
  }
}

// Ciclo para realizar reservas múltiples
let continuar = true;
while (continuar) {
  
  // Solicitar la cantidad de noches y el tipo de habitación para cada reserva
  const cantidadNoches = parseInt(prompt("Ingrese la cantidad de noches que desea hospedarse:"));
  const tipoHabitacion = prompt("Seleccione el tipo de habitación (Estandar, Deluxe o Suite):").toLowerCase();

  // Calcular el costo total de la reserva
  const costoReserva = calcularCostoReserva(cantidadNoches, tipoHabitacion);

  // Mostrar el costo total de esta reserva o un mensaje de error
  if (costoReserva > 0) {
    console.log(`El costo total de esta reserva es de $${costoReserva}MXN`);
    
    // Agregar la reserva al array de reservas
    reservas.push({ cantidadNoches, tipoHabitacion });
  } else {
    console.log("Reserva no válida. Por favor, inténtelo de nuevo.");
  }

  // Preguntar al usuario si desea realizar otra reserva
  const respuesta = prompt("¿Desea realizar otra reserva? (Sí/No)").toLowerCase();
  if (respuesta !== "si" && respuesta !== "no") {
    console.log("Respuesta no válida. Por favor, responda con 'Sí' o 'No'.");
  } else {
    continuar = respuesta === "si";
  }
}

// Mostrar todas las reservas realizadas
if (reservas.length > 0) {
  console.log("Reservas realizadas:");
  for (let i = 0; i < reservas.length; i++) {
    const reserva = reservas[i];
    console.log(`Reserva ${i + 1} - ${reserva.cantidadNoches} noches en ${reserva.tipoHabitacion.charAt(0).toUpperCase() + reserva.tipoHabitacion.slice(1)}`);
  }
} else {
  console.log("No se realizaron reservas válidas.");
}

// Calcular y mostrar el costo total de todas las reservas
const costoTotalAcumulado = reservas.reduce((total, reserva) => total + calcularCostoReserva(reserva.cantidadNoches, reserva.tipoHabitacion), 0);

if (costoTotalAcumulado > 0) {
  console.log(`El costo total de todas las reservas es de $${costoTotalAcumulado}MXN`);
} else {
  console.log("No se realizaron reservas válidas.");
}
