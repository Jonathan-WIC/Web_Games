var player, winner, cpt;
$(document).ready(function() {
	cpt = 0;
	$('#end_layer').hide();
	console.log('miaou');

	$('.cell').click(function(){
		selectCell($(this));
	});

	$('.reset_game').click(function(){
		clearGrid();
	});
});

function selectCell(cell){
	cpt++;
	player = parseInt($('.morpion_controler').attr("player"));
	if (player == 1)
		cell.removeClass('player_2').addClass('player_1');
	else	
		cell.removeClass('player_1').addClass('player_2');
	
	testVictory(cell.data('cell'), player);
	cell.unbind('click');
	$('.morpion_controler').attr("player", (player+1)%2);
}

function clearGrid(){
	cpt = 0;
	winner = false;
	$('.morpion_controler').attr("player", 1);
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
	//Vertical
	var test_1 = $('.cell1').hasClass('player_'+currentPlayer) && $('.cell4').hasClass('player_'+currentPlayer) && $('.cell7').hasClass('player_'+currentPlayer);
	var test_2 = $('.cell2').hasClass('player_'+currentPlayer) && $('.cell5').hasClass('player_'+currentPlayer) && $('.cell8').hasClass('player_'+currentPlayer);
	var test_3 = $('.cell3').hasClass('player_'+currentPlayer) && $('.cell6').hasClass('player_'+currentPlayer) && $('.cell9').hasClass('player_'+currentPlayer);
	//Horizontal
	var test_4 = $('.cell1').hasClass('player_'+currentPlayer) && $('.cell2').hasClass('player_'+currentPlayer) && $('.cell3').hasClass('player_'+currentPlayer);
	var test_5 = $('.cell4').hasClass('player_'+currentPlayer) && $('.cell5').hasClass('player_'+currentPlayer) && $('.cell6').hasClass('player_'+currentPlayer);
	var test_6 = $('.cell7').hasClass('player_'+currentPlayer) && $('.cell8').hasClass('player_'+currentPlayer) && $('.cell9').hasClass('player_'+currentPlayer);
	//Diagonal
	var test_7 = $('.cell1').hasClass('player_'+currentPlayer) && $('.cell5').hasClass('player_'+currentPlayer) && $('.cell9').hasClass('player_'+currentPlayer);
	var test_8 = $('.cell3').hasClass('player_'+currentPlayer) && $('.cell5').hasClass('player_'+currentPlayer) && $('.cell7').hasClass('player_'+currentPlayer);

	//victory conditions
	switch(cell){
		case 1:
			if(test_1 || test_4 || test_7){
				$('#end_msg').text("player "+ currentPlayer +" Wins !");
				$('#end_layer').fadeIn('fast');
				return;
			}
			break;
		case 2:
			if(test_2 || test_4){
				$('#end_msg').text("player "+ currentPlayer +" Wins !");
				$('#end_layer').fadeIn('fast');
				return;
			}
			break;
		case 3:
			if(test_3 || test_4 || test_8){
				$('#end_msg').text("player "+ currentPlayer +" Wins !");
				$('#end_layer').fadeIn('fast');
				return;
			}
			break;
		case 4:
			if(test_1 || test_5){
				$('#end_msg').text("player "+ currentPlayer +" Wins !");
				$('#end_layer').fadeIn('fast');
				return;
			}
			break;
		case 5:
			if(test_2 || test_5 || test_7 || test_8){
				$('#end_msg').text("player "+ currentPlayer +" Wins !");
				$('#end_layer').fadeIn('fast');
				return;
			}
			break;
		case 6:
			if(test_3 || test_5){
				$('#end_msg').text("player "+ currentPlayer +" Wins !");
				$('#end_layer').fadeIn('fast');
				return;
			}
			break;
		case 7:
			if(test_1 || test_6 || test_8){
				$('#end_msg').text("player "+ currentPlayer +" Wins !");
				$('#end_layer').fadeIn('fast');
				return;
			}
			break;
		case 8:
			if(test_2 || test_6){
				$('#end_msg').text("player "+ currentPlayer +" Wins !");
				$('#end_layer').fadeIn('fast');
				return;
			}
			break;
		case 9:
			if(test_3 || test_6 || test_7){
				$('#end_msg').text("player "+ currentPlayer +" Wins !");
				$('#end_layer').fadeIn('fast');
				return;
			}
			break;

		default:
			alert("WTF are you fucking doing ?!?");
			break;
	}
	if(cpt == 9){
		$('#end_msg').text("Spare");
		$('#end_layer').fadeIn('fast');
		return;
	}
}