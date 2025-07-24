import { REGEX_PATTERNS } from "./helpers/expresionesRegulares.js";

let inputs = document.querySelectorAll("form input");
inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        switch (e.target.name) {
            case "nombre":
                if (REGEX_PATTERNS.nombre.test(e.target.value)) {
                    console.log("Cumple la expresión regular");
                } else {
                    console.log("No cumple la expesión regular");
                }
                break;
            case "apellido":
                console.log(e.target.value);
                break;
        }
    })
})