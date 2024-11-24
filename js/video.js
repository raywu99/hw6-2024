var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to", video.autoplay);
	console.log("Loop is set to", video.loop);
});

// play video
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	video.play();
});

// pause video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// slow down
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New speed is", video.playbackRate);
});

// speed up
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New speed is", video.playbackRate);
});

// skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("skip ahead")
	video.currentTime += 10;
	console.log("Current time is", video.currentTime);
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
		console.log("video current time is", video.currentTime);
	}
});

// mute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false; // unmute
		this.textContent = "Mute"; // change button text
	} else {
		video.muted = true; // mute
		this.textContent = "Unmute"; // change button text
	}
	console.log("Muted:", video.muted);
});

// volume slider
document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = this.value + "%";
	console.log("Volume is set to", video.volume);
});

// old school
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Old School filter applied");
});

// original
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Removed old school filter");
});
