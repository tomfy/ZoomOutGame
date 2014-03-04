var spot = {
    path: // 'M -10,0 -8,6  -6,8 0,10 6,8 10,0 0,-10 z',
    //   'M -10,0 -8,6 -6,8  0,10 6,8 8,6  10,0 8,-6, 6,-8  0,-10 -6,-8  -8,-6  z', // dodecagon
    google.maps.SymbolPath.CIRCLE,
    fillColor: "black",
    fillOpacity: 0.0001,
    scale: 8,
    strokeColor: "gold",
    strokeWeight: 2
};


function click_game(places) { // function zoom_out_game is a constructor, so 'this' keyword
    // refers to the object contructed

    console.log("places.length: " + places.length);
    initialize_places(places);

    var factor = 1;
    var zoom_llbounds = get_zoom_level_to_contain_places(places, factor);
    var map_center_latlng = zoom_llbounds[0];
    var zoom = zoom_llbounds[1];
    var llbounds = zoom_llbounds[2];

    var zoom_offset = 0;
    var the_index = random_place(places);
    var the_place = places[the_index];
    //  zoom += -2;
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
    console.log("before. zoom: " + map.getZoom());


    /*google.maps.event.addListenerOnce(map, 'bounds_changed', function() {
    place_circles_on_map(map, places);
}); */
    map.fitBounds(llbounds);
    console.log("after. zoom: " + map.getZoom());

    google.maps.event.addListenerOnce(map, 'bounds_changed', function() {
        place_circles_on_map(map, places);
   //     place_markers_on_map(map, places);
    });


    //after    var zoom = map.getZoom();
    //   console.log("zoom: " + zoom);
    var question_buttons = new Array();
    var question_button_area = document.getElementById("question_buttons");
    //    var i = 0;
    console.log("ZZZZ: " + places.length);
    for (var i = 0; i < places.length; i++) {
        question_buttons[i] = document.createElement("a"); // using a link, not button at present.
        //      question_buttons[i] = document.createElement("BUTTON"); // using a link, not button at present.
        var t = document.createTextNode(places[i].name);
        question_buttons[i].appendChild(t);
        //    question_buttons[i].textContent = places[i].name;
        question_buttons[i].href = "#"; // what does this do??? - makes it a link

        question_buttons[i].addEventListener("click", function(event) {
                the_place = handle_question_button_click(event, the_place);
            },
            false);    
    }

    question_button_area.appendChild(question_buttons[the_index]);
 

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
    var score = 0; // number of question which were answered correctly on most recent asking.

   document.getElementById("score_div").innerText = 'Score: ' + score;

    function handle_question_button_click(event, the_place) {
        var txtnode = event.target.childNodes[0];
        var txt = txtnode.nodeValue;
        console.log("text: " + txt + " the place name: " + the_place.name);
        if (txt == the_place.name) {
            console.log("Yes, it's " + the_place.name);
            //    alert("Yes, it's " + the_place.name);
            if (the_place.last_answer_correct !== true) score++;
            the_place.last_answer_correct = true;
        } else {
            console.log("No, it's " + the_place.name + ", not " + txt);
            alert("No, it's " + the_place.name + ", not " + txt);
            if (the_place.last_answer_correct === true) score--;
            the_place.last_answer_correct = false;
        }
	the_index = random_place(places)
        the_place = places[the_index];
        the_place.age = 0;
        console.log("handle_.... (next)place name: " + the_place.name);
        move_map_to_place(map, circle, info_window, the_place, zoom_offset);
        console.log("SCORE: " + score);
        console.log("circle position:   {lat: ", circle.getCenter().lat() + ", lng: " + circle.getCenter().lng() + "}  ");
        return the_place;
    } // end of handle_answer_button_click

    function animateMarker(the_marker) {
        var count = 0;
        var n_steps = 40;
        var start_pos = the_marker.starting_position;
        var end_pos = the_marker.destination_position;
        var start_lat = start_pos.lat();
        var start_lng = start_pos.lng();
        var delta_lat = end_pos.lat() - start_pos.lat();
        var delta_lng = end_pos.lng() - start_pos.lng();
        console.log("top of animateMarker. marker position: " + the_marker.getPosition());
        offsetId = window.setInterval(function() {
            if (count < n_steps) {
                count++;
            }

            //	    console.log("start, end positions: " + start_pos + "  " + end_pos);
            var lat = // (start_pos.lat()*(n_steps - count) + end_pos.lat()*count)/n_steps;
            start_lat + delta_lat * count / n_steps;
            var lng = //(start_pos.lng()*(n_steps - count) + end_pos.lng()*count)/n_steps;
            start_lng + delta_lng * count / n_steps;
            the_marker.setPosition(new google.maps.LatLng(lat, lng));
            if (count == n_steps) {
                window.clearInterval(offsetId);
            }
        }, 25);
    }


function place_circles_on_map(map, places) {

    for (var i = 0; i < places.length; i++) {
        (function() { // closure
           
            var circle = new google.maps.Circle({
                strokeColor: 'A0D040',
                // 0000',
                strokeOpacity: 0.7,
                strokeWeight: 2,
                //   fillColor: '#FF0000',
                fillOpacity: 0.0,
                map: map,
                clickable: true,
                draggable: false, //true,
                center: places[i].marker_position.latlng,
                radius: places[i].radius * radius_factor, // * Math.pow(2, 8 - map.zoom)
		place_name: places[i].name
            });
         
            google.maps.event.addListener(circle, 'click', function() {

                console.log("circle; click.  place: " + this.place_name);
		console.log("the_place.name: " + the_place.name);
		var correct_answer = (this.place_name == the_place.name);;
		if(correct_answer){
		    console.log("CORRECT! " + this.place_name + "  " + the_place.name);
this.setOptions({strokeOpacity: 0.6});
		this.setOptions({strokeColor: 'E0B040'});
		    question_button_area.removeChild(question_buttons[the_index]);
		    score += correct_points;
		    
		the_index = random_place(places)
		the_place = places[the_index];
		question_button_area.appendChild(question_buttons[the_index]);
		}else{
		    score -= incorrect_cost;
		    console.log("Nope. You clicked: " + this.place_name);
		};
	  document.getElementById("score_div").innerText = 'Score: ' + score;
		
            }); 

            var info_window = new google.maps.InfoWindow({
                content: places[i].name
            });    
            google.maps.event.addListener(circle, 'rightclick', function(ev) {
                info_window.setPosition(circle.getCenter());
                info_window.open(map);
            });
        })();
    }
}

} // end of click_game (constructor)

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
        return chosen_index;
    }
}

