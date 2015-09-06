var player, winner, cpt;
$(document).ready(function() {
	cpt = 0;

	//Cache le message de fin de jeu et son container
	$('#end_layer').hide();

	$('.cell').click(function(){
		selectCell($(this));
	});

	$('.reset_game').click(function(){
		clearGrid();
	});
});

function selectCell(cell){
	//Recup le nombre de coup joué (max 42)
	cpt++;
	//Recup le joueur courant et assigne la classe associée
	player = parseInt($('.puissance4_controler').attr("player"));
	if (player == 1)
		cell.removeClass('player_2').addClass('player_1');
	else	
		cell.removeClass('player_1').addClass('player_2');
	
	//Vérifie si le joueur courant a gagné
	testVictory(cell.data('cell'), player);
	//Empeche de recliquer sur la cellule
	cell.unbind('click');

	//Change de joueur
	$('.puissance4_controler').attr("player", (player+1)%2);
}

function clearGrid(){
	cpt = 0;
	winner = false;

	//Le joeuur 1 commence toujours
	$('.puissance4_controler').attr("player", 1);

	//Remet à 0 chaque cellule
	$('.cell').each(function(index, el) {
		$(this).off('click'); //unbind event to avoid the event called twice
		$(this).removeClass('player_1').removeClass('player_2');
		$(this).on('click', function(){
			selectCell($(this));
		})
	});

	//Cache le layer de fin
	$('#end_layer').fadeOut('fast');
}

function testVictory(cell, currentPlayer){
	//currentPlayer est égale à 1 ou à 0  ===>  le joueur 1 correspond à 1 et le joueur 2 a 0 (d'où la condition suivante)
	if (currentPlayer == 0)
		currentPlayer = 2;

	//Si il y a 42 coups, alors fin du jeu car égalité
	if(cpt == 42){
		$('#end_msg').text("Spare");
		$('#end_layer').fadeIn('fast');
		return;
	}
}