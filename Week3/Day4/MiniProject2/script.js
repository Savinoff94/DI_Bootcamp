let music = {
    a : "sounds_boom.wav",
    s : "sounds_clap.wav",
    d : "sounds_hihat.wav",
    f : "sounds_kick.wav",
    g : "sounds_openhat.wav",
    h : "sounds_ride.wav",
    j : "sounds_snare.wav",
    k : "sounds_tink.wav",
    l : "sounds_tom.wav"
}






function play(key){
    var audio = new Audio(music[key]);
    audio.play();
}

document.addEventListener("keydown", push);

function push(event){
    play(event.key);
}