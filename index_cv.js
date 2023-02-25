//Vars and constants

const botonHome = document.getElementById("btn_home");
const home = document.getElementById("home");

const botonInfo = document.getElementById("btn_info");
const botoninfo2 =document.getElementById("btn_info2");
const informacion = document.getElementById("informacion");

const botonFormacion = document.getElementById("btn_formacion");
const botonFormacion2 = document.getElementById("btn_formacion2");
const formacion = document.getElementById("formacion");

const botonExperiencia = document.getElementById("btn_experiencia");
const botonExperiencia2 = document.getElementById("btn_experiencia2");
const experiencia = document.getElementById("experiencia");

const botonContacto = document.getElementById("btn_contact");
const botonContacto2 = document.getElementById("btn_contact2");
const contacto = document.getElementById("contacto");

const openMenu = document.getElementById("abrirMenu");
const closeMenu = document.getElementById("cerrarMenu");


//Functions

//Función para mostrar el home
function showHome(){
    home.classList.remove("hidden");
    informacion.classList.add("hidden");
    formacion.classList.add("hidden");
    experiencia.classList.add("hidden");
    contacto.classList.add("hidden");
}

//Función para mostrar la información
function showInfo(){
    home.classList.add("hidden");
    informacion.classList.remove("hidden");
    formacion.classList.add("hidden");
    experiencia.classList.add("hidden");
    contacto.classList.add("hidden");
}
//Función para mostrar la formación
function showFormacion(){
    home.classList.add("hidden");
    informacion.classList.add("hidden");
    formacion.classList.remove("hidden");
    experiencia.classList.add("hidden");
    contacto.classList.add("hidden");
}
//Función para mostrar la experiencia
function showExp(){
    home.classList.add("hidden");
    informacion.classList.add("hidden");
    formacion.classList.add("hidden");
    experiencia.classList.remove("hidden");
    contacto.classList.add("hidden");
}
//Función para mostrar el formulario de contacto
function showContact(){
    home.classList.add("hidden");
    informacion.classList.add("hidden");
    formacion.classList.add("hidden");
    experiencia.classList.add("hidden");
    contacto.classList.remove("hidden");
}

//Función para agrandar el menú
function openNav(){
    document.getElementById("mobile-menu").style.width="100%";
}
//Función para cerrar el menú
function closeNav(){
    document.getElementById("mobile-menu").style.width="0%";
}

//Events

botonHome.addEventListener("click",()=> showHome());

botonInfo.addEventListener("click",()=> showInfo());
botoninfo2.addEventListener("click",()=>{
    showInfo();
    closeNav();
} );


botonExperiencia.addEventListener("click",()=> showExp());
botonExperiencia2.addEventListener("click",()=> {
    showExp();
    closeNav()
} );

botonFormacion.addEventListener("click",()=> showFormacion());
botonFormacion2.addEventListener("click",()=> {
    showFormacion();
    closeNav()
} );

botonContacto.addEventListener("click",()=> showContact());
botonContacto2.addEventListener("click",()=> {
    showContact();
    closeNav();
});

openMenu.addEventListener("click", ()=> openNav());
closeMenu.addEventListener("click",()=> closeNav());





