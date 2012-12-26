
var map;
var place;

function initialize() {
    var gc = new google.maps.Geocoder();
    var GBcities = [
	'London, UK', 'Birmingham, UK', 'Leeds, UK', 
	'Glasgow, UK', 'Sheffield, UK', 'Bradford, UK',
	'Edinburgh, UK', 'Liverpool, UK', 'Manchester, UK', 
	'Bristol, UK', 'Wakefield, UK', 'Cardiff, UK',
	'Coventry, UK', 'Nottingham, UK', 'Leicester, UK', 
	'Sunderland, UK', 'Newcastle upon Tyne, UK'
    ];
    shuffle(GBcities);

    gc.geocode({'address': GBcities[0]}, function(a, b){
	var mapOptions = {
	    center: a[0].geometry.location,
	    zoom: 12,
	    mapTypeId: google.maps.MapTypeId.SATELLITE,
	    draggable: false,
	    scrollwheel: false,
	    disableDoubleClickZoom: true,
	    disableDefaultUI: true      
	};	
	map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    });
}

function check_answer(text){
    console.log("text: " + text);
}
