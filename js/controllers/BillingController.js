/* Logout Event */
$("#logout").click(function() {
   
	/* The REST code should be here*/	

	window.location.href = "index.html";
});


/* PHC FX navigate Event */
$("#phc_url").click(function() {
	window.open("http://www.phcfx.com");
});

/* New Customer popup */
$(".flatTable .plusTd").click(function() {
	$(".form-main").fadeTo(1,1);

	var filterVal = 'blur(2px)';
	$("#billingMainForm") 
		.css('filter',filterVal)
		.css('webkitFilter',filterVal)
		.css('mozFilter',filterVal)
		.css('oFilter',filterVal)
		.css('msFilter',filterVal);
		 
});

/* close ft popup */
$(".closeBtn").click(function() {
	$(".form-main").fadeTo(1,0);

	$(".modal")
		.css('display','none');

	var filterVal = 'blur(0)';
	$("#billingMainForm") 
		.css('filter',filterVal)
		.css('webkitFilter',filterVal)
		.css('mozFilter',filterVal)
		.css('oFilter',filterVal)
		.css('msFilter',filterVal);
		 
});

/* Navigate to Invoice Listing page */
$(".controlTd").click(function() {
	var clientNo = $(this).closest("tr").find("td:nth-child(1)").text();
	
	/* The REST code should be here*/

	window.setTimeout(waitFiveSeconds, 2000);

	//window.location.href = "billing_ft.html";
});


/* DUMMY */
function waitFiveSeconds(){
	window.location.href = "billing_ft.html";


} 