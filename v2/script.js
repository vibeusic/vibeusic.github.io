var audio = document.getElementById("audio");
var playbtn = document.getElementById("playbtn");
var volumeslider = document.getElementById("volumeslider");
var mutebtn = document.getElementById("mutebtn");

function play() {
  if (audio.paused) {
    audio.play();
    playbtn.src='src/ico/pause-circle-outline.png';
  } else {
    audio.pause();
    playbtn.src='src/ico/play-circle-outline.png';
  }
}

function volumeSet(){audio.volume=volumeslider.value}

function mute() {
  if (audio.muted) {
    audio.muted = false;
    mutebtn.src='src/ico/sound-on-outline.png';
  } else {
    audio.muted = true;
    mutebtn.src='src/ico/sound-off-outline.png';
  }
}
