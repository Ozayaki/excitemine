let alert = document.getElementById("join-alert");
let join_button = document.getElementsByClassName("copyButton");




join_button[0].onclick = function () {
    navigator.clipboard.writeText('text')
        .then(() => {
            alert.textContent = "Данные для входа скопированы!";
        })
        .catch(error => {
            alert.textContent = "Не удалось скопировать данные для входа!";
        })
    setTimeout(() => {
        alert.textContent=null;
    }, 2500)
}
join_button[1].onclick = function () {
    navigator.clipboard.writeText('text')
        .then(() => {
            alert.textContent = "Данные для входа скопированы!";
        })
        .catch(error => {
            alert.textContent = "Не удалось скопировать данные для входа!";
        })
    setTimeout(() => {
        alert.textContent=null;
    }, 2500)
}
