import { REGEX_PATTERNS } from "./helpers/expresionesRegulares.js";

let inputs = document.querySelectorAll("form input");
inputs.forEach((input)=> {
    input.addEventListener("keyup", (e)=> {
        // console.log(e.target.nombre);
        switch (e.target.name) {
            case "nombre":
                if (REGEX_PATTERNS.nombre.test(e.target.value)) {
                    console.log("cumple la expresión regular");
                } else{
                    console.log("no cumple la expreción regular");
                    
                }
                break;
        
           case "apellido":
                console.log(e.target.value);
                break;
            case "documento":
                console.log(e.target.value);
                break;
            case "telefono":
                console.log(e.target.value);
                break;        
        }
    })

});
