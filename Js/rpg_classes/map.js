function Map(nom){

	// Création de l'objet XmlHttpRequest
	var xhr = getXMLHttpRequest();

	// Chargement du fichier
	xhr.open("GET", 'Assets/rpg/maps/' + nom + '.json', false);
	xhr.send(null);
	if(xhr.readyState != 4 || (xhr.status != 200 && xhr.status != 0)) // Code == 0 en local
	    throw new Error("Impossible de charger la carte nommée \"" + nom + "\" (code HTTP : " + xhr.status + ").");
	var mapJsonData = xhr.responseText;

	// Analyse des données
	var mapData = JSON.parse(mapJsonData);
	//récupéeation du tileset utilisé et de la config de la map
	this.tileset = new Tileset(mapData.tileset);
	this.terrain = mapData.terrain;
}

// Pour récupérer la taille (en tiles) de la carte
Map.prototype.getHauteur = function() {
    return this.terrain.length;
}

Map.prototype.getLargeur = function() {
    return this.terrain[0].length; //La largeur est égale à la taille de n'importe quelle ligne (ici la ligne 0)
}

Map.prototype.dessinerMap = function(context) {
	for(var i = 0; i < this.terrain.length; i++) {
		var ligne = this.terrain[i];
		var y = i * 32; //get y_pos
		for(var j = 0; j < ligne.length ; j++) {
			var x = j * 32; //get x_pos
			this.tileset.dessinerTile(ligne[j], context, x, y);
		}
	}
}