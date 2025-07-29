import { REGEX_PATTERNS } from "./helpers/expresionesRegulares.js";

let inputs = document.querySelectorAll("form input");
inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    switch (e.target.name) {
      case "nombre":
        if (REGEX_PATTERNS.nombre.test(e.target.value)) {
          document.getElementById("nombre").classList.remove("incorrecto");
        } else {
          document.getElementById("nombre").classList.add("incorrecto");
        }
        break;
      case "apellido":
        if (REGEX_PATTERNS.apellido.test(e.target.value)) {
          document.getElementById("apellido").classList.remove("incorrecto");
        } else {
          document.getElementById("apellido").classList.add("incorrecto");
        }
        break;
      case "documento":
        if (REGEX_PATTERNS.documento.test(e.target.value)) {
          document.getElementById("documento").classList.remove("incorrecto");
        } else {
          document.getElementById("documento").classList.add("incorrecto");
        }
        break;
      case "telefono":
        if (REGEX_PATTERNS.telefono.test(e.target.value)) {
          document.getElementById("telefono").classList.remove("incorrecto");
        } else {
          document.getElementById("telefono").classList.add("incorrecto");
        }
        break;
    }
  });
});

let Usuarios = [];
let btnRegistro = document.getElementById("btnRegistro");
function registrarUsuario() {
  let formulario = document.querySelector("form");
  let data = new FormData(formulario);
  let objeto = Object.fromEntries(data);
  objeto.hobbies = data.getAll("hobbies");
  console.log(objeto);

  let camposVacios = Object.values(objeto).some((valor) => {
    return (
      valor === null || valor === undefined || valor.toString().trim() === ""
    );
  });

  if (camposVacios) {
    let mensajeError = "No se permiten campos vacíos, revise nuevamente...";
    let error = document.getElementById("error");
    error.textContent = mensajeError;
    error.classList.add("mensajeError");
    return;
  }

  let error = document.getElementById("error");
  error.classList.remove("mensajeError");
  error.textContent = "";

  Usuarios.push(objeto);
  localStorage.setItem("usuarios", JSON.stringify(Usuarios));
}
btnRegistro.addEventListener("click", registrarUsuario);
