/* Logout Event */
$("#logout").click(function() {
   
	/* The REST code should be here*/	

	window.location.href = "index.html";
});


/* PHC FX navigate Event */
$("#phc_url").click(function() {
	window.open("http://www.phcfx.com");
});

/* open add clp popup */
$(".flatTable .plusTd").click(function() {
	$(".form-main").fadeTo(1,1);

	var filterVal = 'blur(2px)';
	$("#crmMainForm") 
		.css('filter',filterVal)
		.css('webkitFilter',filterVal)
		.css('mozFilter',filterVal)
		.css('oFilter',filterVal)
		.css('msFilter',filterVal);

	window.setTimeout(waitOneSecondToRender, 1000);
	 
});

/* close add clp popup */
$(".closeBtn").click(function() {
	$(".form-main").fadeTo(1,0);

	$(".modal")
		.css('display','none');

	var filterVal = 'blur(0)';
	$("#crmMainForm") 
		.css('filter',filterVal)
		.css('webkitFilter',filterVal)
		.css('mozFilter',filterVal)
		.css('oFilter',filterVal)
		.css('msFilter',filterVal);
		 
});


/* Navigate to Lead detail page */
$(".controlTd").click(function() {
	var clientNo = $(this).closest("tr").find("td:nth-child(1)").text();
	
	/* The REST code should be here*/

	window.setTimeout(waitFiveSeconds, 2000);

	//window.location.href = "billing_ft.html";
});


/* DUMMY */
function waitFiveSeconds(){
	window.location.href = "crm_clp.html";


} 


/*	GOOGLE MAPS 
	==============================================================================================================================================
*/


function waitOneSecondToRender(){
	open_map_init();
} 


function open_map_init() {

  var markers = [];
  var map = new google.maps.Map(document.getElementById('google_maps'), {
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-33.8902, 151.1759),
      new google.maps.LatLng(-33.8474, 151.2631));
  map.fitBounds(defaultBounds);

  // Create the search box and link it to the UI element.
  var input = /** @type {HTMLInputElement} */(
      document.getElementById('morada'));
  //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  var searchBox = new google.maps.places.SearchBox(
    /** @type {HTMLInputElement} */(input));

  // [START region_getplaces]
  // Listen for the event fired when the user selects an item from the
  // pick list. Retrieve the matching places for that item.
  google.maps.event.addListener(searchBox, 'places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    for (var i = 0, marker; marker = markers[i]; i++) {
      marker.setMap(null);
    }

    // For each place, get the icon, place name, and location.
    markers = [];
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, place; place = places[i]; i++) {
      var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      var marker = new google.maps.Marker({
        map: map,
        icon: image,
        title: place.name,
        position: place.geometry.location
      });

      markers.push(marker);

      bounds.extend(place.geometry.location);
    }

    map.fitBounds(bounds);
  });
  // [END region_getplaces]

  // Bias the SearchBox results towards places that are within the bounds of the
  // current map's viewport.
  google.maps.event.addListener(map, 'bounds_changed', function() {
    var bounds = map.getBounds();
    searchBox.setBounds(bounds);
  });

}
