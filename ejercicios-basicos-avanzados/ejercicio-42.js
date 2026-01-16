const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
];


console.log("\n=== EJERCICIO 42 ===\n");

function swap(array, i1, i2) {
    console.log("Array antes de los cambios:");
    console.log(array);

    const elm1 = array.splice(i1, 1, array[i2])[0];

    array.splice(i2, 1, elm1);

    console.log("\n--> Array despues de los cambios:");
    console.log(array);

    return array
}

swap(fantasticFour, 0, 3)
console.log()
