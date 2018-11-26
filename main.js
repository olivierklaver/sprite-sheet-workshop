// get the sprite div
let char = document.querySelector(".character");

// set the frame
let frame = 0;

// move background image to frame position
char.style.cssText = "background-position-x: "+ (frame * -103) +"px";
