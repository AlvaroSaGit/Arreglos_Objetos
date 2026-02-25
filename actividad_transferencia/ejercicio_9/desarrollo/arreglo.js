export function trabajo(){
    // arreglo de objetos
    const producto =[
        { nombre: "Monitor 24", precio: 5000, disponibilidad: true},
        { nombre: "Teclado", precio:12000, disponibilidad: false},
        { nombre: "Mouse Gamer", precio:8500, disponibilidad: true}
    ]
    console.log("---- Lista Productos ----");
    // Recorrer el arreglo para mostrar solo los nombres
    for (const productos of producto){
        console.log("Producto: "+productos.nombre);
    }
}