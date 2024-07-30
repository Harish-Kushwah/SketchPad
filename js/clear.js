var clearButton = document.getElementById('clear');


function clearCanvas(){
	context.clearRect(0, 0, canvas.width, canvas.height); 
	context.beginPath();
}

clearButton.addEventListener('click',clearCanvas);
