
    function deleteNotification(button) 
    {
      var notification = button.parentNode;
      notification.remove();
    }

    window.addEventListener("load", function () {
    var audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.play();

    // Show the 'AudioOff' image and hide the 'AudioOn' image
    var audioOnImage = document.getElementById("audioOnImage");
    var audioOffImage = document.getElementById("audioOffImage");
    audioOnImage.style.display = "none";
    audioOffImage.style.display = "block";
});

// Add an event listener to the button to toggle the audio and images
function toggleAudio() {
    var audioPlayer = document.getElementById("audioPlayer");
    var audioImage = document.getElementById("audioImage");
    
    if (audioPlayer.paused) {
        audioPlayer.play();
        audioImage.src = "/icon/AudioOn.png";
    } else {
        audioPlayer.pause();
        audioImage.src = "/icon/AudioOff.png";
    }
}

document.getElementById("audioImage").addEventListener("click", toggleAudio);

// Autoplay the audio on page load
document.addEventListener("DOMContentLoaded", function () {
    var audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.play();});
