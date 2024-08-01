var colors = ['black','grey','white','red','orange','blue','pink'];

var swatches = document.getElementsByClassName('swatch');
var selectedColor=colors[i];


for(var i =0, n=colors.length; i<n; i++){
    var swatch = document.createElement('div');
    swatch.className='swatch';
    swatch.style.backgroundColor = colors[i];	 
    swatch.addEventListener('click',setSwatch);
    document.getElementById('colors').append(swatch);
	
}
function setColor(color){
	context.fillStyle = color;
	context.strokeStyle = color;
	var active = document.getElementsByClassName('active')[0];
	if(active){
		active.className = 'swatch';
	}
	
}

function setSwatch(e){
	var swatch = e.target;
	selectedColor = swatch.style.backgroundColor;
	setColor(selectedColor);
	setBorderColor(selectedColor);
	swatch.className +=' active';
}

setSwatch({target:document.getElementsByClassName('swatch')[0]});

