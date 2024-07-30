var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var radius = 5;
var dragging = false;
context.lineWidth = radius*2;
var engage = function(e){
	dragging = true;
	putPoint(e);
}
var disengage = function(){
	dragging = false;
	context.beginPath();
}
var putPoint = function(e){
	if(dragging){
		context.lineTo(e.clientX,e.clientY);
		context.stroke();
		context.beginPath();
		context.arc(e.clientX,e.clientY,radius,0,Math.PI*2);
		context.fill();
		context.beginPath();
		context.moveTo(e.clientX,e.clientY);
	}
	
}




canvas.addEventListener('mousedown',engage);
canvas.addEventListener('mouseup',disengage);
canvas.addEventListener("mousemove",putPoint);


canvas.addEventListener('touchstart',engage);
canvas.addEventListener('touchend',disengage);
canvas.addEventListener("touchmove",putPoint);

