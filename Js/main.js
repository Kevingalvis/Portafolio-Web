// VARIABLES MENU LATERAL 
const $btnBar = document.querySelector(".bar-btn");
const $batItems = document.querySelector(".bar");
//VARIABLES MODAL CONTACTAME
const $ventanModal = document.querySelector(".section-modal");
const $linkContact = document.querySelector(".contact");
const $cerrarModal = document.querySelector(".Cerrar");
const $cancelar = document.querySelector(".cancelar");
// VARIABLES PRELOADER
const $loader = document.querySelector(".section-loader");








/** ------------------------------------------------- */
/** ------------------------------------------------- */
//FUNCIONALIDAD MENU
$btnBar.addEventListener("click",()=>{
    $batItems.classList.toggle("bar-items_visible");
});

/** ------------------------------------------------- */
/** ------------------------------------------------- */
//FUNCIONALIDAD MODAL CONTACTAME
$linkContact.addEventListener("click",(e)=>{
    e.preventDefault();
  $ventanModal.classList.add("modal-visible");
})
$cerrarModal.addEventListener("click",(e)=>{
    e.preventDefault();
  $ventanModal.classList.remove("modal-visible");
})
$cancelar.addEventListener("click",(e)=>{
    e.preventDefault();
  $ventanModal.classList.remove("modal-visible");
})

/** ------------------------------------------------- */
/** ------------------------------------------------- */
//FUNCIONALIDAD PRELOADER
window.addEventListener("load", ()=>{
  console.log("asdadasd")
  setTimeout(function(){
    $loader.classList.toggle("loader-close");
  },5000);
 
})
