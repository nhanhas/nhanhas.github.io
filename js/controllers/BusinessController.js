/* Initialize ISOTOPE */
$('#isotopeContainer').isotope()

var $container = $('#isotopeContainer');
	// init
	$container.isotope({
	// options
	itemSelector: '.menu',
	layoutMode: 'masonry',
	masonry: {
		columnWidth: 160
  }

});
/* ISOTOPE Initialized*/


/* Logout Event */
$("#logout").click(function() {
   
	/* The REST code should be here*/	

	window.location.href = "index.html";
});


/* PHC FX navigate Event */
$("#phc_url").click(function() {
	window.open("http://www.phcfx.com");
});

$(".flatTable .plusTd").click(function() {
	$(".form-main").fadeTo(1,1);

	var filterVal = 'blur(2px)';
	$("#businessMainForm") 
		.css('filter',filterVal)
		.css('webkitFilter',filterVal)
		.css('mozFilter',filterVal)
		.css('oFilter',filterVal)
		.css('msFilter',filterVal);
		 
});



/* Option Faturas Selected */
$("#faturas").click(function() {

	/* The REST code should be here*/

	window.setTimeout(function(){waitFiveSeconds(1);}, 2000);

	//window.location.href = "business_ft.html";
});

/* Option Dossiers Selected */
$("#dossiers").click(function() {

	/* The REST code should be here*/

	window.setTimeout(function(){waitFiveSeconds(2);}, 2000);

	//window.location.href = "business_ft.html";
});






/* DUMMY */
function waitFiveSeconds(number){
	if(number == 1)
		window.location.href = "business_ft.html";
	else if(number == 2)
		window.location.href = "business_bo.html";


} 