import {puntoA} from "./desarrollo/index.js";
import {puntoB} from "./desarrollo/index.js";
import {puntoC} from "./desarrollo/index.js";
import {puntoD} from "./desarrollo/index.js";

let camisa="Normal";
// Ejecutar el punto A
puntoA();
// Ejecutar el punto B
puntoB();
// Ejecutar el punto C
console.log("Camisa: "+camisa+" "+(puntoC(camisa)));
// Ejecutar el punto D
console.log(puntoD("Lenovo", "Intel Core i5", 8));
