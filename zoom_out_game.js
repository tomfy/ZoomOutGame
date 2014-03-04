// /* 
var dodecagon = {
    path: // 'M -10,0 -8,6  -6,8 0,10 6,8 10,0 0,-10 z',
    'M -10,0 -8,6 -6,8  0,10 6,8 8,6  10,0 8,-6, 6,-8  0,-10 -6,-8  -8,-6  z',
    //    google.maps.SymbolPath.CIRCLE,
    fillColor: "black",
    fillOpacity: 0.8,
    scale: 0.8,
    strokeColor: "gold",
    strokeWeight: 3
}; // */

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

function zoom_out_game(places) { // function zoom_out_game is a constructor, so 'this' keyword
    // refers to the object contructed
    initialize_places_latlng(places);
    var done_places = new Object;
    var current_places = new Object; // places.slice(0, n_places_at_a_time);
    var future_places = new Object; // places.slice(n_places_at_a_time, n_places_in_quiz);

    for(var i = 0; i<n_places_at_a_time; i++){
	var the_place = places[i];
	current_places[the_place.name] = the_place;
	console.log("In current_places initialization. name, age: " + the_place.name + " ,  " + current_places[the_place.name].age);
    }
    for(var i = n_places_at_a_time; i<places.length; i++){
	var the_place = places[i];
	future_places[the_place.name] = the_place;
    }

    initialize_places_ages(current_places);
    var zoom_offset = -1;
    var max_score_per_answer = 10;
  //  var max_place_score = 30;
    var the_place = random_place(current_places);
   // the_place = current_places['Honshu'];
    // get map, circle, info window:
    var mapOptions = {
        zoom: the_place.zoom + zoom_offset,
        center: the_place.frame_center.latlng,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        draggable: true,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        disableDefaultUI: true,
        zoomControl: true,
        scaleControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
        }
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    var circle = new google.maps.Circle({
        strokeColor: 'B0D000',
        // 0000',
        strokeOpacity: 0.01,
        strokeWeight: 2,
        //   fillColor: '#FF0000',
        fillOpacity: 0.0,
        map: map,
        clickable: true,
        draggable: true,
        center: the_place.marker_position.latlng,
        radius: the_place.radius * Math.pow(2, 10 - the_place.zoom)
    });

    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n");
    var info_window = new google.maps.InfoWindow({
        content: the_place.name
    });
    google.maps.event.addListener(circle, 'rightclick', function(ev) {
        info_window.setPosition(circle.getCenter());
        info_window.open(map);
    });
    // handle clicking on the circle: (shows latitude and longitude in console.)
    google.maps.event.addListener(circle, 'click', function(ev) {
        console.log("place: " + info_window.content + ". location:  {lat: ", circle.getCenter().lat() + ", lng: " + circle.getCenter().lng() + "}  ");
    });

    // var latlng = the_place.frame_center.latlng;
    //  var customTxt = "<div>Blah blah sdfsddddddddddddddd ddddddddddddddddddddd<ul><li>Blah 1<li>blah 2 </ul></div>"
    //              var txt = new TxtOverlay(latlng,customTxt,"customBox",map )

    var score = 0; // number of question which were answered correctly on most recent asking.
//    var the_place_score = max_score_per_answer;
    var zooms = 0;
// console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n");
    var zoom_button_area = document.getElementById("zoom_buttons");

    var zoom_out_button = document.createElement("button");
    zoom_out_button.appendChild(document.createTextNode("Zoom Out"));
    zoom_out_button.addEventListener("click", function(event) {
        // console.log("zoom out button clicked!!!!!");
        map.setZoom(map.getZoom() - 1);
        zoom_level_text.innerText = 'Zoom level: ' + map.getZoom();
     //   the_place_score--; // It costs a point to zoom out.
	zooms++;
	the_place.zoom_clicks++;
    }, false);
    zoom_button_area.appendChild(zoom_out_button);

    var zoom_in_button = document.createElement("button");
    zoom_in_button.appendChild(document.createTextNode("Zoom In"));
    zoom_in_button.addEventListener("click", function(event) {
        //     console.log("zoom in button clicked!!!!!");
        map.setZoom(map.getZoom() + 1);
        zoom_level_text.innerText = 'Zoom level: ' + map.getZoom();
    //    the_place_score--; // It costs a point to zoom in.
	zooms++;
	the_place.zoom_clicks++;
    }, false);
    zoom_button_area.appendChild(zoom_in_button);
    var zoom_level_text = document.createElement("button");
    zoom_level_text.innerText = 'Zoom level: ' + map.getZoom();
    zoom_button_area.appendChild(zoom_level_text);


    var answer_buttons = new Array();
    var answer_button_area = document.getElementById("answer_buttons");

    var current_names_array = Object.keys(current_places);
    for (var i = 0; i < current_names_array.length; i++) {

	var name_i = current_names_array[i];
        answer_buttons[i] = document.createElement("a"); // using a link, not button at present.
        //      answer_buttons[i] = document.createElement("BUTTON"); // using a link, not button at present.
        var t = document.createTextNode(current_places[name_i].name);
        answer_buttons[i].appendChild(t);
        //    answer_buttons[i].textContent = current_places[i].name;
        answer_buttons[i].href = "#"; // what does this do??? - makes it a link

        answer_buttons[i].addEventListener("click", function(event) {
            the_place = handle_answer_button_click(event, the_place, i);
            },
            false);
        answer_button_area.appendChild(answer_buttons[i]);
    }
    document.getElementById("score_div").innerText = 'Score: 0';
    document.getElementById("zoom_info_div").innerText = " Zoom level: " + map.getZoom();
    document.getElementById("map_center_info_div").innerText = "Map center: " + my_latlng_to_string(map.getCenter());
    document.getElementById("click_position_info_div").innerText = "Click position: ";

    /* var marker_1 = new google.maps.Marker({
     position: new google.maps.LatLng(51.478, -0.1),
    map: map,
    title: 'Click to zoom out'
  }); */

    google.maps.event.addListener(map, 'click', function(event) {
        console.log("map clicked at latlng: ", event.latLng.toString());
        //	click_position_info_div.value = "XXXXX";
        document.getElementById("click_position_info_div").innerText = 'Click position: ' + my_latlng_to_string(event.latLng);
    });


    /* google.maps.event.addListener(marker_1, 'click', function() {
     map.setZoom(map.getZoom() - 1 );
  }); */

    google.maps.event.addListener(map, 'center_changed', function() {
        // 3 seconds after the center of the map has changed, pan back to the marker.  
        /*  window.setTimeout(function() {
	map.panTo(new google.maps.LatLng(50.0, 0.0));
    }, 3000); // */
        document.getElementById("map_center_info_div").innerText = 'Map center: ' + my_latlng_to_string(map.getCenter());
    });

    google.maps.event.addListener(map, 'zoom_changed', function(ev) {
        console.log("New zoom level: ", map.getZoom());
        document.getElementById("zoom_info_div").innerText = 'Zoom level: ' + map.getZoom();
    });
 console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC\n");
    function handle_answer_button_click(event, the_place, i) {
        var txtnode = event.target.childNodes[0];
        var txt = txtnode.nodeValue;
    //    console.log("text: " + txt );
//	console.log(" the place name: " + the_place.name);

 console.log("AAAAAAAAAAA\n");
 var right_wrong_label = new MapLabel({
     text: '',
     position: map_viewport_latlng(map, 0.5, 0.9), //new google.maps.LatLng(50,50),
           map: map,
           fontSize: 40,
    align: 'center',
    draggable: false, // true,
         });
 console.log("BBBBBBBBBBBBBBBBBBBb\n");
        var the_marker = new MarkerWithLabel({
            position: the_place.marker_position.latlng,
            draggable: true,
            raiseOnDrag: false,
            map: map,
        //    labelAnchor: new google.maps.Point(50, -10),
            labelContent: the_place.name,
            //     labelAnchor: new google.maps.Point(50, -10),
            labelAnchor: new google.maps.Point(150, 11),
            labelClass: "marker_labels", // the CSS class for the label
            labelStyle: {
                opacity: 1,
                fontSize: 20
            },
            icon: dodecagon,
        });

 console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n");
       
        var delay = 800;
	var former_place_score = the_place.score;
	var former_score = score;
            if (txt == the_place.name) { // ****** CORRECT ANSWER. this answer is correct. ******
		update_array(the_place.history, new Object({correct: true, zoom_clicks: zooms}) ); // unshift and pop
		var new_place_score = place_score(the_place, max_score_per_answer); 
		score += new_place_score - former_place_score; // 
	console.log("YYYY place name, former/pres place score, former/pres score: " + the_place.name + "  " + former_place_score + "  " + 
		    new_place_score + "  " + former_score + "  " + score +  " " + JSON.stringify(the_place.history) );
			the_place.score = new_place_score;
		
		right_wrong_label.text = "Yes, it's "
	the_marker.labelContent = the_place.name;
                console.log("Yes, it's " + the_place.name);
                the_place.last_answer_correct = true;

 	/*	if(place_rights_in_a_row(the_place) >= rights_in_row_to_be_done){ // player has shown he/she knows this place. 
		    done_places.push(the_place);
		    current_places[

		} // */
            } else { // ****** WRONG ANSWER. this answer is wrong. ******
		update_array(the_place.history, new Object({ correct: false, zoom_clicks: 0}) );
		var new_place_score = place_score(the_place, max_score_per_answer);
		score += new_place_score - former_place_score; // 
console.log("ZZZZ place name, former score, score: " + the_place.name + "  " + former_place_score + "  " + 
	    new_place_score +  "  " + former_score + "  " + score +   "  " + JSON.stringify(the_place.history) );
		the_place.score = new_place_score;
		right_wrong_label.text = "No, it's ";
			the_marker.labelContent = the_place.name;
                console.log("No, it's " + the_place.name + ", not " + txt);
      //          alert("No, it's " + the_place.name + ", not " + txt);
 
  /*  info_window.setContent(the_place.name);
 info_window.setPosition(the_place.marker_position);
 info_window.open(map); */
              //  if (the_place.last_answer_correct === true) score--;
                the_place.last_answer_correct = false;
		delay = 2500;
            }
	zooms = 0;
 //   };
  document.getElementById("score_div").innerText = 'Score: ' + score;

the_place = random_place(current_places);
 setTimeout(function() {
     right_wrong_label.setMap(null);
     the_marker.setMap(null);
            the_place.age = 0;
            console.log("handle_.... (next)place name: " + the_place.name);
   //         the_place_score = 10; // maximum you can get by answering place correctly (i.e. if no zooming, panning)
            move_map_to_place(map, circle, info_window, the_place, zoom_offset);
            zoom_level_text.innerText = 'Zoom level: ' + map.getZoom();
  //          console.log("SCORE: " + score);
  //          console.log("circle position:   {lat: ", circle.getCenter().lat() + ", lng: " + circle.getCenter().lng() + "}  ");
 }, delay);
    
        return the_place; // Why return the_place ???
    } // end of handle_answer_button_click
} // end of zoom_out_game (constructor)

