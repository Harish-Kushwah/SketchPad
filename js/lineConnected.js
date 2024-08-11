var lineF2 = document.getElementById("lineF2");

var isLineSelectedF2 = false;
lineF2.addEventListener('click',activateLine);

var lineDrawing = false;
var startX ,startY;
function engageLine(e){
    lineDrawing = true; 
    startX = e.clientX;
    startY = e.clientY;
}

var disengageLine = function (e) {
	lineDrawing = false;
	// context.beginPath();

    var x = e.clientX;
    var y = e.clientY;
    context.moveTo(startX, startY);
    context.lineTo(x, y);
    context.fill();
    context.stroke();
    // context.beginPath();
}
let putLineForDesktop2 = function (e) {
    if(lineDrawing){
	 var x = e.clientX;
	 var y = e.clientY;
	 context.moveTo(startX, startY);
	 context.lineTo(x, y);
     context.fill();
	 context.stroke();
    }
}

function activateLine(){
    if(!isLineSelectedF2){
        canvas.addEventListener('mousedown', engageLine);
        canvas.addEventListener('mouseup', disengageLine);
       canvas.addEventListener('mousemove',putLineForDesktop2);
        isLineSelectedF2 = true;
        lineF2.className +=' active-pen';
    }
    else{
        lineF2.classList.remove("active-pen");
        isLineSelectedF2 = false;
    }
}
