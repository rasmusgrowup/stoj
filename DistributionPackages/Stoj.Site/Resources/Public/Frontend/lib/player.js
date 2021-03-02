var idPlayer = new Vimeo.Player('vimeo-video');
var playVideo = document.querySelector('.video-frame-project');
var thumbVideo = document.querySelector('#video-thumb');
var playVideoMobile = document.querySelector('.video-frame-project');
var playSymbol = document.querySelector('.video-symbol');
var timesClicked = 0;

playVideo.addEventListener("click", function() {
	timesClicked++;

	if (timesClicked%2==0) {
		idPlayer.pause().then(function() {
		// the video was played
	});
		playVideo.classList.remove("video-is-playing");
		idPlayer.setMuted(true).then(function(muted) {
    // muted was turned on
		});
    } else {
		idPlayer.play().then(function() {
		// the video was played
		});
		playVideo.classList.add("video-is-playing");
		idPlayer.setMuted(false).then(function(muted) {
    // muted was turned on
		});
    }
});

playVideo.addEventListener("click", function() {
	thumbVideo.style.display = "none";
});

playVideoMobile.addEventListener("touchend", function() {
		idPlayer.play().then(function() {
		});
});
