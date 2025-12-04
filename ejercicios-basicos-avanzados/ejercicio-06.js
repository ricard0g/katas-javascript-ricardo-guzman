// =========================================================
// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola.
console.log("\n=== EJERCICIO 6 ===\n");

console.log("Primer Bucle:");
for (let i = 0; i < 10; i++) {
    console.log(i);
}


// =========================================================
// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola solo cuando el resto del numero dividido entre 2 sea 0.

console.log("Segundo Bucle:");
for (let i = 0; i < 10; i++) {

    // Opcion 1 (como 0 en JS es un valor 'falsy' podemos):

    if (!(i % 2)) {
        console.log(i);
    }

    // Opcion 2 (la mas evidente):

    // if ((i % 2) === 0) {
    //     console.log(i);
    // }

}


// =========================================================
// 1.3 Crea un bucle para conseguir dormir contando ovejas.
// Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
// Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle
// y cambia el mensaje en la décima vuelta a '¡Dormido!'.

console.log("Tercer Bucle:");
for (let i = 1; i <= 10; i++) {
    console.log(i == 10 ? "¡Dormido!" : 'Intentando dormir 🐑');
}

console.log("")

