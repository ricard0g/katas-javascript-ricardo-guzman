const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
    const mutantFound = mutants.filter((mutant) => mutant.power == power);

    if (mutantFound.length === 1) {
        return `El Mutante encontrado que tuviese "${power}" como poder es --> ${mutantFound[0].name}`
    } else if (mutantFound.length > 1) {
        const message = `Mutantes encontrados con "${power}" como poder:\n`;
        const mutantList = mutantFound.map((mutant) => `- ${mutant.name}\n`).join("");
        return message + mutantList
    } else {
        return `No se han encontrado mutantes con "${power}" como poder.`
    }
}


console.log("\n=== EJERCICIO 35 ===\n");
console.log(findMutantByPower(mutants, "magnetism"));
console.log();
