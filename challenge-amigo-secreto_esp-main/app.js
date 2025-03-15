const listaAmigos = [];
const inputAmigos = document.getElementById("amigo");
const ulAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
const regex = /^(?! )[a-zA-Z\s]*(?<! )$/;
const amigo = inputAmigos.value.trim();

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function clean(elemento){
    document.getElementById(elemento).value = ""; 
    document.getElementById(elemento).innerHTML = ""; 
}

function agregarAmigo() {
    if (!regex.test(inputAmigos.value)) {
        swal("Error",`${inputAmigos.value} no es un nombre válido.`,"error");
    }else{
        if (inputAmigos.value === "") {
            swal("Error","Por favor ingrese un nombre.","error")
        }else{
        listaAmigos.push(inputAmigos.value);
        ulAmigos.innerHTML += `<li>${inputAmigos.value}</li>`;
        clean("amigo")
        inputAmigos.focus()
        }
    }
}

function sortearAmigo() {
    console.log(listaAmigos)
    const random = Math.floor(Math.random()*listaAmigos.length);
    const amigoElegido = listaAmigos[random]
    swal("¡Felicidades!", `El amigo secreto es: ${amigoElegido}`, "success")
    clean("ulAmigos")
}

inputAmigos.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});