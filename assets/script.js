let menuL = document.getElementById("menu_cache");
let openBtn = document.getElementById("open_menu");
let closeBtn = document.getElementById("close_menu");

openBtn.addEventListener('click',openNav);
closeBtn.addEventListener('click',closeNav);

function openNav(){   
    menuL.classList.add("visible");  
    openBtn.classList.add("invisible");
    closeBtn.classList.add("visible");  

}

function closeNav(){
    menuL.classList.remove("visible");  
    openBtn.classList.remove("invisible");
    closeBtn.classList.remove("visible");  
 }