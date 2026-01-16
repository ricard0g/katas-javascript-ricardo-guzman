const movies = [
    {
        title: "Bracula: Condemor II",
        duration: 192,
        categories: ["comedia", "aventura"],
    },
    {
        title: "Spider-Man: No Way Home",
        duration: 122,
        categories: ["aventura", "acción"],
    },
    {
        title: "The Voices",
        duration: 223,
        categories: ["comedia", "thriller"],
    },
    {
        title: "Shrek",
        duration: 111,
        categories: ["comedia", "aventura", "animación"],
    },
];


console.log("\n=== EJERCICIO 37 ===\n");

const categorias = [];

for (const movie of movies) {
    movie.categories.map((category) => {
        if (!categorias.includes(category)) {
            categorias.push(category);
        }
    })
}

console.log(categorias);
console.log()
