"use strict";

//CRIANDO UM OBJETO
const usuario1 = {
    
} 

addEventListener("click", (evt)=>{
    if(evt.target.id == "btnSubmit"){

        let usuarioInput = document.querySelector("#usuario").value;
        let senhaInput = document.querySelector("#senha").value;

        if(usuarioInput == "pf0670" && senhaInput == "12345"){
            console.log("USUÁRIO VALIDADO!");
        }else{
            console.log("SENHA OU NOME DE USUÁRIO INVÁLIDO!");
        }   
    }
});