var brush = document.getElementById("brush");

var isBrushSelected = false;
var brushRadius = 15;

brush.addEventListener('click',activatePen);
function setBorderColor(color){
    if(isBrushSelected){
        brush.style.borderColor=color;
    }
    else{
        brush.style.borderColor=selectedColor;
    }
}
function activatePen(e){
    if(!isBrushSelected){
        setRadius(brushRadius);
        e.target.className +=' active-pen';
        isBrushSelected = true;
    }
    else{
        setRadius(defaultRad)
        e.target.classList.remove("active-pen");
        isBrushSelected = false;
    }

}

//set the default color for the pen
setBorderColor()
