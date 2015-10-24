/* Logout Event */
$("#logout").click(function() {
   
	/* The REST code should be here*/	

	window.location.href = "index.html";
});


/* PHC FX navigate Event */
$("#phc_url").click(function() {
	window.open("http://www.phcfx.com");
});


function init(){
	//initialize Google Maps
	open_map_init();
}


/*	GOOGLE MAPS 
	==============================================================================================================================================
*/

function open_map_init() {

  var address = $('#morada').val() + ", " + $('#localidade').val();

  var markers = [];
  var map = new google.maps.Map(document.getElementById('google_maps'), {
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  	geocoder = new google.maps.Geocoder();
    geocoder.geocode({
        'address': address
    }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var myOptions = {
                zoom: 16,
                center: results[0].geometry.location,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            map = new google.maps.Map(document.getElementById("google_maps"), myOptions);

            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        }
    });	
  // [END region_getplaces]

  // Bias the SearchBox results towards places that are within the bounds of the
  // current map's viewport.
  google.maps.event.addListener(map, 'bounds_changed', function() {
    var bounds = map.getBounds();
    searchBox.setBounds(bounds);
  });
}