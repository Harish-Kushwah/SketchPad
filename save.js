var saveButton = document.getElementById("save");
saveButton.addEventListener('click',saveImage);

function saveImage(){
	//var data = canvas.toDataURL();
	//To open the tab in new window
	//window.open(data,'_blank','location=0,menubar=0');

	var win = window.open();
	win.document.write("<img src='"+canvas.toDataURL()+"'/>");

	
}