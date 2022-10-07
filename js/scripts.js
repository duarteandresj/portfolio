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