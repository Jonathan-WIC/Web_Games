var player, winner, cpt;
$(document).ready(function() {
	cpt = 0;
	$('#end_layer').hide();

	$('.cell').click(function(){
		selectCell($(this));
	});

	$('.reset_game').click(function(){
		clearGrid();
	});
});

function selectCell(cell){
	cpt++;
	player = parseInt($('.puissance4_controler').attr("player"));
	console.log(player);
	if (player == 1)
		cell.removeClass('player_2').addClass('player_1');
	else	
		cell.removeClass('player_1').addClass('player_2');
	
	testVictory(cell.data('cell'), player);
	cell.unbind('click');
	$('.puissance4_controler').attr("player", (player+1)%2);
}

function clearGrid(){
	cpt = 0;
	winner = false;
	$('.puissance4_controler').attr("player", 1);
	$('.cell').each(function(index, el) {
		$(this).off('click'); //unbind event to avoid the event called twice
		$(this).removeClass('player_1').removeClass('player_2');
		$(this).on('click', function(){
			selectCell($(this));
		})
	});
	$('#end_layer').fadeOut('fast');
}

function testVictory(cell, currentPlayer){
	if (currentPlayer == 0)
		currentPlayer = 2;


	if(cpt == 42){
		$('#end_msg').text("Spare");
		$('#end_layer').fadeIn('fast');
		return;
	}
}