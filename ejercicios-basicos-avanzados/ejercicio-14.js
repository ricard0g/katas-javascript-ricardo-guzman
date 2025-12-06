// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

// Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...

// Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.

// Puedes usar este array para probar tu función:

const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
];

function repeatCounter(list) {
    let mensaje = "";

    list.forEach((word, index, list) => {

        // salta los duplicados
        if (list.indexOf(word) === index) {
            let repeticiones = 0;
            for (let j = 0; j < list.length; j++) {
                if (word === list[j]) {
                    repeticiones += 1;
                }
            }
            mensaje += `${word}${repeticiones} `;
        }

    })

    return mensaje;
}

console.log("\n=== EJERCICIO 14 ===\n");
console.log(repeatCounter(words));
console.log("");
