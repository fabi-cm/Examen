import sumar from "./sumador";


const form = document.querySelector("#post-form");
const titulo = document.querySelector("#titulo-post");
const detalle = document.querySelector("#detalle-post");
const div = document.querySelector("#resultado-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  var valor_titulo = titulo.value;
  var valor_detalle = detalle.value;
  div.innerHTML = "<p> Titulo: " + valor_titulo + " Detalle: " + valor_detalle + "</p>";
});
