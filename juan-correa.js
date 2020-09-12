function razaanimal(nombre) {

    console.log("- " + nombre.edad);
    if (nombre = "pitbull") {
        console.log("La raza del perro es:", nombre.raza);
    } else {
        console.log("La raza de perro es:", nombre.raza);
    }
}

const perroA = {
    raza: "pitbull",
    edad = 15
};

const perroB = {
    nombre: "Pastor Aleman",
    edad = 8
};

const listaDePerros = [
    perroA, perroB
];

console.log("Cantidad de perros: " + listaDePerros.length)

listaDePerros.forEach(function(perro) {
    razaanimal(perro);
});