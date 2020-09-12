function determinarSiUnAnimalEsMayorDeEdad(animales) {

    console.log("- " + animales.nombre);
    if (animales.edad >= 18) {
        console.log("El animal es mayor de edad:", animales.edad);
    } else {
        console.log("El animal no es mayor de edad:", animales.edad);
    }
}


const Gato1 = {
    nombre: "Roberto",
    edad: 25
};

const Gato2 = {
    nombre: "Pedro",
    edad: 4
};
const Perro1 = {
    nombre: "Leonardo",
    edad: 18
};
const perro2 = {
    nombre: "Samuel",
    edad: 1
};


const listaDeAnimales = [
    Gato1, Gato2, perro1, perro2
];

console.log("Informacion de los Animales: " + listaDeAnimales.length)

listaDeAnimales.forEach(function(animales) {
    determinarSiEsMayorDeEdad(animales);
});