//Describir un objeto personal
let bolso = {
    marca: "Toto",
    color: "Gris",
    tamaño: "Mediano",
    Diseño: "Minimalista"
};

for (let [clave, valor] of Object.entries(bolso)) {
  console.log(clave + ": " + valor);
}