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


/* Menu Selected */
$("#billing").click(function() {

	/* The REST code should be here*/

	window.setTimeout(function(){waitFiveSeconds(1);}, 2000);

	//window.location.href = "billing.html";
});

/* Menu Selected */
$("#business").click(function() {

	/* The REST code should be here*/

	window.setTimeout(function(){waitFiveSeconds(2);}, 2000);

	//window.location.href = "billing.html";
});

/* Menu Selected */
$("#crm").click(function() {

	/* The REST code should be here*/

	window.setTimeout(function(){waitFiveSeconds(3);}, 2000);

	//window.location.href = "billing.html";
});








/* DUMMY */
function waitFiveSeconds(number){
	if(number == 1)
		window.location.href = "billing.html";
	else if(number == 2)
		window.location.href = "business.html";
	else if(number == 3)
		window.location.href = "crm.html";


} 