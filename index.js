const { registrar, leer } = require("./operaciones");
const fs = require("fs");

const citasFile = "citas.json";

// Obtener la operación y argumentos desde la línea de comandos
const [, , operacion, ...args] = process.argv;

// Validar la operación, error si faltan argumentos o operaciones invalidas, y ejecutar la función
if (operacion === "registrar") {
  if (args.length === 5) {
    registrar(...args);
  } else {
    console.log(
      "Error: Debes ingresar todos los campos para registrar una cita."
    );
  }
} else if (operacion === "leer") {
  leer();
} else {
  console.log(
    'Error: Operación no válida. Las operaciones válidas son "registrar" y "leer".'
  );
}
