<div class="row text-center">
	<div class="col-md-11">
		<p>
			<i>The one who take the last match lose.</i><br />
			How many matches do you like to remove ?
		</p>
	</div>
	<div class="col-md-1">
		<button id="option" name="option" class="btn btn-default">
			<i class="fa fa-cog fa-lg"></i>
		</button>
	</div>
</div>

<div class="row col-md-12 text-center">
	<button class="nbRemove btn btn-primary" id="1" name="one">One</button>
	<button class="nbRemove btn btn-primary" id="2" name="two">Two</button>
	<button class="nbRemove btn btn-primary" id="3" name="three">Three</button>
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