"use strict";
//The text to show inside the container
const innerText = document.createElement("p");
innerText.innerHTML = `Esto es una prueba ${42}`;

//The container to append
const container = document.createElement("div");
container.setAttribute("id", "myContainer");
container.appendChild(innerText);

//Adds the container to the html
document.body.appendChild(container);
