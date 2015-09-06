$(document).ready( function() {
});

// USE TO FINISH THE GAME
function GameOver() {
	if(confirm("GAME OVER!\nWould you like to try again ?")) {

			matches.show();
			remainingMatches = matches.length;
	}
}

// USE TO COUNT MATCHES
var matches = $('#remainingMatches li img');
var remainingMatches = matches.length;

// TAILLE DU UL #remainingMatches
var matchesSize = 20.5;
$('#remainingMatches').css('width', (matchesSize * remainingMatches) + 'px');

// MAIN GAME
$(".nbRemove").click(function() {
	var nbRemove = this.id;
	
	if(nbRemove > remainingMatches) {
		alert("There are not enough matches.");
		return;
	}
	else if(nbRemove == remainingMatches || remainingMatches == 1) {
		GameOver();

		return;
	}

	matches.slice(remainingMatches - parseInt(nbRemove)).css('visibility', 'hidden');
	remainingMatches -= parseInt(nbRemove);
	
});