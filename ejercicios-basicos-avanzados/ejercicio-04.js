//Dado el siguiente array:

const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

console.log("\n=== EJERCICIO 4 ===");

// =========================================================
//4.1 - Saca a "Tendo" por consola atacando su posición.

console.log("\nSacando a 'Tendo' --> " + aldeanos[3]);

// =========================================================
//4.2 - Coloca en el último lugar de este array a "Cervasio".

aldeanos.push("Cervasio");


// =========================================================
//4.3 - Cambia el primer elemento de este array por "Bambina".

// Opcion 1:

aldeanos[0] = "Bambina";

// Opcion 2 (mas enrevesada a lo mejor):

// aldeanos.splice(0, 1, "Bambina");


// =========================================================
//4.4 - Dale la vuelta a este array.

console.log("Aldeanos NO Reversos -----> " + aldeanos)

aldeanos.reverse();

console.log("Aldeanos Reversos -----> " + aldeanos)


// =========================================================
//4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.

// Opcion 1:

const indexNarciso = aldeanos.indexOf("Narciso");

aldeanos.splice(indexNarciso, 1, "Canela");

// Opcion 2 (todo en una linea para cumplir con lo de "un metodo de array" unicamente, no me gusta porque creo que es menos claro y creo que menos mantenible, pero alli va):

// aldeanos.splice(aldeanos.indexOf("Narciso"), 1, "Canela");

console.log(`Aldeanos con 'Narciso' cambiado por 'Canela' --> ${aldeanos}`);



// =========================================================
//4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente
// Pista: puedes usar el método length con algo más para ello.

console.log(`Ultimo elemento del array Aldeanos --> ${aldeanos[aldeanos.length - 1]}\n`);



