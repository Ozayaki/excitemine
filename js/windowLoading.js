let icon = document.getElementById("logo");
let but = document.getElementById("b-list");
let header = document.getElementsByTagName("header");

function f() {
    if (window.innerWidth < 900) {
        document.getElementById("large").textContent = "Присоединиться";
    }
    setTimeout(() => {
        icon.style.transform = "translateY(0)";
        but.style.transform = "translateY(0)";
    },150)
}
f();

window.addEventListener("scroll", function(){
    if (window.innerWidth > 554) {
        if (window.scrollY !=0) {
            header[0].style.background = "#1d1d1d";
            header[0].style.boxShadow = "0px 5px 5px -5px black";
            header[0].style.backdropFilter = "none";

        }else {
            header[0].style.background = "rgba(255,255,255,0.01)";
            header[0].style.boxShadow = "none";
            header[0].style.backdropFilter = "blur(5px)";

        }
    }
});
