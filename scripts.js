$(document).ready(function(){/*ready zorgt er voor het script hieronder wacht, tot dat de hele webstite geladen is*/
	
$('article').on('mouseenter', function(){
	$('#zoom').html($(this).html() );
	});	
});