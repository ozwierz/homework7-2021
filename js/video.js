var video = document.querySelector("#player1");
var volume = document.querySelector("#volume");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

// PLAY 
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	let vol = volume.innerHTMl = (video.volume * 100) + "%"
});

// PAUSE
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// SLOWER
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.95;
	console.log("New speed: " + video.playbackRate)
});

// FASTER
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.05;
	console.log("New speed: " + video.playbackRate)
});

// SKIP 
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration - 15) {
		video.currentTime += 15;
	}
	else {
		video.currentTime = 0;
		console.log("Beginning")
	}
	console.log( "Current location: " + video.currentTime)
	video.play()
});

// MUTE
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute Video")
	if (video.muted ===false) {
		video.muted = true;
		this.innerHTML = "Unmute";
	}
	else {
		this.innerHTML = "Mute";
		video.muted = false;
	}
});

// VOLUME SLIDER
document.querySelector("#slider").addEventListener("change", function() {
	let vol = volume.innerHTML = this.value + "%";
	video.volume = (this.value/100);
	console.log(this.value);
});

// STYLED 
document.querySelector("#vintage").addEventListener("click", function() {
	console.log('Old School Version');
	video.classList.add("oldSchool");
});

// ORIGINAL 
document.querySelector("#orig").addEventListener("click", function() {
	console.log('Original Version');
	video.classList.remove("oldSchool");
});
