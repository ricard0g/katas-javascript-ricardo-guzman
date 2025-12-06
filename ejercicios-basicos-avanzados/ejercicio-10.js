// Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.

// Puedes usar este array para probarla:

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
    const totalSum = numberList.reduce((numeroPrevio, numeroActual) => numeroPrevio + numeroActual, 0);

    return totalSum / numberList.length;
}

console.log("\n=== EJERCICIO 10 ===\n");
console.log(average(numbers));
console.log("")
