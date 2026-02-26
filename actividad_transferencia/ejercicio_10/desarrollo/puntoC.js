// c. Precios de diferentes camisetas.


export function puntoC(tipo){
    // Utilizaria lista pero indicaria mejor el precio
    // con un objeto, indicando que tipo de camisa y su precio
    const precio_camisa={
        "Normal":5000,
        "Polo":3500,
        "Deportiva":2750,
        "Premium":7000
    }
    // En minuscula lo que le ingresa
    const seleccion = tipo;
    const resultado = precio_camisa[seleccion];

    // Retornar el precio segun la clave que haya ingresado
    return resultado;
}

