var SIZE = 4;
$(document).ready(function() {
	$('.test').click(Addrandom());
});

function Addrandom(){
	var xPos, yPos;
	xPos = Math.floor(Math.random() * SIZE+1); //need to add 1 for mathematics purpose.
	yPos = Math.floor(Math.random() * SIZE+1);

	var $cell = $('.gridRow:nth-child('+yPos+')').find('.gridCell:nth-child('+xPos+')');
	$cell.css('background-color', '#EEE4DA');
	$cell.html('<p>2</p>');
};