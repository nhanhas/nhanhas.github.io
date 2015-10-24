/* This class will show the popup loading */

$("#faturas").click(function(event){
	event.preventDefault();
	 
	$('#isotopeContainer').fadeOut(500);
	$('#businessMainForm').fadeOut(500);

	$('.container').addClass('form-success');
});


$("#dossiers").click(function(event){
	event.preventDefault();
	 
	$('#isotopeContainer').fadeOut(500);
	$('#businessMainForm').fadeOut(500);

	$('.container').addClass('form-success');
});