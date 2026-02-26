
export default function calcularPromedio(notas) {

    // calular la suma de las 4 notas 
    let suma = notas[0]+ notas[1]+ notas[2] + notas[3] + notas[4] + notas[5]; 

    let promedio = suma / notas.length; // Calcula el promedio dividiendo la suma total de las notas entre la cantidad de notas.
    return promedio // Devuelve el promedio calculado.
}

    