var map = new Map("map");
var x = 7;
var y = 7;
var joueur = new Personnage("perso.png", x, y, DIRECTION.BAS)

map.addPersonnage(joueur);

window.onload = function() {

	/*************************************************************************/
	/*  /!\ do not use jquery required to make getContext funtion works /!\  */
	/*************************************************************************/
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	canvas.width  = map.getLargeur() * 32;
    canvas.height = map.getHauteur() * 32;

    setInterval(function() {
        map.dessinerMap(ctx);
    }, 40);
}

window.onkeydown = function(event) {
	var e = event || window.event;
	var key = e.which || e.keyCode;

	switch(key) {
		case 37 : 
			joueur.deplacer(DIRECTION.GAUCHE, map);
			break;
		case 38 : 
			joueur.deplacer(DIRECTION.HAUT, map);
			break;
		case 39 : 
			joueur.deplacer(DIRECTION.DROITE, map);
			break;
		case 40 : 
			joueur.deplacer(DIRECTION.BAS, map);
			break;
		default :
			return true;
	}
    return false;
}
