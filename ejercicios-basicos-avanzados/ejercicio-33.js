const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
};


function getCapital(country) {
    if (Object.keys(capitals).indexOf(country) < 0) {
        return "\n!-- No tenemos ese pais en la lista --!";
    }

    return capitals[country];
}


console.log("\n=== EJERCICIO 33 ===\n");
console.log(getCapital("Spain"));
