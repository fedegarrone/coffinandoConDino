// Importaciones
import { postComment } from "./post-comment.js";
import { Render } from "./Render.js";
import { printer } from "./printer.js";

// Definicion de Constantes
const form = document.getElementById("sheetdb-form");
const submit = document.getElementById("submit");
const nameHTML = document.getElementById("name");
const textHTML = document.getElementById("text");
const app = new Render("app");
const sheetURL = "https://sheetdb.io/api/v1/hpvixdzd27yt5";

app.getData(sheetURL, printer);

submit.addEventListener("click", (e) => {
  if (nameHTML.value == "" || textHTML.value == "") {
    alert(
      "No puede dejar un campo en blanco. Por favor, complete su nombre y el comentario."
    );
  } else {
    e.preventDefault();
    postComment();
  }
});