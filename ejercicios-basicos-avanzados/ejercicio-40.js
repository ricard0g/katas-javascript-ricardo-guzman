console.log("\n=== EJERCICIO 40 ===\n");

function findArrayIndex(array, text) {
    return array.map((text) => text.toLowerCase()).indexOf(text.toLowerCase());
}

function removeItem(array, text) {
    const indexToRemove = findArrayIndex(array, text);

    array.splice(indexToRemove, 1)

    return array;
}


const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
];


console.log("Lista de Personajes con uno eliminado:");
console.log(removeItem(mainCharacters, "ChewBacCa"));
console.log();
