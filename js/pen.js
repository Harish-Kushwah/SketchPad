var pen = document.getElementById("pen");

var isPenSelected = false;
var penRadius = 3;

pen.addEventListener('click',activatePen);
function setBorderColor(color){
    if(isPenSelected){
        pen.style.borderColor=color;
    }
    else{
        pen.style.borderColor=selectedColor;
    }
}
function activatePen(e){
    if(!isPenSelected){
        setRadius(penRadius);
        e.target.className +=' active-pen';
        isPenSelected = true;
    }
    else{
        setRadius(defaultRad)
        e.target.classList.remove("active-pen");
        isPenSelected = false;
    }

}

//set the default color for the pen
setBorderColor()