function initialize_places(places) {
    var indices = [];
    for (var i = 0; i < places.length; i++) {
        indices[i] = i;
    }
    indices.sort(function(a, b) {
        return Math.random() > 0.5
    });
    console.log("places.length: " + places.length);
    for (var i = 0; i < places.length; i++) {
        var the_place = places[i];
        console.log("place: ", the_place.name);
        the_place.age = indices[i];
        // the frame_center and marker_position LatLng objects:
        the_place.frame_center.latlng = new google.maps.LatLng(the_place.frame_center.lat, the_place.frame_center.lng);
        the_place.marker_position.latlng = new google.maps.LatLng(the_place.marker_position.lat, the_place.marker_position.lng);
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

} // end of map_of_place*/

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

function get_zoom_level_to_contain_places(places, factor) {
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
 //   var llspan = llbounds.toSpan();
    return [map_center_latlng, zoom, llbounds];
}



function place_markers_on_map(map, places) {
    map_ll_bounds = map.getBounds();
    var sw_lat = map_ll_bounds.getSouthWest().lat();
    var sw_lng = map_ll_bounds.getSouthWest().lng();
    var ne_lat = map_ll_bounds.getNorthEast().lat();
    var ne_lng = map_ll_bounds.getNorthEast().lng();
    console.log("this: " + this);
    console.log("map ll bounds: " + map_ll_bounds.toString());
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
            labelClass: "labels", // the CSS class for the label
            labelStyle: {
                opacity: 1,
                fontSize: 20
            },
            icon: spot,
            placed: false, // true after the marker has been correctly placed.
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

