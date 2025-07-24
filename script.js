import {REGEX_PATTERNS} from "./helpers/expresionesRegulares.js"
let inputs = document.querySelectorAll("form input");

inputs.forEach((e) => {
    
    e.addEventListener("blur", (input) =>{
    switch (input.target.name) {
        case "nombre":
            if (REGEX_PATTERNS.nombre.test(input.target.value)) {
                console.log("correcto")
                input.target.style.background = "green"
            }else{
                console.log("incorrecto")
                input.target.style.background = "red"
            }
            break;
    
        case "apellido":
            if (REGEX_PATTERNS.apellido.test(input.target.value)) {
            console.log("correcto")
            input.target.style.background = "green"
            }else{
                console.log("incorrecto")
                input.target.style.background = "red"
            }
            break;
        case "documento":
            if (REGEX_PATTERNS.documento.test(input.target.value)) {
            console.log("correcto")
            input.target.style.background = "green"
            }else{
                console.log("incorrecto")
                input.target.style.background = "red"
            }
            break;
        case "telefono":
            if (REGEX_PATTERNS.telefono.test(input.target.value)) {
            console.log("correcto")
            input.target.style.background = "green"
            }else{
                console.log("incorrecto")
                input.target.style.background = "red"
            }
            break;
        default:
            break;
    }
    })
});