function drag_game(places) { // function zoom_out_game is a constructor, so 'this' keyword
    // refers to the object contructed
    initialize_places_latlng(places);

    // get center of map and zoom such that places will all be on the map.
    var zoom_0_dlng = 440;
    var avg_lat = 0;
    var avg_lng = 0;
    var minlat = 1000;
    var maxlat = -1000;
    var minlng = 1000;
    var maxlng = -1000;
    
    for (var i = 0; i < places.length; i++) {
        var a_place = places[i];
        var lat = a_place.marker_position.lat;
        var lng = a_place.marker_position.lng;
        minlat = Math.min(lat, minlat);
        maxlat = Math.max(lat, maxlat);
        minlng = Math.min(lng, minlng);
        maxlng = Math.max(lng, maxlng);
        avg_lat += lat;
        avg_lng += lng;
        var center_lat = 0.5 * (minlat + maxlat);
        var center_lng = 0.5 * (minlng + maxlng);
    }
    var dlng = maxlng - minlng; // will have to do something more fancy to handle +- 180.
    avg_lat /= places.length;
    avg_lng /= places.length;
    var zoom = Math.floor(Math.log(zoom_0_dlng / dlng) / Math.log(2));
    var map_center_latlng = new google.maps.LatLng(center_lat, center_lng);
    var sw_ll = new google.maps.LatLng(minlat, minlng);
    var ne_ll = new google.maps.LatLng(maxlat, maxlng);
    var llbounds = new google.maps.LatLngBounds(sw_ll, ne_ll);
    var llspan = llbounds.toSpan();

    var zoom_offset = 0;
    //  var the_place = random_place(places);

    var dragged_marker_name = 'No name yet!!';

    // get map, circle, info window:
    var mapOptions = {
        zoom: zoom,
        center: map_center_latlng,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        draggable: false, // true,
	clickable: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        disableDefaultUI: true,
        zoomControl: false, // true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
        }
    };
    var map_ll_bounds;
    var markers = [];
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

    var circles_array = new Object;

 //   google.maps.event.addListener(map, 'mousemove'

    google.maps.event.addListenerOnce(map, 'bounds_changed', function() {
        map_ll_bounds = this.getBounds();
        var sw_lat = map_ll_bounds.getSouthWest().lat();
        var sw_lng = map_ll_bounds.getSouthWest().lng();
        var ne_lat = map_ll_bounds.getNorthEast().lat();
        var ne_lng = map_ll_bounds.getNorthEast().lng();
        console.log("this: " + this);
        console.log("map ll bounds: " + map_ll_bounds.toString());
//	console.log("i place position: " + i + "  " + places[i].name + "  " + places[i].
        for (var i = 0; i < places.length; i++) {
            var init_marker_position = // new google.maps.LatLng(0.95*sw_lat + 0.05*ne_lat, sw_lng + (i+0.5)*(ne_lng-sw_lng)/(places.length-1));
            new google.maps.LatLng(ne_lat + (i + 2) * (sw_lat - ne_lat) / (places.length + 3), 0.9 * sw_lng + 0.1 * ne_lng);
            var the_marker = new // google.maps.Marker({ //  
		                 MarkerWithLabel({
                position: init_marker_position,
                draggable: true,
                raiseOnDrag: false,
                map: map,
                // labelAnchor: new google.maps.Point(40, -9),
                labelContent: places[i].name,
                //     labelAnchor: new google.maps.Point(50, -10),
                labelAnchor: new google.maps.Point(90, 8),
                labelClass: "labels", // the CSS class for the label
                labelStyle: {
                    opacity: 1,
                    fontSize: 20
                },
                icon: spot,
                placed: false, // true after the marker has been correctly placed.
		starting_position: init_marker_position,
		destination_position: places[i].marker_position.latlng,
            });
            google.maps.event.addListener(the_marker, 'mouseup', function() {
                console.log("marker mouseup: " + this.labelContent + ". Position: " + this.position);
            });
//	 /*    
google.maps.event.addListener(the_marker, 'mousedown', function() {
                console.log("marker mousedown: " + this.labelContent + ". Position: " + this.position);
	
    dragged_marker_name = this.labelContent;
	 console.log("dragged_marker_name: " + dragged_marker_name);
             }); // */

 google.maps.event.addListener(the_marker, 'dragend', function() {
      // Get the Current position, where the pointer was dropped
      var dragend_position = this.getPosition(); // LatLng (?)
     console.log("dragend position: " + dragend_position);
 //    the_marker.setPosition(dragend_position);
      // Center the map at given point

     var correct_circle = circles_array[this.labelContent];
     console.log("marker label: " + this.labelContent + " position: " + this.position);
 console.log("marker dest position: " + this.destination_position);
     var distance_from_destination = distance_between_latlngs(this.position, this.destination_position);
     console.log("dist: " + distance_from_destination + "; dest circle: " + correct_circle.name);
     if(distance_between_latlngs(this.position, this.destination_position) < close_enough_distance){
	 score += 1;
	 this.placed = true;
	 correct_circle.strokeColor = '40F040';
	 
     };
   
   });



    google.maps.event.addListener(the_marker, 'click', function() {
                console.log("marker click: " + this.labelContent + ". Position: " + this.position);
	animateMarker(this);
            });

        }
    });
    map.fitBounds(llbounds);

    for (var i = 0; i < places.length; i++) {
        (function() { // closure
            the_place = places[i];
            var circle = new google.maps.Circle({
                strokeColor: 'B0E040',
                strokeOpacity: 0.6,
                strokeWeight: 2,
                //   fillColor: '#FF0000',
                fillOpacity: 0.0,
                map: map,
                clickable: true,
                draggable: false, //true,
                center: the_place.marker_position.latlng,
                radius: the_place.radius * Math.pow(2, 8 - map.zoom),
		name: the_place.name,
            });
//           /* 
google.maps.event.addListener(circle, 'mouseup', function() {
     console.log("circle; mouseup.  Position: " + this.center);
}); // */

            var info_window = new google.maps.InfoWindow({
                content: the_place.name
            });
            //   /*    
            google.maps.event.addListener(circle, 'rightclick', function(ev) {
                info_window.setPosition(circle.getCenter());
                info_window.open(map);
            });
	//    google.maps.event.addListener(circle, 'dragend', function(ev) {
	//    });

            // */
            // handle clicking on the circle: (shows latitude and longitude in console.)
            //        /*       
            google.maps.event.addListener(circle, 'click', function(ev) {
                console.log("circle click. place: " + info_window.content + ". location:  {lat: ", circle.getCenter().lat() + ", lng: " + circle.getCenter().lng() + "}  ");
            });
            // */
	circles_array[places[i].name] = circle;
	    console.log("putting circle with name: " + name + " into circles_array. "); //this circle has name: " + circles_array[places[i].name].name
        })();	

    } // end loop over circles being created
	

    var zoom_button_area = document.getElementById("zoom_buttons");



    var zoom_out_button = document.createElement("button");
    zoom_out_button.appendChild(document.createTextNode("Zoom Out"));
    zoom_out_button.addEventListener("click", function(event) {
        // console.log("zoom out button clicked!!!!!");
        google.maps.event.addListenerOnce(map, 'bounds_changed', function() {
            //  alert(this.getBounds());
            map_ll_bounds = this.getBounds();
            console.log("bounds: " + map_ll_bounds);
            var sw_lat = map_ll_bounds.getSouthWest().lat();
            var sw_lng = map_ll_bounds.getSouthWest().lng();
            var ne_lat = map_ll_bounds.getNorthEast().lat();
            var ne_lng = map_ll_bounds.getNorthEast().lng();
            console.log("this: " + this);
            console.log("map ll bounds: " + map_ll_bounds.toString());
            for (var i = 0; i < markers.length; i++) {
                var the_marker = markers[i];
                var marker_position = //new google.maps.LatLng(0.95*sw_lat + 0.05*ne_lat, sw_lng + (i+0.5)*(ne_lng-sw_lng)/(places.length-1));
                new google.maps.LatLng(ne_lat + (i + 2) * (sw_lat - ne_lat) / (places.length + 2), 0.9 * sw_lng + 0.1 * ne_lng);
                the_marker.setPosition(marker_position);

            }
        });
        map.setZoom(map.getZoom() - 1);
    }, false);
    zoom_button_area.appendChild(zoom_out_button);

    var zoom_in_button = document.createElement("button");
    zoom_in_button.appendChild(document.createTextNode("Zoom In"));
    zoom_in_button.addEventListener("click", function(event) {

        google.maps.event.addListenerOnce(map, 'bounds_changed', function() {
            //  alert(this.getBounds());
            map_ll_bounds = this.getBounds();
            console.log("bounds: " + map_ll_bounds);
            var sw_lat = map_ll_bounds.getSouthWest().lat();
            var sw_lng = map_ll_bounds.getSouthWest().lng();
            var ne_lat = map_ll_bounds.getNorthEast().lat();
            var ne_lng = map_ll_bounds.getNorthEast().lng();
            console.log("this: " + this);
            console.log("map ll bounds: " + map_ll_bounds.toString());
            for (var i = 0; i < markers.length; i++) {
                var the_marker = markers[i];
                var marker_position = //new google.maps.LatLng(0.95*sw_lat + 0.05*ne_lat, sw_lng + (i+0.5)*(ne_lng-sw_lng)/(places.length-1));
                new google.maps.LatLng(ne_lat + (i + 2) * (sw_lat - ne_lat) / (places.length + 2), 0.9 * sw_lng + 0.1 * ne_lng);
                the_marker.setPosition(marker_position);

            }
        });
        //     console.log("zoom in button clicked!!!!!");
        map.setZoom(map.getZoom() + 1);
    }, false);
    zoom_button_area.appendChild(zoom_in_button);

