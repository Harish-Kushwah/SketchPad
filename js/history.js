var historyStack = [];
var redoStack = [];
var maxHistoryLength = 10;
var isDuringUndoRedo = false;

function saveState() {
	if (isDuringUndoRedo) return;
	
	var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
	historyStack.push(imageData);
	
	if (historyStack.length > maxHistoryLength) {
		historyStack.shift();
	}
	
	redoStack = [];
	updateUndoRedoButtons();
}

function undo() {
	if (historyStack.length > 0) {
		isDuringUndoRedo = true;
		
		var currentState = context.getImageData(0, 0, canvas.width, canvas.height);
		redoStack.push(currentState);
		
		var previousState = historyStack.pop();
		context.putImageData(previousState, 0, 0);
		
		isDuringUndoRedo = false;
		updateUndoRedoButtons();
	}
}

function redo() {
	if (redoStack.length > 0) {
		isDuringUndoRedo = true;
		
		var currentState = context.getImageData(0, 0, canvas.width, canvas.height);
		historyStack.push(currentState);
		
		var nextState = redoStack.pop();
		context.putImageData(nextState, 0, 0);
		
		isDuringUndoRedo = false;
		updateUndoRedoButtons();
	}
}

function updateUndoRedoButtons() {
	var undoButton = document.getElementById('undo');
	var redoButton = document.getElementById('redo');
	
	if (undoButton) {
		if (historyStack.length === 0) {
			undoButton.classList.add('disabled');
		} else {
			undoButton.classList.remove('disabled');
		}
	}
	
	if (redoButton) {
		if (redoStack.length === 0) {
			redoButton.classList.add('disabled');
		} else {
			redoButton.classList.remove('disabled');
		}
	}
}

function initHistory() {
	var undoButton = document.getElementById('undo');
	var redoButton = document.getElementById('redo');
	
	if (undoButton) {
		undoButton.addEventListener('click', function(e) {
			e.preventDefault();
			undo();
		});
	}
	
	if (redoButton) {
		redoButton.addEventListener('click', function(e) {
			e.preventDefault();
			redo();
		});
	}
	
	document.addEventListener('keydown', function(e) {
		if (e.ctrlKey || e.metaKey) {
			if (e.key === 'z' || e.key === 'Z') {
				if (e.shiftKey) {
					e.preventDefault();
					redo();
				} else {
					e.preventDefault();
					undo();
				}
			} else if (e.key === 'y' || e.key === 'Y') {
				e.preventDefault();
				redo();
			}
		}
	});
	
	updateUndoRedoButtons();
}

window.addEventListener('load', function() {
	setTimeout(initHistory, 100);
});
