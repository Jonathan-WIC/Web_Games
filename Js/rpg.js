//var map = new Map("map");
var map = new Map("map");

window.onload = function() {

	/*************************************************************************/
	/*  /!\ do not use jquery required to make getContext funtion works /!\  */
	/*************************************************************************/
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	canvas.width  = map.getLargeur() * 32;
    canvas.height = map.getHauteur() * 32;

    map.dessinerMap(ctx);
}