import { REGEX_PATTERNS } from "./helpers/expresionesRegulares.js";

let inputs = document.querySelectorAll("form input, form select")
inputs.forEach(function (input) {
    input.addEventListener("blur", function (e) {
    
        switch (e.target.name) {
            case "nombre":
                if (REGEX_PATTERNS.nombre.test(e.target.value)){
                    console.log("Cumple la expresión regular");
                    document.getElementById("nombre").style.backgroundColor = "green"
                } else {
                    console.log("No cumple la expresión regular");
                    document.getElementById("nombre").style.backgroundColor = "redss"
                }
                break;
            case "apellido":
                if (REGEX_PATTERNS.apellido.test(e.target.value)) {

                }
                break;
            case "documento":
                if (REGEX_PATTERNS.documento.test(e.target.value)) {

                }
                break;
            case "telefono":
                if (REGEX_PATTERNS.telefono.test(e.target.value)) {

                }
                break;
            case "genero":
                console.log("Este es el genero: ");
                break;
            case "hobbies":
            console.log("Estos son los hobbies: ");
            break;
        }
    })
})