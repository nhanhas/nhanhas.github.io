/* This class will show the popup loading */

 $(".controlTd").click(function(event){
	event.preventDefault();
	 
	$('#crmMainForm').fadeOut(500);

	$('.container').addClass('form-success');
});