document.addEventListener("DOMContentLoaded", function () {

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    yesBtn.onclick = function () {
        alert("I LOVE YOU TOO! ❤️");
    };

    noBtn.onclick = function () {
        alert("ARE YOU SURE? 💔");
    };

});
