/* Logout Event */
$("#logout").click(function() {
   
	/* The REST code should be here*/	

	window.location.href = "index.html";
});


/* PHC FX navigate Event */
$("#phc_url").click(function() {
	window.open("http://www.phcfx.com");
});

/* Select the Company */
$(".controlTd").click(function() {

	/* The REST code should be here*/	

	window.setTimeout(waitFiveSeconds, 2000);
});


/* DUMMY */
function waitFiveSeconds(){
	window.location.href = "lobby.html";


} 