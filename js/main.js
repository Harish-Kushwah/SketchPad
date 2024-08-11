var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var radius = 5;
var dragging = false;
context.lineWidth = radius * 2;

var engage = function (e) {
	dragging = true;
	putPointForDesktop(e);
	putPointForMobileDevices(e);
}
var disengage = function () {
	dragging = false;
	context.beginPath();
}
var putPointForMobileDevices = function (e) {

	if (dragging) {
		var x = e.touches[0].clientX;
		var y = e.touches[0].clientY;
		context.lineTo(x, y);
		context.stroke();
		context.beginPath();
		context.arc(x, y, radius, 0, Math.PI * 2);
		context.fill();
		context.beginPath();
		context.moveTo(x, y);
	}

}
var putPointForDesktop = function (e) {
	if (dragging) {
		var x = e.clientX;
		var y = e.clientY;
		context.lineTo(x, y);
		context.stroke();
		context.beginPath();
		context.arc(x, y, radius, 0, Math.PI * 2);
		context.fill();
		context.beginPath();
		context.moveTo(x, y);
	}
}





canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mouseup', disengage);
canvas.addEventListener("mousemove", putPointForDesktop);

canvas.addEventListener('touchstart', engage);
canvas.addEventListener('touchend', disengage);
canvas.addEventListener("touchmove", putPointForMobileDevices);


