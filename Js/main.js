// VARIABLES MENU LATERAL 
const $btnBar = document.querySelector(".bar-btn");
const $batItems = document.querySelector(".bar-items");

//FUNCIONALIDAD MENU
$btnBar.addEventListener("click",()=>{
    $batItems.classList.toggle("bar-items_visible");
});