function Tileset(nom) {

    // Chargement de l'image dans l'attribut image
    this.image = new Image();
    this.image.referenceDuTileset = this;

    this.image.onload = function() {
        if(!this.complete) 
            throw new Error("Erreur de chargement du tileset nommé \"" + nom + "\".");

        // nombre de tiles en largeur
        this.referenceDuTileset.largeur = this.width / 32;
    }

    //url complete du tileset
    this.image.src = "Assets/rpg/tilesets/" + nom;
}

// Méthode de dessin du tile numéro "numero" dans le contexte 2D "context" aux coordonnées x et y
Tileset.prototype.dessinerTile = function(numero, context, xDestination, yDestination) {

	//Recup la colonne de la cellule (si mod 0 par la largeur alors c'est la dernière colonne)
	var xSourceEnTiles = numero % this.largeur;
	if(xSourceEnTiles == 0) xSourceEnTiles = this.largeur;

	//Recup la ligne de la cellule
	var ySourceEnTiles = Math.ceil(numero/this.largeur);

	//on repasse les pos en coordonnées (commence à 0 donc -1)
	var xSource = (xSourceEnTiles - 1) * 32;
	var ySource = (ySourceEnTiles - 1) * 32;

	context.drawImage(this.image, xSource, ySource, 32, 32, xDestination, yDestination, 32, 32);
}