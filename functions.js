function determinarSiEsMayorDeEdad(person) {

    console.log("- " + person.nombre);
    if (person.edad >= 18) {
        console.log("La persona es mayor de edad:", person.edad);
    } else {
        console.log("La persona no es mayor de edad:", person.edad);
    }
}


const personA = {
    nombre: "Raul .A Alzate",
    edad: 30
};

const personB = {
    nombre: "Camilo Andres",
    edad: 16
};


const listaDePersonas = [
    personA, personB
];

console.log("Cantidad de personas: " + listaDePersonas.length)

listaDePersonas.forEach(function(persona) {
    determinarSiEsMayorDeEdad(persona);
});