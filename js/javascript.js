window.addEventListener('load', function() {
    setTimeout(scrollTo, 0, 0, 1);
}, false);



window.onload = function initialLoad() {
    updateOrientation();
}

function updateOrientation(){
    var contentType = "show_";
    switch(window.orientation){
    case 0:
	contentType += "normal";
	break;

	case -90:
	contentType += "right";
	break;

	case 90:
	contentType += "left";
	break;

	case 180:
	contentType += "flipped";
	break;
    }
    document.getElementById("id_div").setAttribute("class", contentType);
}
