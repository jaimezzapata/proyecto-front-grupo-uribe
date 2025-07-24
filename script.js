import { REGEX_PATTERNS } from "./helpers/expresionesregulares.js";
let inputs = document.querySelectorAll("form inout");
inputs.forEach((input)=>{
    input.addEventListener("keyup", (e)=> {
        // console.log("JUANDA");
        switch (e.target.name){
            case "nombre" :
                if(REGEX_PATTERNS.nombre.test(e.target.value)){
                    console.log("cumple la expresion regular");
                    
                }else{
                    console.log("no cumole la condicion")
                    
                }
                break;
            case "apellido"
             
                
        }
    })

})