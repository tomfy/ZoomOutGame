function zoom_out_game(places) { //  this function is a constructor, so 'this' keyword refers to the object contructed
    var zoom_offset = 0; // -1;
    var max_score_per_answer = 10; //  var max_place_score = 30;
    var score = 0; // number of question which were answered correctly on most recent asking.
    var zooms = 0;

    // *************** INITIALIZE PLACES ****************************
 //   initialize_places_latlng(places); // initialize the places array (reg array)
    // initialize assoc. arrays with places which are 'done', current (i.e. in play), and future (awaiting their turn)
    var done_places = new Object;
    var current_places = new Object; // places.slice(0, n_places_at_a_time);
    var future_places = new Object; // places.slice(n_places_at_a_time, n_places_in_quiz);
    n_places_at_a_time = Math.min(n_places_at_a_time, places.length);
   for (var i = 0; i < n_places_at_a_time; i++) { // current_places
//	for(var i in places){
        var the_place = places[i];
        current_places[the_place.name] = the_place;
       console.log("In current_places initialization. name, age: " + the_place.name + 
		   " ,  " + JSON.stringify(current_places[the_place.name].frame_center) );
    }
    for (var i = n_places_at_a_time; i < places.length; i++) { // future places
	var age = 2*(places.length - i); //  
        var the_place = places[i];
	the_place.age = age;
        future_places[the_place.name] = the_place;
    }
    initialize_places_ages(current_places); // initialize ages of current places to random order.
    // *************** CHOOSE INITIAL PLACE AT RANDOM *******************
    var the_place_name = random_place(current_places);
    var the_place = current_places[the_place_name];

    console.log("THEPLACE: " + JSON.stringify(the_place) + "\n");
    // ********************* CONSTRUCT MAP *****************************
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
  the_place.border_polygon.setMap(map);

    console.log("ABCDEF. map center: " + map.center);
    // *************************  CONSTRUCT CIRCLE TO MARK PLACE  ****************************
    var circle = new google.maps.Circle({
        strokeColor: 'B0B000',
        strokeOpacity: 0.75,
        strokeWeight: 2,
        //   fillColor: '#FF0000',
        fillOpacity: 0.0,
        map: map,
        clickable: circles_clickable,
	visible: (the_place.border === undefined),
        draggable: false,
        center: the_place.marker_position.latlng,
        radius: the_place.radius * Math.pow(2, 10 - the_place.zoom)
    });
    the_place[circle] = circle;

  
    // ********************* INFOWINDOW TO SHOW PLACE'S NAME **************************
    var info_window = new google.maps.InfoWindow({
        content: the_place.name
    });
    google.maps.event.addListener(circle, 'rightclick', function(ev) { // rightclick on circle -> show infowindow
        info_window.setPosition(circle.getCenter());
        info_window.open(map);
    });

    google.maps.event.addListener(circle, 'click', function(ev) { // click on circle -> show latitude and longitude in console.
        console.log("place: " + info_window.content + ". location:  {lat: ", circle.getCenter().lat() + ", lng: " + circle.getCenter().lng() + "}  ");
    });

    // Initialize text displayed in score_div, etc.
    document.getElementById("score_div").innerText = 'Score: 0';
    document.getElementById("zoom_info_div").innerText = " Zoom level: " + map.getZoom();
    document.getElementById("map_center_info_div").innerText = "Map center: " + my_latlng_to_string(map.getCenter());
    console.log("AA. map center: " + JSON.stringify(map.getCenter()));
    document.getElementById("click_position_info_div").innerText = "Click position: ";

    // ************************  CREATE ZOOM BUTTONS  ***********************
    var zoom_button_area = document.getElementById("zoom_buttons");

    var zoom_out_button = document.createElement("button");
    zoom_out_button.appendChild(document.createTextNode("Zoom Out"));
    zoom_out_button.addEventListener("click", function(event) {
        map.setZoom(map.getZoom() - 1);
        zoom_level_text.innerText = 'Zoom level: ' + map.getZoom();
        zooms++;
        the_place.zoom_clicks++;
    },
    false);
    zoom_button_area.appendChild(zoom_out_button);

    var zoom_in_button = document.createElement("button");
    zoom_in_button.appendChild(document.createTextNode("Zoom In"));
    zoom_in_button.addEventListener("click", function(event) {
        map.setZoom(map.getZoom() + 1);
        zoom_level_text.innerText = 'Zoom level: ' + map.getZoom();
        zooms++;
        the_place.zoom_clicks++;
    },
    false);
    zoom_button_area.appendChild(zoom_in_button);

  var sticky_zoom_out_button = document.createElement("button");
    sticky_zoom_out_button.appendChild(document.createTextNode("Zoom Out"));
    sticky_zoom_out_button.addEventListener("click", function(event) {
        map.setZoom(map.getZoom() - 1);
	zoom_offset--;
        zoom_level_text.innerText = 'Zoom level: ' + map.getZoom();
        zooms++;
        the_place.zoom_clicks++;
    },
    false);
    zoom_button_area.appendChild(sticky_zoom_out_button);

    var sticky_zoom_in_button = document.createElement("button");
    sticky_zoom_in_button.appendChild(document.createTextNode("Zoom In"));
    sticky_zoom_in_button.addEventListener("click", function(event) {
        map.setZoom(map.getZoom() + 1);
	zoom_offset++;
        zoom_level_text.innerText = 'Zoom level: ' + map.getZoom();
        zooms++;
        the_place.zoom_clicks++;
    },
    false);
    zoom_button_area.appendChild(sticky_zoom_in_button);

    var zoom_level_text = document.createElement("button");
    zoom_level_text.innerText = 'Zoom level: ' + map.getZoom();
    zoom_button_area.appendChild(zoom_level_text);

    // ************************  CREATE ANSWER BUTTONS  ***********************
    // they are text elements for now ....
    var answer_buttons = {}; // new Array();
    var answer_button_area = document.getElementById("answer_buttons");

    var current_names_array = Object.keys(current_places);
    console.log("current_names: " + current_names_array);
   // for (var i = 0; i < current_names_array.length; i++) {
    for(var i = 0; i<places.length; i++){
	var a_place = places[i];
        var name_i = a_place.name;
        answer_buttons[name_i] = document.createElement("a"); // using a link, not button at present.
        //      answer_buttons[i] = document.createElement("BUTTON"); // using a link, not button at present.
        var t = document.createTextNode(name_i);
        answer_buttons[name_i].appendChild(t);
        //    answer_buttons[i].textContent = current_places[i].name;
        answer_buttons[name_i].href = "#"; // what does this do??? - makes it a link
        answer_buttons[name_i].addEventListener("click", function(event) {
           the_place = 
		handle_answer_button_click(event, the_place, answer_buttons);
        },
        false);
//	a_place.answer_button = answer_buttons[name_i];
	if(name_i in current_places){
        answer_button_area.appendChild(answer_buttons[name_i]);
	}
    }

    // ******************* ADD EVENT LISTENERS TO MAP *********************
    // click -> show click position lat and lng
    google.maps.event.addListener(map, 'click', function(event) {
        console.log("map clicked at latlng: ", event.latLng.toString());
        //	click_position_info_div.value = "XXXXX";
        document.getElementById("click_position_info_div").innerText = 'Click position: ' + my_latlng_to_string(event.latLng);
    });

    // map center changed -> update displayed Map center lat and lng.
    console.log("A. map center: " + JSON.stringify(map.getCenter()));
// /* 
   google.maps.event.addListener(map, 'center_changed', function() {
	console.log("B. map center: " + JSON.stringify(map.getCenter()));
        document.getElementById("map_center_info_div").innerText = 'Map center: ' + my_latlng_to_string(map.getCenter());
    }); // */

    // zoom level changed -> update displayed zoom level.
    google.maps.event.addListener(map, 'zoom_changed', function(ev) {
        //   console.log("New zoom level: ", map.getZoom());
        document.getElementById("zoom_info_div").innerText = 'Zoom level: ' + map.getZoom();
    });

    // ******************** HANDLE CLICKING ON ANSWER BUTTON ***************
    function handle_answer_button_click(event, the_place, answer_buttons){ //, i) {
   //     var txtnode = event.target.childNodes[0];
        var clicked_button_text =  event.target.childNodes[0].nodeValue;

        // *********  MAPLABEL WITH TEXT DISPLAYED TO INDICATE ANSWER IS RIGHT OR WRONG  **********
        var right_wrong_label = new MapLabel({
            text: '',
            position: map_viewport_latlng(map, 0.5, 0.9),
            //new google.maps.LatLng(50,50),
            map: map,
            fontSize: 60,
            align: 'center',
            draggable: false,
            // true,
        });

        // ************* CONSTRUCT MARKERWITHLABEL ******************   
        var the_marker = new MarkerWithLabel({
            position: the_place.marker_position.latlng,
            draggable: true,
            raiseOnDrag: false,
            map: map,
            labelContent: the_place.name,
            labelAnchor: new google.maps.Point(110, 10),
            labelClass: "labels",
            // the CSS class for the label
            labelStyle: {
                opacity: 1,
                fontSize: 20
            },
            icon: spot,
        });
//	the_marker.position = the_place.marker_position.latlng;
//	the_marker.labelContent = the_place.name;

        // **************** RESPOND TO CLICK ON ANSWER BUTTON ****************************     
        var delay = 400; // time allowed (ms) after correct answer before going to next question.
        if (clicked_button_text === the_place.name) { // ************ CORRECT ANSWER. this answer is correct. ************
            update_array(the_place.history, new Object({
                correct: true,
                zoom_clicks: zooms
            })); // unshift and pop the place's history	
            right_wrong_label.text = "Yes, it's ";
/*	    console.log("SSSSSSSSSS place score: " + the_place.score);
	console.log("BEFORE. future, current, done sizes: " + Object.keys(future_places).length + "; " +
			    + Object.keys(current_places).length + "; " +
			    + Object.keys(done_places).length); // */
	    if(the_place.score >= place_sufficient_score){
		// transfer the place from current to done places
		if( (Object.keys(current_places).length > 0) && (Object.keys(future_places).length > 0) ){
		delete current_places[the_place.name]; // delete the key/val pair from current places
		done_places[the_place.name] = the_place; // add to done_places
	/*	console.log("future places: " + JSON.stringify(Object.keys(future_places)));
		for(var nom in current_places){
		    console.log("current name: "  + nom + "; " + current_places[nom].name);
		} // */
		// choose a place from future places and transfer it to current places
		
		
	//	if(Object.keys(future_places).length > 0){ // !== undefined){
var new_current_place_name = random_place(future_places);
		var new_current_place = future_places[new_current_place_name];
		new_current_place.age = Math.ceil(n_places_at_a_time/2);
	//	console.log("Anew current place name: " + new_current_place.name);
		delete future_places[new_current_place_name];		
		current_places[new_current_place_name] = new_current_place;
//	console.log("Bnew current place name: " + new_current_place.name);
/*	console.log("AFTER. future, current, done sizes: " + Object.keys(future_places).length + "; " +
			    + Object.keys(current_places).length + "; " +
			    + Object.keys(done_places).length); // */
	//	}

		var answer_button_areax = document.getElementById("answer_buttons");
		answer_button_areax.removeChild(answer_buttons[the_place.name]);
        answer_button_areax.appendChild(answer_buttons[new_current_place_name]);
		}

	    }
	    
        } else { // ************ WRONG ANSWER. this answer is wrong. ***********
            update_array(the_place.history, new Object({
                correct: false,
                zoom_clicks: 0
            }));
            right_wrong_label.text = "No, it's ";
            delay = 2500;
        }
        the_marker.labelContent = the_place.name;
        score += place_score_change(the_place, max_score_per_answer);
        document.getElementById("score_div").innerText = 'Score: ' + score;
        zooms = 0;

        // **************** GET NEXT PLACE **********************


	    
	var old_place = the_place;
	the_place_name = random_place(current_places); 
	the_place = current_places[the_place_name];	  
	console.log("the_place_name: " + the_place_name + " the place: " + the_place);
        the_place.age = 0;
      
        setTimeout(function() { // do some stuff after timeout of delay ms.
old_place.border_polygon.setMap(null);
 the_place.border_polygon.setMap(map);
            right_wrong_label.setMap(null);
            the_marker.setMap(null);
	    
	//    if(false){
	//	move_map_to_place(map, /*circle,*/ info_window, the_place, zoom_offset);
	//    }else{
		move_map_to_place(map, circle, info_window, the_place, zoom_offset);
//	    }
            zoom_level_text.innerText = 'Zoom level: ' + map.getZoom();
        },
        delay);
 
        return the_place; // Why return the_place ???
    } // end of handle_answer_button_click
} // end of zoom_out_game (constructor)


function place_score_change(place, max_score_per_answer) { // update the place's score, and return (new_score - old_score)
    var old_place_score = place.score;
    var new_place_score = 0;
    for (var i = 0; i < place.history.length; i++) { // just
        if (place.history[i].correct !== true) {
            break;
        }
        new_place_score += Math.max(0, max_score_per_answer - place.history[i].zoom_clicks);
    }

    new_place_score = Math.min(max_place_score, new_place_score);
    place.score = new_place_score;
    return new_place_score - old_place_score;
}