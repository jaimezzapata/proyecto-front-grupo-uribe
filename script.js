import { REGEX_PATTERNS} from"./helpers/exprecionesRegulares.js";

let inputs = document.querySelectorAll("form input");
inputs.forEach((input)=>{
    input.addEventListener("keyup", (e)=>{

        switch(e.target.name){
            case"nombre":
            if(REGEX_PATTERNS.nombre.test(e.target.value)){
                console.log("cunple la condicion"); 
            } else{
                console.log("no cumple la condicion");   
            }
            break
            case"apellido":
             if(REGEX_PATTERNS.apellido.test(e.target.value)){
                console.log("cunple la condicion"); 
            } else{
                console.log("no cumple la condicion");   
            }
            break
            case"documento":
             if(REGEX_PATTERNS.documento.test(e.target.value)){
                console.log("cunple la condicion"); 
            } else{
                console.log("no cumple la condicion");   
            }
            break
            case"telefono":
             if(REGEX_PATTERNS.telefono.test(e.target.value)){
                console.log("cunple la condicion"); 
            } else{
                console.log("no cumple la condicion");   
            }
            break
        }
    })
})