// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
// que imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de lo posible.

// Tuve problemas para poder ver el array del enunciado asi que simplemente puse algunos albums que escucho    

const albums = [
	"Dominion Day of Destiny",
	"The Beautiful Letdown",
	"Rivers in the Wasteland",
	"Reliant K",
	"Never Take Friendship Personal",
];

const albumCoversRelativePaths = [
	"./assets/day-of-destiny.jpg",
	"./assets/thebeautifulletdown.jpg",
	"./assets/riversinthewasteland.jpg",
	"./assets/relient-k.jpg",
	"./assets/anberlin.jpg",
];

const albumListSection = document.querySelector(".album-list");
const ul = document.createElement("ul");

albums.forEach((album, index) => {
	const li = document.createElement("li");
	li.innerHTML = `<figure><img class="album-cover__img" src="${albumCoversRelativePaths[index]}" alt="${album} Cover" /><figcaption>${album}</figcaption></figure>`;
	ul.appendChild(li);
});

albumListSection.appendChild(ul);
