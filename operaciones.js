// Importar el módulo 'fs' para operaciones de sistema de archivos
const fs = require("fs");

// Constante con el nombre del archivo de citas
const citasFile = "citas.json";

//------------------------------------------------
// Define una función para registrar una nueva cita
function registrar(nombre, edad, tipo, color, enfermedad) {
  // Constante con el contenido del archivo de citas, convertido a JSON
  const citas = JSON.parse(fs.readFileSync(citasFile, "utf-8"));

  // Crear una constante con los datos de la cita
  const nuevaCita = {
    nombre,
    edad,
    tipo,
    color,
    enfermedad,
  };

  // Agregar la nueva cita al arreglo de citas existentes
  citas.push(nuevaCita);

  // Escribir el arreglo actualizado de citas en el archivo, convirtiéndolo a JSON
  fs.writeFileSync(citasFile, JSON.stringify(citas, null, 2));

  // Mensaje de éxito en la consola
  console.log("------------------------------");
  console.log("Cita registrada correctamente.");
  console.log("------------------------------");
}

//------------------------------------------------------
// Define una función para leer y mostrar todas las citas
function leer() {
  // Leer las citas desde el archivo y convertirlas a JSON
  const citas = JSON.parse(fs.readFileSync(citasFile, "utf-8"));

  // Si no hay citas, mostrar un mensaje en la consola
  if (citas.length === 0) {
    console.log("No hay citas registradas.");
  } else {
    // De lo contrario, mostrar cada cita en la consola, en formato de lista
    console.log("------------------");
    console.log("Citas registradas:");
    console.log("------------------");
    citas.forEach((cita, index) => {
      console.log(`Cita ${index + 1}:`);
      console.log(`Nombre: ${cita.nombre}`);
      console.log(`Edad: ${cita.edad}`);
      console.log(`Tipo: ${cita.tipo}`);
      console.log(`Color: ${cita.color}`);
      console.log(`Enfermedad: ${cita.enfermedad}`);
      console.log("------------------");
    });
  }
}

// Exporta las funciones 'registrar' y 'leer' para que puedan ser usadas en otros archivos
module.exports = { registrar, leer };