// /*
    function place_rights_in_a_row(place){
	var rights_in_a_row = 0;
	for(var i=0; i< place.history.length; i++){ // just
	    if(place.history[i].correct != true){break; }
	    rights_in_a_row++;
	}
	return rights_in_a_row;
//	return Math.floor(max_score_per_answer * (1 - Math.pow(0.5,rights_in_a_row)) + 0.6);
    }

function place_score(place, max_score_per_answer){
	var the_place_score = 0;
	for(var i=0; i< place.history.length; i++){ // just
	    if(place.history[i].correct != true){break; }
	    the_place_score += Math.max(0, max_score_per_answer - place.history[i].zoom_clicks);	    
	}
    return Math.min(max_place_score, the_place_score);
//	return Math.floor(max_score_per_answer * (1 - Math.pow(0.5,rights_in_a_row)) + 0.6);
    }
// */

function random_place(places) { // places is 
    var sum_prob = 0;
 //   for (var i = 0; i < places.length; i++) {
        for (var name in places) {
	    
            places[name].relprob = relprob(places, name);
            sum_prob += places[name].relprob;
        //    console.log('places index: ' + i + '  relprob: ' + places[i].relprob + ' name: ' + places[i].name);
        }

        var rprob = sum_prob * Math.random();
        //    console.log('rprob: ' + rprob);
        sum_prob = 0;
        var chosen_name = 'noplace';
    //    for (var i = 0; i < places.length; i++) {
	    for(var name in places){
            sum_prob += places[name].relprob;
            //    console.log('index: ' + i + '. sum_prob: ' + sum_prob + '. rprob: ' + rprob);
            if (sum_prob >= rprob && chosen_name == 'noplace') {
                chosen_name = name;
                places[name].age = 0; // relprob = 1;
            } else {
                places[name].age++; // relprob *= grow_factor;
              //  console.log('i: ' + i + '.  ' + places[i].relprob);
            }
        }
        console.log('chosen name: ' + chosen_name + ". place: " + places[chosen_name].name + " age: " + places[chosen_name].age);
        return places[chosen_name];
  //  }
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
  //  shuffle(keys);
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

} // end of map_of_place*/

