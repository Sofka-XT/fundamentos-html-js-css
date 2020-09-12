function determinarSabor(person) {

    console.log("- " + person.sabor);
    if (person.sabor == "Vainilla") {
        console.log("El helado que contiene el sabor Vainalla es:", person.nombre);
    } else {
        console.log("El helado que no contiene el sabor Vainilla es:", person.nombre);
    }
}


const helado1 = {
    nombre: "Helado de 3 sabores",
    sabor: "Vainilla"
};

const helado2 = {
    nombre: "Helado de 4 sabores",
    sabor: "Chocolate"
};


const listaDeHelados = [
    helado1, helado2
];

console.log("Número de helados: " + listaDeHelados.length)

listaDeHelados.forEach(function(persona) {
    determinarSabor(persona);
});