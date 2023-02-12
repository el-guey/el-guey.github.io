//Declaración de variables
const botonHome = document.getElementById("btn_home");
//const botonInfo = document.getElementById();
//const botonFormacion = document.getElementById();
const home = document.getElementById("home");


//Evento del home
botonHome.addEventListener("click",()=>{
    home.classList.toggle("hidden");
})
//Funcion para agrandar el menú
function openNav(){
    document.getElementById("mobile-menu").style.width="100%";
}
//Función para cerrar el menú
function closeNav(){
    document.getElementById("mobile-menu").style.width="0%";
}

//Eventos del menu desplegado

//Eventos del menu responsive