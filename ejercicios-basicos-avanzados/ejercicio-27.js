const cartoons = [
    { name: 'Bugs Bunny', debut: 1938 },
    { name: 'SpongeBob SquarePants', debut: 1999 },
    { name: 'Tom and Jerry', debut: 1940 },
    { name: 'Mickey Mouse', debut: 1928 },
    { name: 'Scooby-Doo', debut: 1969 },
    { name: 'The Flintstones', debut: 1960 },
    { name: 'Batman: The Animated Series', debut: 1992 },
    { name: 'The Simpsons', debut: 1989 },
    { name: 'Pokémon', debut: 1997 },
    { name: "Dexter's Laboratory", debut: 1996 }
];

// OPCION 1
//
// let indiceMasAntiguo = 0;
//
// for (let i = 0; i < cartoons.length; i++) {
//     if (cartoons[i].debut < cartoons[indiceMasAntiguo].debut) {
//         indiceMasAntiguo = i;
//     }
// }

// OPCION 2

const oldestCartoon = cartoons.reduce((olderCartoon, currentCartoon) => {
    return olderCartoon.debut < currentCartoon.debut ? olderCartoon : currentCartoon
}, cartoons[0]);

console.log("\n=== EJERCICIO 27 ===\n");

console.log("La serie de dibujos animados mas antigua es --> ", oldestCartoon.name);

console.log()


