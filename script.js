import { REGEX_PATTERNS } from "./helpers/expresionesregulares.js";
let inputs = document.querySelectorAll("form input");
inputs.forEach(function(input){
    input.addEventListener("keyup", (e)=>{
        console.log(e.target.name);

        switch (e.target.name){
            case "nombre":
                if(REGEX_PATTERNS.nombre.test(e.target.value)){
                    console.log("Cumple la expresion regular");
                    document.getElementById("nombre").style.color = "black"
                    document.getElementById("nombre").style.backgroundColor = "yellow"
                }else{
                    console.log("No cumple la expresion regular");
                    
                }     
                break;
            case "apellido":
                    if(REGEX_PATTERNS.apellido.test(e.target.value)){
                        console.log("Felicidades crack, lo hicistes bien");
                    }else{
                        console.log("Tonto, lo hicistes mal");
                        
                    }
                break;
            case "documento":
                    console.log(e.target.value);
                break;
            
            case "telefono":
                    console.log(e.target.value);
                break;                    
        }

    }) 
    
})