function relprob(places, name) {
    var age = places[name].age;
    var last_answer_correct = places[name].last_answer_correct;
    var size = Object.keys(places).length;
    var grow_factor = 1.2;
    var reask_delay = 2;
    var rights_in_a_row = place_rights_in_a_row(places[name]);
    console.log("In relprob. age, size, reask_delay:  " + age + "  " + size + "  " + reask_delay);
    var power = ((rights_in_a_row > 0) || (age < reask_delay))? age : age + (age - reask_delay) + size - reask_delay;
    var time_dilation = Math.max(1, rights_in_a_row);  
    power /= time_dilation; // if place has been correctly answered >= 2 times, it will appear less frequently.
    var relprob = Math.pow(grow_factor, power);
 //   console.log("last_answer_correct: " + last_answer_correct + "  age: " + age + "  reask_delay: " + reask_delay);
   
 //   if (!last_answer_correct && age >= reask_delay) {
     //   relprob *= Math.pow(grow_factor, size - reask_delay + 0.5 * age);
//  relprob *= Math.pow(grow_factor, size - 1.5*reask_delay + age);
 //   }
  //  console.log("i, grow_factor, age, relprob: " + i + "  "  + grow_factor +  "  " + age + "  " + relprob);
    relprob -= 1;
    relprob = (relprob > 0) ? relprob : 0;

 console.log("In relprob. place: " + places[name].name + "; age: " + places[name].age + "; power: " + power + "; time dilation: " + time_dilation + "; relprob: " + relprob );
    return relprob;
}

/*
    var zoom_button_area = document.getElementById("zoom_buttons");

    var zoom_out_button = document.createElement("button");
    zoom_out_button.appendChild(document.createTextNode("Zoom Out"));
    zoom_out_button.addEventListener("click", function(event) {
        // console.log("zoom out button clicked!!!!!");
        map.setZoom(map.getZoom() - 1);
    }, false);
    zoom_button_area.appendChild(zoom_out_button);

    var zoom_in_button = document.createElement("button");
    zoom_in_button.appendChild(document.createTextNode("Zoom In"));
    zoom_in_button.addEventListener("click", function(event) {
        //     console.log("zoom in button clicked!!!!!");
        map.setZoom(map.getZoom() + 1);
    }, false);
    zoom_button_area.appendChild(zoom_in_button);

    var next_button = document.createElement("button");
    next_button.appendChild(document.createTextNode("Next"));
    next_button.addEventListener("click", function(event) {
        console.log("next button clicked!!!!!");
        the_place = random_place(places);
        the_place.age = 0;
	move_map_to_place(map, circle, info_window, the_place, zoom_offset);
    }, false);
    zoom_button_area.appendChild(next_button);
*/
