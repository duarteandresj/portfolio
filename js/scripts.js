//  MOSTRAR MENU
const $menu=document.getElementById("menu");
const $togOpen=document.getElementById("toggle_open");
const $togClose=document.getElementById("toggle_close");

$togOpen.addEventListener("click",toggleMenu)
$togClose.addEventListener("click",toggleMenu)

function toggleMenu(){
    $menu.classList.toggle("show-menu");
    if($menu.classList.contains("show-menu")){
        $togOpen.style.display="none";
        $togClose.style.display="block"
    }else{
        $togOpen.style.display="block";
        $togClose.style.display="none"
    }
}
//  BOTON LEER MAS
const $btnLeerMas=document.querySelector(".btn-leerMas");
const $puntos=document.getElementById("puntos");
const $leerMas=document.getElementById("leer-mas");


$btnLeerMas.addEventListener("click",()=>{
    if($puntos.style.display==="none"){
        $puntos.style.display="inline";
        $btnLeerMas.innerHTML="Leer mas";
        $leerMas.style.display="none";
    }else{
        $puntos.style.display="none";
        $btnLeerMas.style.marginTop="1rem";
        $btnLeerMas.innerHTML="Leer menos";
        $leerMas.style.display="inline";
    }

})