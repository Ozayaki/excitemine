let button = document.getElementsByClassName("menu");
let hud = document.getElementsByClassName("hd")[0];

button[1].onclick = function () {
    hud.style.transform = "translateY(0)"
    button[1].style.transform = "translateY(-150px)"
    button[0].style.transform = "translateY(0)"
}
button[0].onclick = function () {
    hud.style.transform = "translateY(-250px)"
    button[0].style.transform = "translateY(-150px)"
    button[1].style.transform = "translateY(0)"
}