	    function my_latlng_to_string() {
    var latlng = arguments[0];
    var n_places = arguments[1] || 4;
    var lat = latlng.lat();
    var lng = latlng.lng();
    var factor = Math.pow(10, n_places);
    return "{lat: " + Math.round(factor * lat) / factor + ", lng: " + Math.round(factor * lng) / factor + "}";
}


function map_viewport_latlng(map, x, y){ // x is
  map_ll_bounds = map.getBounds();
        var sw_lat = map_ll_bounds.getSouthWest().lat();
        var sw_lng = map_ll_bounds.getSouthWest().lng();
        var ne_lat = map_ll_bounds.getNorthEast().lat();
        var ne_lng = map_ll_bounds.getNorthEast().lng();
    var the_lat = y*ne_lat + (1-y)*sw_lat;    
var the_lng = x*ne_lng + (1-x)*sw_lng;
    return new google.maps.LatLng(the_lat, the_lng);
}

function distance_between_latlngs(latlng1, latlng2){
    return Math.sqrt( Math.pow(latlng1.lat() - latlng2.lat(), 2) +  Math.pow(latlng1.lng() - latlng2.lng(), 2) );
}



function initialize_places_latlng(places) { // places is regular array
// put lat and lng into a LatLng object and store this in the place obj. 
    for (var i = 0; i < places.length; i++) {
        var the_place = places[i];
        console.log("In initialize_places_latlng. place: ", the_place.name);
        // the frame_center and marker_position LatLng objects:
        the_place.frame_center.latlng = new google.maps.LatLng(the_place.frame_center.lat, the_place.frame_center.lng);
        the_place.marker_position.latlng = new google.maps.LatLng(the_place.marker_position.lat, the_place.marker_position.lng);
    }
}

function initialize_places_ages(places) { // places is assoc. array here
// randomize the ages,
    var keys = Object.keys(places);
    keys.sort(function(a, b) {
        return Math.random() > 0.5;
    });
    shuffle(keys);
    randomize_array_order(keys);
    for (var i = 0; i < keys.length; i++) {
	var name = keys[i];
//	for(var name in places){ 
        var the_place = places[name];
     
        the_place.age = i;
	console.log("In Initialize_places_ages. place: ", the_place.name + ". age: " + the_place.age);
        // the frame_center and marker_position LatLng objects:
  //      the_place.frame_center.latlng = new google.maps.LatLng(the_place.frame_center.lat, the_place.frame_center.lng);
  //      the_place.marker_position.latlng = new google.maps.LatLng(the_place.marker_position.lat, the_place.marker_position.lng);
    }
}

function move_map_to_place(map, circle, info_window, the_place, zoom_offset) {
    // move map
    map.setCenter(the_place.frame_center.latlng);
    // adjust zoom level
    map.setZoom(the_place.zoom + zoom_offset);
    //move circle
    circle.setCenter(the_place.marker_position.latlng);
    circle.setRadius(the_place.radius * Math.pow(2, 10 - the_place.zoom));
    /* var mapLabel = new MapLabel({
           text: the_place.name,
    position: the_place.marker_position.latlng, //new google.maps.LatLng(50,50),
           map: map,
           fontSize: 20,
    align: 'center',
    draggable: false, // true,
         }); */

    // adjust info window
    info_window.setPosition(circle.getCenter());
    info_window.setContent(the_place.name);

} // end of move_map_to_place

function relprob(places, name) {
    var age = places[name].age;
    var size = Object.keys(places).length;
    var grow_factor = 1.2;
    var reask_delay = 2;
    var rights_in_a_row = place_rights_in_a_row(places[name]);
 //   console.log("In relprob. age, size, reask_delay:  " + age + "  " + size + "  " + reask_delay);
    var power = ((rights_in_a_row > 0) || (age < reask_delay))? age : age + (age - reask_delay) + size - reask_delay;
    var time_dilation = Math.max(1, rights_in_a_row);  
    power /= time_dilation; // if place has been correctly answered >= 2 times, it will appear less frequently.
    var relprob = Math.pow(grow_factor, power);
    relprob -= 1;
    relprob = (relprob > 0) ? relprob : 0;
    return relprob;
}
