const body = document.querySelector("body");

// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const emptyDiv = document.createElement("div");

body.appendChild(emptyDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const containerWithP = document.createElement("div");
containerWithP.innerHTML = "<p></p>";

body.appendChild(containerWithP);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.

const div = document.createElement("div");
div.classList.add("div-2.3");

for (let i = 0; i < 6; i++) {
	const p = document.createElement("p");
	div.appendChild(p);
}

body.appendChild(div);

// 2.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.

const soyDinamicoP = document.createElement("p");
soyDinamicoP.innerText = "Soy Dinamico!";

body.appendChild(soyDinamicoP);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const wubbah2 = document.querySelector(".fn-insert-here");

wubbah2.innerText = "Wubba Lubba dub dub";

// 2.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const appsUl = document.createElement("ul");

apps.forEach((app) => {
	const li = document.createElement("li");
	li.innerText = `${app}`;
	appsUl.appendChild(li);
});

body.appendChild(appsUl);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const removeNodes = document.querySelectorAll(".fn-remove-me");

for (const node of removeNodes) {
	body.removeChild(node);
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const secondMiddleDiv = Array.from(document.querySelectorAll("div"))[1];
const voyEnMedioP = document.createElement("p");
voyEnMedioP.innerText = "Voy en medio!";

secondMiddleDiv.before(voyEnMedioP);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here

const insertHereDivs = document.querySelectorAll(".fn-insert-here");

insertHereDivs.forEach((div) => {
	const voyDentroP = document.createElement("p");
	voyDentroP.innerText = "Voy dentro!";
	div.appendChild(voyDentroP);
});
