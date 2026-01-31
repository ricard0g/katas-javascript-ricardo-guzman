// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const showMeButton = document.getElementsByClassName("showme");

console.log(showMeButton);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const heading = document.getElementById("pillado");

console.log(heading);

// 1,3 Usa querySelector para mostrar por consola todos los p

const allPs = document.querySelectorAll("p");

for (const p of allPs.values()) {
    console.log(p.outerHTML);
}

// 1.4 Usa querySelector para mostrar por consola todos los elementos con
// 	la clase.pokemon

const pokemonElements = document.querySelectorAll(".pokemon");

for (const pokemonElement of pokemonElements.values()) {
    console.log(pokemonElement.outerHTML);
}

// 1.5 Usa querySelector para mostrar por consola todos los elementos con
// el atributo data-function="testMe".

const testMeElements = document.querySelectorAll("[data-function=testMe]");

testMeElements.forEach((element) => console.log(element.outerHTML));

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
// data-function="testMe".

const thirdTestMeElement = document.querySelectorAll("[data-function=testMe]").item(2);

console.log(thirdTestMeElement);