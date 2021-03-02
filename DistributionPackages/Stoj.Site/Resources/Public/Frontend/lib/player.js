var idPlayer = new Vimeo.Player('vimeo-video');

idPlayer.pause().then(function() {
});

var playVideo = document.querySelector('.video-frame-project');
var thumbVideo = document.querySelector('#video-thumb');
var timesClicked = 0;

playVideo.addEventListener("click", function() {
	timesClicked++;

	if (timesClicked%2==0) {
		idPlayer.pause().then(function() {
		// the video was played
		playVideo.classList.add("video-is-paused");
		playVideo.classList.remove("video-is-playing");
	});
		idPlayer.setMuted(true).then(function(muted) {
    // muted was turned on
		});
    } else {
		idPlayer.play().then(function() {
		// the video was played
		playVideo.classList.add("video-is-playing");
		playVideo.classList.remove("video-is-paused");
		});
		idPlayer.setMuted(false).then(function(muted) {
    // muted was turned on
		});
    }
});

playVideo.addEventListener("click", function() {
	thumbVideo.style.display = "none";
});

playVideo.addEventListener("touchend", function() {
		idPlayer.pause().then(function() {
		});
		idPlayer.requestFullscreen().then(function() {
			// the player entered fullscreen
		});
});
