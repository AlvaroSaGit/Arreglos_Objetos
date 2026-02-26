// Inventario de frutas: Dado el arreglo ["Manzana", "Pera", "Uva"], agregue “Banano”
// al inicio, retire el último elemento y muestre el arreglo final. Luego recórralo
// utilizando for...of.


import { agregar_banano_al_inicio, arreglo_final, retirar_ultimo_elemento , recorre_usando_for_of} from './operaciones/index.js';

let frutas = [
    "Manzana", 
    "Pera", 
    "Uva"
];



// imprimimos el inventario de frutas inicial
console.log("Inventario de frutas inicial: " + frutas);
// imprimimos el inveterio de furtas con banano agregado al inicio del arreglo
console.log("agregamnos banano al inicio del arreglo :" + agregar_banano_al_inicio(frutas));
// imprimimos el inventario de frutas con el último elemento retirado
console.log("retiramos el último elemento del arreglo :" + retirar_ultimo_elemento(frutas));
// imprimimos el arreglo final con la cantidad total de frutas registradas
console.log("arreglo final: " + arreglo_final(frutas));
// imprimimos el arreglo final recorriéndolo usando for...of
console.log("recorremos el arreglo final usando for...of:");
recorre_usando_for_of(frutas);