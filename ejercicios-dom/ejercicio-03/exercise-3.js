const body = document.querySelector("body");

// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const countriesUl = document.createElement("ul");

countries.forEach((country) => {
	const li = document.createElement("li");
	li.innerText = `${country}`;
	countriesUl.appendChild(li);
});

body.appendChild(countriesUl);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

document.querySelector(".fn-remove-me").remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const printHereDiv = document.querySelector("div[data-function=printHere]");
const carsUl = document.createElement("ul");

cars.forEach((car) => {
	const li = document.createElement("li");
	li.innerText = `${car}`;
	carsUl.appendChild(li);
});

printHereDiv.appendChild(carsUl);

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const countriesObjects = [
	{ title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
	{ title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
	{ title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
	{ title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
	{ title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const countriesContainer = document.createElement("div");
countriesContainer.className = "countries-container";

countriesObjects.forEach((countryObj, index) => {
	const div = document.createElement("div");
	div.classList.add(`country-div`);
	div.dataset.idx = index;
	div.innerHTML = `<h4>${countryObj.title}</h4><img src="${countryObj.imgUrl}" />`;
	countriesContainer.appendChild(div);
});

body.appendChild(countriesContainer);

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.

const removeBtn = document.createElement("button");
removeBtn.innerText = "Eliminar Ultimo Elemento";

removeBtn.addEventListener("click", (e) => {
	const lastDiv = removeBtn.previousElementSibling.lastChild.remove();
	body.removeChild(lastDiv);
});

body.appendChild(removeBtn);

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.

const countryDivs = document.querySelectorAll("div.country-div");

countryDivs.forEach((countryDiv) => {
	const rmCountryDivBtn = document.createElement("button");
	rmCountryDivBtn.className = "rm-country-btn";
	rmCountryDivBtn.innerText = `Eliminar Elemento ${Number(countryDiv.dataset.idx) + 1}`;
	// rmCountryDivBtn.addEventListener("click", () => {
	// 	rmCountryDivBtn.parentElement.remove();
	// });
	countryDiv.appendChild(rmCountryDivBtn);
});

// Tambien he usado opcion anteriormente, que en lugar de anadir el addEventListener a cada boton, anado uno al contenedor de todos los divs y Delego el manejo del evento en base a quien fue el event.target. Asi solo anado un EventListener, este Listener va a usar el mecanismo de "Event Bubbling" para capturar todos los eventos que sucedan en hijos de este Nodo en el DOM, es bueno para optimizar memoria.

const handleDelete = (btn) => {
	btn.parentElement.remove();
};

countriesContainer.addEventListener("click", (event) => {
	if (event.target.classList.contains("rm-country-btn")) {
		handleDelete(event.target);
	}
});