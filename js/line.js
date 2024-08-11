var line = document.getElementById("line");

var isLineSelected = false;
line.addEventListener('click', activateLine);

var lineDrawing = true;
function lineWorking(e) {
    let startX = 0, startY = 0;
    function engageLine(e) {
        if (startX == 0 && startY == 0) {
            startX = e.clientX;
            startY = e.clientY;
        }
    }

    var disengageLine = function (e) {
        if (startX != 0 && startY != 0) {
            var x = e.clientX;
            var y = e.clientY;
            context.moveTo(startX, startY);
            // context.beginPath();
            context.lineTo(x, y);
            context.stroke();
            context.beginPath();

            startX = 0;
            startY = 0;
        }
    }
    // engageLine(e);
    // disengageLine(e);
}

var putLineForDesktop1 = function (e) {

    var x = e.clientX;
    var y = e.clientY;
    context.moveTo(startX, startX);
    context.stroke();
}

function activateLine() {
    if (!isLineSelected) {
        canvas.addEventListener('mousedown', lineWorking);
        canvas.addEventListener('mouseup', lineWorking);
        // canvas.addEventListener('mousemove',putLineForDesktop1);
        isLineSelected = true;
        line.className += ' active-pen';
    }
    else {
        line.classList.remove("active-pen");
        isLineSelected = false;

    }
}
