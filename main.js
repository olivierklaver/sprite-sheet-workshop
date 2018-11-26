// get the sprite div
let char = document.querySelector(".character");

// set the frame
let frame = 0;

setInterval(draw, 100);

function draw(){
	// move background image to frame position
	char.style.cssText = "background-position-x: "+ (frame * -103) +"px";

	frame++;
	if(frame > 12) frame = 3;
}
