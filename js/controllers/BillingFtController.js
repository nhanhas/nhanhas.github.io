/* Logout Event */
$("#logout").click(function() {
   
	/* The REST code should be here*/	

	window.location.href = "index.html";
});


/* PHC FX navigate Event */
$("#phc_url").click(function() {
	window.open("http://www.phcfx.com");
});


/* Navigate to Invoice Listing page */
$(".controlTd").click(function() {
	var clientNo = $(this).closest("tr").find("td:nth-child(1)").text();
	
	/* The REST code should be here*/

	
});

/* send ft popup */
$(".controlTd").click(function() {
	$(".form-main").fadeTo(1,1);

	var filterVal = 'blur(2px)';
	$("#billingFtMainForm") 
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
	$("#billingFtMainForm") 
		.css('filter',filterVal)
		.css('webkitFilter',filterVal)
		.css('mozFilter',filterVal)
		.css('oFilter',filterVal)
		.css('msFilter',filterVal);
		 
});


/* send Button */
$(".sendBtn").submit(function(event) {
	event.preventDefault();
		 
});
