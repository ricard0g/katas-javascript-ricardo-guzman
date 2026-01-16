const artists = [
    { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
    { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
    { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
    { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
    { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
];

console.log("\n=== EJERCICIO 31 ===\n");
console.log("Artista e Influencias:\n")

for (const artist of artists) {
    console.log(`${artist.name} ha sido influenciado por:`);
    artist.influences.forEach((influence) => console.log(`- ${influence}`));
    console.log()
}
