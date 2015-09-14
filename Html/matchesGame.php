<div class="row col-md-12 text-center">
	<div>
		<p>
			<i>The one who take the last match lose.</i><br />
			How many matches do you like to remove ?
		</p>
	</div>
	<!-- <div><button id="restart" name="reset">Try again ?</button></div> -->
</div>

<div class="row col-md-12 text-center">
	<button class="nbRemove btn btn-default" id="1" name="one">One</button>
	<button class="nbRemove btn btn-default" id="2" name="two">Two</button>
	<button class="nbRemove btn btn-default" id="3" name="three">Three</button>
</div>

<div class="row col-md-12 text-center">
	<ul id="remainingMatches">
	<?php 
		$nbMatch = 13;
		for ($matches=0; $matches < $nbMatch; $matches++) {
	?>
			<li><img src="./Img/Matches_game/alumette.png" alt="| "></li>
	<?php } ?>
	</ul>
</div>