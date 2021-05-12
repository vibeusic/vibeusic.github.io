var audio = document.getElementById("audio");
var volumebtn = document.getElementById("volumebtn");
var volume = document.getElementById("volume");

function volumeSet(){audio.volume=volume.value}

function play() {
  if (audio.paused)
    audio.play();
  else
    audio.pause();
}

function mute() {
  if (audio.muted) {
    audio.muted=false;
    volumebtn.src='icon/sound-on-outline.png';
  } else {
    audio.muted=true;
    volumebtn.src='icon/sound-off-outline.png';
  }
}
