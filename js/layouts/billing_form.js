/* This class will show the popup loading */

 $(".controlTd").click(function(event){
	event.preventDefault();
	 
	$('#billingMainForm').fadeOut(500);

	$('.container').addClass('form-success');
});