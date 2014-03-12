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

    return google.maps.geometry.spherical.computeDistanceBetween(latlng1, latlng2);

  //  return Math.sqrt( Math.pow(latlng1.lat() - latlng2.lat(), 2) +  Math.pow(latlng1.lng() - latlng2.lng(), 2) );
}



function initialize_places_latlng(places) { // places is regular array
// put lat and lng into a LatLng object and store this in the place obj. 
    for (var i = 0; i < places.length; i++) {
        var the_place = places[i];
   //     console.log("In initialize_places_latlng. place: ", the_place.name);
        // the frame_center and marker_position LatLng objects:
        the_place.frame_center.latlng = new google.maps.LatLng(the_place.frame_center.lat, the_place.frame_center.lng);
        the_place.marker_position.latlng = new google.maps.LatLng(the_place.marker_position.lat, the_place.marker_position.lng);
    }
}

function initialize_places_ages(places) { // places can be either reg. or  assoc. array here.
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
//	console.log("In Initialize_places_ages. place: ", the_place.name + ". age: " + the_place.age);
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

function place_rights_in_a_row(place) {
    var rights_in_a_row = 0;
    for (var i = 0; i < place.history.length; i++) { // just
        if (place.history[i].correct !== true) {
            break;
        }
        rights_in_a_row++;
    }
    return rights_in_a_row;
}

function relprob(places, name) {
 //   console.log("YYY: " + JSON.stringify(places[name]) );
    var age = places[name].age;
    var size = Object.keys(places).length;
 //   console.log("age, size: " + age + "  " + size);
    var grow_factor = 1.2;
    var reask_delay = 2;
 // console.log("YYYa: " + JSON.stringify(places[name]) );
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

function random_place(places, rnumb) { // places is assoc. array; keys are names
// does it also work for regular array? 
// console.log("Random number: " + rnumb);
    if(arguments.length === 1){ rnumb = Math.random(); } 
/*    console.log("Random number: " + rnumb);
    for(var nom in places){
	console.log("AAAA nom: " + nom + "; " + places[nom].name);
    } */
    var sum_prob = 0;
    var cume_probs = new Object;
        for (var name in places) { 
	   
            places[name].relprob = relprob(places, name);
            sum_prob += places[name].relprob;
	    cume_probs[name] = sum_prob;
	    places[name].age++;
//	    console.log("relprob: " + places[name].relprob );
//  console.log("key, place: " + name + "  " + places[name].name + " sumprob: " + sum_prob);
        }
    var rprob = sum_prob * rnumb; // Math.random();
	for(var name in places){
//	    console.log("key, placename: " + name + "  " + places[name].name + "; cumeprob: " + cume_probs[name] + " " + rprob);
            if (cume_probs[name] >= rprob) {
// console.log("xxxkey, placename: " + name + "  " + places[name].name + "; cumeprob: " + cume_probs[name] + " " + rnumb);
                places[name].age = 0; // relprob = 1;
		return name; // places[name]; // return the place object
            } 
        }   
    return Object.keys(places)[0]; // Shouldn't get here, if does, return 0th element.
}


// the following doesn't seem to be used
function place_markers_on_map(map, places) {
    map_ll_bounds = map.getBounds();
    var sw_lat = map_ll_bounds.getSouthWest().lat();
    var sw_lng = map_ll_bounds.getSouthWest().lng();
    var ne_lat = map_ll_bounds.getNorthEast().lat();
    var ne_lng = map_ll_bounds.getNorthEast().lng();
 //   console.log("this: " + this);
 //   console.log("map ll bounds: " + map_ll_bounds.toString());
    //	console.log("i place position: " + i + "  " + places[i].name + "  " + places[i].
    for (var i = 0; i < places.length; i++) {
        var side_marker_position = // new google.maps.LatLng(0.95*sw_lat + 0.05*ne_lat, sw_lng + (i+0.5)*(ne_lng-sw_lng)/(places.length-1));
        new google.maps.LatLng(ne_lat + (i + 2) * (sw_lat - ne_lat) / (places.length + 3), 0.9 * sw_lng + 0.1 * ne_lng);

        var the_place_position = places[i].marker_position.latlng;
        // control directin of animation with the following two positions:
        var init_marker_position = side_marker_position;
        var dest_marker_position = the_place_position;
        var the_marker = new MarkerWithLabel({
            position: init_marker_position,
            draggable: true,
            raiseOnDrag: false,
            map: map,
            // labelAnchor: new google.maps.Point(40, -9),
            labelContent: places[i].name,
            //     labelAnchor: new google.maps.Point(50, -10),
            labelAnchor: new google.maps.Point(72, 9),
            labelClass: "labels",
            // the CSS class for the label
            labelStyle: {
                opacity: 1,
                fontSize: 20
            },
            icon: spot,
            placed: false,
            // true after the marker has been correctly placed.
            side_position: side_marker_position,
            place_position: the_place_position,
            starting_position: init_marker_position,
            destination_position: dest_marker_position,
        });
        google.maps.event.addListener(the_marker, 'mouseup', function() {
            console.log("marker mouseup: " + this.labelContent + ". Position: " + this.position);
        });
        google.maps.event.addListener(the_marker, 'click', function() {
            console.log("marker click: " + this.labelContent + ". Position: " + this.position);
            animateMarker(this);
        });
    }
}