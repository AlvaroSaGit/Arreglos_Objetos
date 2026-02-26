// Notas de actividades: Cree un arreglo con seis notas numéricas. Recorra el arreglo
// usando for y calcule el promedio (no use funciones externas).

import { recorrer_usando_for, calcularPromedio } from './operaciones/index.js';

// Arreglo con seis notas numéricas.

let notas = [
        4,
        5,
        3, 
        2, 
        4, 
        5
    ];

// Imprimimos las notas de actividades 
console.log("Notas de actividades: " + notas);

// recorremos el arreglo usando for
console.log("recorremos el arreglo usando for : ");
recorrer_usando_for(notas);
// calcualmos el promedio de las notas 
console.log("El promedio de las notas es: " + calcularPromedio(notas));