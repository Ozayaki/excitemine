let screenshots = document.getElementsByClassName("screenshots")[0].getElementsByTagName("img");
let scrButt = document.getElementsByClassName("screenshots")[0].getElementsByTagName("svg");

scrButt[0].onclick = function () {
    let i1 = screenshots[0].src;
    let i2 = screenshots[1].src;
    let i3 = screenshots[2].src;

    screenshots[2].src = i1;
    screenshots[1].src = i3;
    screenshots[0].src = i2;
}

scrButt[1].onclick = function () {
    let i1 = screenshots[0].src;
    let i2 = screenshots[1].src;
    let i3 = screenshots[2].src;

    screenshots[0].src = i3;
    screenshots[1].src = i1;
    screenshots[2].src = i2;
}