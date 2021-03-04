var subheader = document.getElementsByClassName('reel-container');
if (subheader.length > 0) {
	var reelPlayer = new Vimeo.Player('reel-video');
	var playReel = document.querySelector('.play--symbol');
	var closeReel = document.querySelector('.close-reel');
	var reelContainer = document.querySelector('.reel-container');
	var reelInner = document.querySelector('.reel-inner');
	var reelInnerMobile = document.querySelector('.reel-inner');
	var timesClicked = 0;

	reelPlayer.pause().then(function() {
	// the video was played
	});

	playReel.addEventListener("click", function() {
			reelContainer.style.visibility = "visible";
			reelContainer.style.opacity = "1";
	});

	reelInner.addEventListener("click", function() {
		timesClicked++;

		if (timesClicked%2==0) {
			reelPlayer.pause().then(function() {
			// the video was played
		});
			reelContainer.classList.remove("video-is-playing");
			reelPlayer.setMuted(true).then(function(muted) {
	    // muted was turned on
			});
	    } else {
			reelPlayer.play().then(function() {
			// the video was played
			});
			reelContainer.classList.add("video-is-playing");
			reelPlayer.setMuted(false).then(function(muted) {
	    // muted was turned on
			});
	    }
	});

	playReel.addEventListener("touchend", function() {
		reelPlayer.requestFullscreen().then(function() {
		// the player entered fullscreen
		}).catch(function(error) {
		// an error occurred
		});
		reelPlayer.play().then(function() {
		// the video was played
		});
		reelPlayer.setMuted(false).then(function(muted) {
	// muted was turned on
		});
	});

	closeReel.addEventListener("click", function () {
		reelPlayer.pause().then(function() {
		// the video was played
		});
		reelPlayer.setMuted(true).then(function(muted) {
		// muted was turned on
		});
		reelContainer.style.visibility = "hidden";
		reelContainer.style.opacity = "0";
	})

}

var project = document.getElementsByClassName('video-frame-project');
if (project.length > 0) {
	var idPlayer = new Vimeo.Player('vimeo-video');
	var playVideo = document.querySelector('.video-frame-project');
	var thumbVideo = document.querySelector('.video-thumb');
	var playVideoMobile = document.querySelector('.video-frame-project');
	var playSymbol = document.querySelector('.video-symbol');
	var fullSymbol = document.querySelector('.full-symbol');
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

	fullSymbol.addEventListener("click", function() {
		idPlayer.requestFullscreen().then(function() {
		// the player entered fullscreen
		}).catch(function(error) {
		// an error occurred
		});
	});
}
