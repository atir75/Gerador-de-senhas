
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassowrd = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");


let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
let novaSenha = "";

sizePassowrd.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
    sizePassowrd.innerHTML = this.value;
}

function generatePassword() {

    let pass="";

    for(let i = 0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;

}


function copyPassword() {
    alert("Senha copiada com sucesso!");
    navigator.clickboar.writeText(novaSenha);
}