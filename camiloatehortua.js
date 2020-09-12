function determinarSiEsMayorDeEdad(animal) {

    console.log("- " + animal.nombre);
    if (animal.rasa == "perro") {
        console.log("el animal es un perro:", animal.rasa);
    } else {
        console.log("el animal es un gato:", animal.rasa);
    }
}


const animalA = {
    nombre: "Raul .A Alzate",
    rasa: "perro"
};

const animalB = {
    nombre: "Camilo Andres",
    rasa: "gato"
};


const listaDePersonas = [
    animalA, animalB
];

console.log("Cantidad de de animales: " + listaDePersonas.length)

listaDePersonas.forEach(function(animal) {
    determinarSiEsMayorDeEdad(animal);
});