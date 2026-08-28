document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    const loveVideo = document.querySelector(".love-video");
    const gifVideo = document.getElementById("gif-video");
    
    yesBtn.onclick = function (){
        gifVideo.style.display = "none";

        loveVideo.style.display ="block";
        loveVideo.currentTime = 0;
        loveVideo.play();

    };
    noBtn.onclick = function () {
        loveVideo.style.display = "none";

        gifVideo.style.display = "block";
        gifVideo.currentTime = 0;
        gifVideo.play();
    };

});
