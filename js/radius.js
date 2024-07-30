
var minRad = 0.5,
    maxRad = 100,
    defaultRad = 10,
    interval = 2,
    radSpan = document.getElementById("radval"),
    decRad  = document.getElementById("decrad"),
    incRad  = document.getElementById("incrad");

var setRadius = function(newRadius){
	if(newRadius<minRad){
		newRadius = minRad;
	}
	else if(newRadius>maxRad){
	       newRadius = maxRad;	
	}
	radius = newRadius;
	context.lineWidth = radius*2;
	radSpan.innerHTML = radius;
}	

decRad.addEventListener('click',function(){
	setRadius(radius-interval);
	console.log(newRadius);
}); 
incRad.addEventListener('click',function(){
	setRadius(radius+interval);
}); 

setRadius(defaultRad);
			

window.onresize = function(){
	var image = context.getImageData(0,0,canvas.width,canvas.height);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context.putImageData(image,0,0);
	setRadius(radSpan.innerHTML);

}