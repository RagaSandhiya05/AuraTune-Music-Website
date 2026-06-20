const mySong = document.getElementById("mySong");
const icon = document.getElementById("icon");

icon.onclick = function () {
    if (mySong.paused) {
        mySong.play();
        icon.src = "Sound webpage_img/pause.png";
    } else {
        mySong.pause();
        icon.src = "Sound webpage_img/play.png";
    }
};
