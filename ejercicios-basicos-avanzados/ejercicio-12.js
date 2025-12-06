// Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.

// Pista: puedes generar un nuevo array y devolverlo.

// Puedes usar este array para probar tu función:

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];

function removeDuplicates(list) {
    const nonDuplicateArray = list.filter((word, index) => list.indexOf(word) === index); // indexOf() retorna el indice del primer elemento que es igual al que le pasamos, por lo tanto, si este indice no coincide con el indice de la palabra actual es que hay duplicaciones

    return nonDuplicateArray;
}

console.log("\n=== EJERCICIO 12 ===\n");
console.log(removeDuplicates(duplicates));
console.log("");
