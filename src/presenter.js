// import sumar from "./sumador";
// import Validar from "./validar";

const form = document.querySelector("#post-form");
const titulo = document.querySelector("#titulo-post");
const detalle = document.querySelector("#detalle-post");
const div = document.querySelector("#resultado-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  var valor_titulo = titulo.value;
  var valor_detalle = detalle.value;
  div.innerHTML = "<p> " + Validar(valor_titulo, valor_detalle) + "</p>";
});

function Validar(titulo, detalle){
  if(titulo.length == 0){
      return "Error titulo vacio";
  }else{
      return "titulo: " + titulo + "<br/>" + "Detalle: " + detalle;
  }
}