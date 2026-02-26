//Lista de asistencia: Cree un arreglo con los nombres de cinco aprendices. Agregue
// un nuevo nombre al final y elimine el primero. Finalmente, muestre la cantidad total
// de nombres registrados.

import { cantidad_total_registrado, eliminar_nombre_primero, nuevo_nombre_al_final } from './operaciones/index.js';

// Creamos un arreglo llamado ADSO con los nombres de cinco aprendices.
let ADSO = [
    "Ana", 
    "Carlos",
    "Luis", 
    "Maria", 
    "Pedro"
];



// imprimimos la lista de asistencia inicial de los aprendices
console.log("Lista de asistencia inicial de los aprendices: " + ADSO);
// imprimimos la lista de asistencia después de agregar un nuevo nombre al final
console.log("nuevo nombre al final : " + nuevo_nombre_al_final(ADSO));
// imprimimos la lista de asistencia después de eliminar el primer nombre
console.log("eliminar el primer nombre: " + eliminar_nombre_primero(ADSO));
// imprimimos la cantidad total de nombres registrados en la lista de asistencia
console.log("Cantidad total de nombres registrados: " + cantidad_total_registrado(ADSO));
