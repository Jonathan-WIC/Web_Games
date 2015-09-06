$(document).ready( function() {
});

function GameOver() {
	if(confirm("GAME OVER!\nWould you like to try again ?")) {

			matches.show();
			remainingMatches = matches.length;
	}
}

// USE TO COUNT MATCHES
var matches = $('#remainingMatches li');
var remainingMatches = matches.length;

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

	matches.slice(remainingMatches - parseInt(nbRemove)).hide();
	remainingMatches -= parseInt(nbRemove);
	
});