/*   var animate_button = document.createElement("button");
    animate_button.appendChild(document.createTextNode("animate"));
    animate_button.addEventListener("click", function(event) {
	console.log("animateCircle button clicked.");
	animateCircle();
    }, false);
    zoom_button_area.appendChild(animate_button); */

   document.getElementById("score_div").innerText = 'Score: 0';
    document.getElementById("zoom_info_div").innerText = " Zoom level: " + map.getZoom();
    document.getElementById("map_center_info_div").innerText = "Map center: " + my_latlng_to_string(map.getCenter());
    document.getElementById("click_position_info_div").innerText = "Click position: ";




    var score = 0; // number of question which were answered correctly on most recent asking.
 
    function animateMarker(the_marker){
	var count = 0;
	var n_steps = 40;
	console.log("marker start, dest position: " + the_marker.starting_position + "  " 
		    + the_marker.destination_position + ";  position: " + the_marker.position); 
  var start_pos = the_marker.starting_position;
	    var end_pos = the_marker.destination_position;
	var start_lat = start_pos.lat();
	var start_lng = start_pos.lng();
	var delta_lat = end_pos.lat() - start_pos.lat();
	var delta_lng = end_pos.lng() - start_pos.lng();
	console.log("top of animateMarker. marker position: " + the_marker.position);
	offsetId = window.setInterval(function() {
	    if(count < n_steps){ count++; }
	  
//	    console.log("start, end positions: " + start_pos + "  " + end_pos);
	    var lat = // (start_pos.lat()*(n_steps - count) + end_pos.lat()*count)/n_steps;
		start_lat + delta_lat*count/n_steps;
	 var lng = //(start_pos.lng()*(n_steps - count) + end_pos.lng()*count)/n_steps;
	    start_lng + delta_lng*count/n_steps;
	    the_marker.setPosition(new google.maps.LatLng(lat, lng));
	    console.log("position: " + the_marker.position);
	    if(count == n_steps){ window.clearInterval(offsetId); }
	}, 25);
//	console.log("at end of animateMarker. marker position: " + the_marker.position);
    } // end of animateMarker
} // end of zoom_out_game (constructor)

