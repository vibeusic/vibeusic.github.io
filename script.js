var audio = document.getElementById("audio");
var playbtn = document.getElementById("playbtn");
var volumebtn = document.getElementById("volumebtn");
var volume = document.getElementById("volume");
var savevolume=volume.value;

var dur = document.getElementById("seekbar")
function mDur(){dur.max=audio.duration}
function mPlay(){dur.value=audio.currentTime}
function mSet(){audio.currentTime=dur.value}

function volumeSet(){audio.volume=volume.value}

function play() {
  if (audio.paused) {
    audio.play();
    playbtn.src='icon/pause-circle-outline.png';
  } else {
    audio.pause();
    playbtn.src='icon/play-circle-outline.png';
  }
}

function mute() {
  if (audio.muted) {
    audio.muted=false;
    volumebtn.src='icon/sound-on-outline.png';
    volume.value=savevolume;
  } else {
    audio.muted=true;
    volumebtn.src='icon/sound-off-outline.png';
    savevolume=volume.value;
    volume.value="0";
  }
}
