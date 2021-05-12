var audio = document.getElementById("audio");
var volume = document.getElementById("volume");

function volumeSet(){audio.volume=volume.value}

function play() {
  if (audio.paused)
    audio.play();
  else
    audio.pause();
}

function showVolumeSeekbar() {
  volume.classList.toggle("visible");
}