function random_place(places) {
    var sum_prob = 0;
    for (var i = 0; i < places.length; i++) {
        for (var i = 0; i < places.length; i++) {
            places[i].relprob = relprob(places, i);
            sum_prob += places[i].relprob;
            console.log('places index: ' + i + '  relprob: ' + places[i].relprob + ' name: ' + places[i].name);
        }

        var rprob = sum_prob * Math.random();
        //    console.log('rprob: ' + rprob);
        sum_prob = 0;
        var chosen_index = 100000;
        for (var i = 0; i < places.length; i++) {
            sum_prob += places[i].relprob;
            //    console.log('index: ' + i + '. sum_prob: ' + sum_prob + '. rprob: ' + rprob);
            if (sum_prob >= rprob && chosen_index == 100000) {
                chosen_index = i;
                places[i].age = 0; // relprob = 1;
            } else {
                places[i].age++; // relprob *= grow_factor;
                console.log('i: ' + i + '.  ' + places[i].relprob);
            }
        }
        console.log('chosen index: ' + chosen_index + ". place: " + places[chosen_index].name);
        return places[chosen_index];
    }
}


function relprob(places, i) {
    var age = places[i].age;
    var last_answer_correct = places[i].last_answer_correct;
    var size = places.length;
    var grow_factor = 1.2;
    var reask_delay = 2;
    var relprob = Math.pow(grow_factor, age);
    console.log("last_answer_correct: " + last_answer_correct + "  age: " + age + "  reask_delay: " + reask_delay);
    if (!last_answer_correct && age >= reask_delay) {
        relprob *= Math.pow(grow_factor, size - reask_delay + 0.5 * age);

    }
    console.log("i, age, relprob: " + i + "  " + age + "  " + relprob);
    relprob -= 1;
    relprob = (relprob > 0) ? relprob : 0;
    return relprob;
}


