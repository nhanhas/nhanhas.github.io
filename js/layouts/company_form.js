/* This class will show the popup loading */

 $(".controlTd").click(function(event){
	event.preventDefault();
	 
	$('#companyMainForm').fadeOut(500);

	$('.container').addClass('form-success');
});