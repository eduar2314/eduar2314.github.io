const perfil = document.querySelector(".foto-container");
const card_perfil = document.getElementById("card-perfil");

perfil.addEventListener("click", cambiardisplay);

function cambiardisplay (){
    card_perfil.classList.toggle("display-not");
}