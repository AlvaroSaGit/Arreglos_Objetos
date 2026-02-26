
export default function eliminar_nombre_primero(ADSO) {
    ADSO.shift(); // .shift() es un metodo que elimina el primer elemento de un arreglo y devuelve ese elemento.
    return ADSO; // Devuelve el arreglo modificado sin el primer elemento.
}