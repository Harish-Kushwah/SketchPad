var pen = document.getElementById("pen");
var brush = document.getElementById("brush");
var eraser = document.getElementById("eraser");
var pencil = document.getElementById("pencil");

var isBrushSelected = false;
var brushRadius = 15;

var isPenSelected = false;
var penRadius = 3;

var isEraserSelected = false;
var eraserSize = 10;

var isPencilSelected = false;
var pencilRadius = 1;

pen.addEventListener('click',activatePen);
brush.addEventListener('click',activateBrush);
eraser.addEventListener('click', activateEraser);
pencil.addEventListener('click',activatePencil);


function setBorderColor(color){
    if(isPenSelected){
        pen.style.borderColor=color;
    }
    else{
        pen.style.borderColor=selectedColor;
    }

    if(isBrushSelected){
        brush.style.borderColor=color;
    }
    else{
        brush.style.borderColor=selectedColor;
    }

    if(isPencilSelected){
        pencil.style.borderColor = color;
    }
    else{
        pencil.style.borderColor = selectedColor;
    }

}

function activatePen(){
    if(!isPenSelected){
        setRadius(penRadius);
        pen.className +=' active-pen';
        isPenSelected = true;
        deactivateBrush(penRadius);
        deactivateEraser(penRadius);
        deactivatePencil(penRadius);
    }
    else{
        setRadius(defaultRad)
        pen.classList.remove("active-pen");
        isPenSelected = false;
    }

}
function deactivatePen(radius){
    setRadius(radius)
    pen.classList.remove("active-pen");
    isPenSelected = false;
}



function activateBrush(e){
    if(!isBrushSelected){
        setRadius(brushRadius);
        e.target.className +=' active-pen';
        isBrushSelected = true;

        deactivatePen(brushRadius);
        deactivateEraser(brushRadius);
        deactivatePencil(brushRadius);
    }
    else{
        setRadius(defaultRad)
        e.target.classList.remove("active-pen");
        isBrushSelected = false;
    }

}
function deactivateBrush(radius){
    setRadius(radius)
    brush.classList.remove("active-pen");
    isBrushSelected = false;
}


function activateEraser(){
    if(!isEraserSelected){
        setRadius(eraserSize);
        eraser.className +=' active-pen';
        isEraserSelected = true;
        deactivatePen(eraserSize);
        deactivateBrush(eraserSize);
        deactivatePencil(eraserSize);
        setColor('white');
    }
    else{
        setRadius(defaultRad)
        setColor(selectedColor);
        eraser.classList.remove("active-pen");
        isEraserSelected = false;
    }
}

function deactivateEraser(radius){
    setRadius(radius)
    setColor(selectedColor);
    eraser.classList.remove("active-pen");
    isEraserSelected = false;
}

function activatePencil(){
    if(!isPencilSelected){
        setRadius(pencilRadius);
        pencil.className +=' active-pen';
        isPencilSelected = true;

        deactivatePen(pencilRadius);
        deactivateEraser(pencilRadius);
        deactivateBrush(pencilRadius);
    }
    else{
        setRadius(defaultRad)
        pencil.classList.remove("active-pen");
        isPencilSelected = false;
    }
}

function deactivatePencil(radius){
    setRadius(radius)
    pencil.classList.remove("active-pen");
    isPencilSelected = false;
}

//set the default active
activatePen();