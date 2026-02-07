const img = document.querySelector(".random-image");

// Opcion 1

fetch(
	`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151) + 1}`,
)
	.then((res) => res.json())
	.then((pokemon) => {
		img.src = pokemon.sprites.front_default;
	})
	.catch((error) =>
		console.log("Error en la extraccion del Pokemon: " + error),
	);

// Opcion 2 Async Await

// const pokemonFetch = async () => {
// 	try {
// 		const response = await fetch(
// 			`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151) + 1}`,
// 		);

// 		if (!response) {
// 			throw new Error("Error en la extraccion del Pokemon: " + response);
// 		}

// 		const pokemon = await response.json();

// 		img.src = pokemon.sprites.front_default;
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// pokemonFetch();
