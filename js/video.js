var video;

// 1) Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() {
	console.log("Good job opening the window");

	video = document.querySelector('#player1');
	console.log("Loop is: " + video.loop);
	video.loop = false;
	console.log("Autoplay is: " + video.autoplay);
	video.autoplay = false;
});



// 2) Play the video and update the volume information.  
document.querySelector('#play').addEventListener("click", function() {
	var volume;
	console.log("Playing Video");
	video.play();
	volume = document.querySelector("#slider").value; 
	document.querySelector("#volume").innerHTML =  volume + "%";
});



// 3) Pause the video.
document.querySelector('#pause').addEventListener("click", function() {
	console.log("Pausing Video");
	video.pause();
});



// 4) Slow the current video speed by 10% each time the button is clicked and log the new speed to the console. 
document.querySelector('#slower').addEventListener("click",function() {
	var newSpeed = video.playbackRate;
	console.log("Slowing Down Video");
	newSpeed = newSpeed * (9/10);
	video.playbackRate = newSpeed;
	console.log("New speed: " + newSpeed);
});



// 5) Increase the current video speed each time the button is clicked and log the new speed to the console.  
//    Change it by an amount proportional to the slow down. CHECK THIS!!
//    If you slow down three times and then speed up three times you should be within 5 digits of 100% again.
document.querySelector('#faster').addEventListener("click", function() {
	var newSpeed = video.playbackRate;
	console.log("Speeding Up Video");
	newSpeed = newSpeed * (10/9);
	video.playbackRate = newSpeed;
	console.log("New speed: " + newSpeed);
});



// 6) Advance the current video by 10 seconds.  If the video length has been exceeded go back to the 
//    start of the video - no farther. Log the current location of the video. 
document.querySelector('#skip').addEventListener("click", function() {
	console.log("SKipping Ahead");
	var skip = video.currentTime + 10;

	if (skip > video.duration) {
		// Go to the beginning
		video.currentTime = 0;

	}
	
	else {
		video.currentTime = video.currentTime + 10;
	}

	//log current location of video
	console.log("New Current Video Location: " + video.currentTime);

});



// 7) Mute/unmute the video and update the text in the button.
document.querySelector('#mute').addEventListener("click", function(){
	if (video.muted == true) {
		video.muted = false;
		document.querySelector('#mute').innerHTML = "Mute";
		console.log("Muted is: " + video.muted);

	}
	
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Muted is: " + video.muted);
	}
});



// 8) Change the volume based on the slider and update the volume information.
// *Switched to using input due to issues while viewing console
document.querySelector('#slider').addEventListener("input", function() {
	video.volume = this.value / 100;
	document.querySelector('#volume').innerHTML = (100 * video.volume) + "%";
	console.log("Video Volume: " + (100 * video.volume) + "%");
});



// 9) Utilize the existing oldSchool class on the video element
// *Switched to using input due to issues while viewing console
document.querySelector('#vintage').addEventListener("click", function() {
	document.querySelector("#player1").classList.add("oldSchool");
	console.log("Old School Class Applied");
});



// 10) Remove the oldSchool class from the video.
document.querySelector('#orig').addEventListener("click", function(){
	document.querySelector("#player1").classList.remove("oldSchool");
	console.log("Old School Class Removed");
});
