const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },
  { name: "The Matrix", durationInMinutes: 136 },
  { name: "Amélie", durationInMinutes: 110 },
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const smallMovies = movies.filter((movie) => movie.durationInMinutes < 100);
const mediumMovies = movies.filter((movie) => movie.durationInMinutes >= 100 && movie.durationInMinutes < 200);
const bigMovies = movies.filter((movie) => movie.durationInMinutes > 200);


console.log("\n=== EJERCICIO 23 ===\n");

console.log("\nPeliculas Pequenas:")
smallMovies.forEach((movie) => console.log(movie));

console.log("\nPeliculas Medianas:")
mediumMovies.forEach((movie) => console.log(movie));

console.log("\nPeliculas Grandes:")
bigMovies.forEach((movie) => console.log(movie));

console.log()
