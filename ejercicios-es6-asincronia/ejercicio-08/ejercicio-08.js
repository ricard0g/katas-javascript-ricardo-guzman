const select = document.getElementById("character-list");
const img = document.querySelector(".character-image");

const option = document.createElement("option");
option.innerText = "Selecciona un Personaje";
select.appendChild(option);

// Opcion 1

fetch("https://thronesapi.com/api/v2/Characters")
	.then((res) => res.json())
	.then((data) => {
		data.forEach((character) => {
			const option = document.createElement("option");
			option.value = character.imageUrl;
			option.innerText = character.fullName;
			select.appendChild(option);
		});
	})
	.catch((error) =>
		console.log("Hay un error en la creacion de personajes: " + error),
	);

select.addEventListener("change", (e) => {
	img.src = e.target.value;
});

// Opcion 2 con Async-Await

// const crearPersonajes = async () => {
// 	try {
// 		const response = await fetch(
// 			"https://thronesapi.com/api/v2/Characters",
// 		);

// 		if (!response) {
// 			throw new Error(
// 				"No se han podido recolectar los personajes. Error: " +
// 					response,
// 			);
// 		}

// 		const characters = await response.json();

// 		for (const character of characters) {
// 			const option = document.createElement("option");
// 			option.value = character.imageUrl;
// 			option.innerText = character.fullName;
// 			select.appendChild(option);
// 		}
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// select.addEventListener("change", (e) => {
// 	img.src = e.target.value;
// });

// crearPersonajes();
