function zoom_out_game(places) { //  this function is a constructor, so 'this' keyword refers to the object contructed

  var zoom_offset = -1;
    var max_score_per_answer = 10; //  var max_place_score = 30;
   var score = 0; // number of question which were answered correctly on most recent asking.
    var zooms = 0;

// *************** INITIALIZE PLACES ****************************
    initialize_places_latlng(places); // initialize the places array (reg array)
// initialize assoc. arrays with places which are 'done', current (i.e. in play), and future (awaiting their turn)
    var done_places = new Object; 
    var current_places = new Object; // places.slice(0, n_places_at_a_time);
    var future_places = new Object; // places.slice(n_places_at_a_time, n_places_in_quiz);

    for(var i = 0; i<n_places_at_a_time; i++){ // current_places
	var the_place = places[i]; 
	current_places[the_place.name] = the_place;
	console.log("In current_places initialization. name, age: " + 
		    the_place.name + " ,  " + current_places[the_place.name].age);
    }
    for(var i = n_places_at_a_time; i<places.length; i++){ // future places
	var the_place = places[i];
	future_places[the_place.name] = the_place;
    }
    initialize_places_ages(current_places); // initialize ages of current places to random order.
  
// *************** CHOOSE A PLACE AT RANDOM *******************
    var the_place = random_place(current_places);
  
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

// *************************  CONSTRUCT CIRCLE TO MARK PLACE (OPTIONAL)  ****************************
    var circle = new google.maps.Circle({
        strokeColor: 'B0D000',
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
// ********************* INFOWINDOW TO SHOW PLACE'S NAME **************************
    var info_window = new google.maps.InfoWindow({
        content: the_place.name
    });
    google.maps.event.addListener(circle, 'rightclick', function(ev) { // rightclick on circle -> show infowindow
        info_window.setPosition(circle.getCenter());
        info_window.open(map);
    });
   
    google.maps.event.addListener(circle, 'click', function(ev) {  // click on circle -> show latitude and longitude in console.
        console.log("place: " + info_window.content + 
		    ". location:  {lat: ", circle.getCenter().lat() + ", lng: " + circle.getCenter().lng() + "}  ");
    });


// Initialize text displayed in scoer_div, etc.
 document.getElementById("score_div").innerText = 'Score: 0';
    document.getElementById("zoom_info_div").innerText = " Zoom level: " + map.getZoom();
    document.getElementById("map_center_info_div").innerText = "Map center: " + my_latlng_to_string(map.getCenter());
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
    }, false);
    zoom_button_area.appendChild(zoom_out_button);

    var zoom_in_button = document.createElement("button");
    zoom_in_button.appendChild(document.createTextNode("Zoom In"));
    zoom_in_button.addEventListener("click", function(event) {
        map.setZoom(map.getZoom() + 1);
        zoom_level_text.innerText = 'Zoom level: ' + map.getZoom();
	zooms++;
	the_place.zoom_clicks++;
    }, false);
    zoom_button_area.appendChild(zoom_in_button);
    var zoom_level_text = document.createElement("button");
    zoom_level_text.innerText = 'Zoom level: ' + map.getZoom();
    zoom_button_area.appendChild(zoom_level_text);

 // ************************  CREATE ANSWER BUTTONS  ***********************
// they are text elements for now ....
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

// ******************* ADD EVENT LISTERNERS TO MAP *********************
// click -> show click position lat and lng
    google.maps.event.addListener(map, 'click', function(event) {
        console.log("map clicked at latlng: ", event.latLng.toString());
        //	click_position_info_div.value = "XXXXX";
        document.getElementById("click_position_info_div").innerText = 'Click position: ' + my_latlng_to_string(event.latLng);
    });

// map center changed -> update displayed Map center lat and lng.
    google.maps.event.addListener(map, 'center_changed', function() {
        document.getElementById("map_center_info_div").innerText = 'Map center: ' + my_latlng_to_string(map.getCenter());
    });

// zoom level changed -> update displayed zoom level.
    google.maps.event.addListener(map, 'zoom_changed', function(ev) {
     //   console.log("New zoom level: ", map.getZoom());
        document.getElementById("zoom_info_div").innerText = 'Zoom level: ' + map.getZoom();
    });

// ******************** HANDLE CLICKING ON ANSWER BUTTON ***************
    function handle_answer_button_click(event, the_place, i) {
        var txtnode = event.target.childNodes[0];
        var txt = txtnode.nodeValue;
  
// *********  MAPLABEL WITH TEXT DISPLAYED TO INDICATE ANSWER IS RIGHT OR WRONG  **********
 var right_wrong_label = new MapLabel({
     text: '',
     position: map_viewport_latlng(map, 0.5, 0.9), //new google.maps.LatLng(50,50),
           map: map,
           fontSize: 60,
    align: 'center',
    draggable: false, // true,
         });

// ************* CONSTRUCT MARKERWITHLABEL ******************   
var the_marker = new MarkerWithLabel({
            position: the_place.marker_position.latlng,
            draggable: true,
            raiseOnDrag: false,
            map: map,
            labelContent: the_place.name,
            labelAnchor: new google.maps.Point(150, 11),
            labelClass: "marker_labels", // the CSS class for the label
            labelStyle: {
                opacity: 1,
                fontSize: 20
            },
            icon: spot,
        });
  
// **************** RESPOND TO CLICK ON ANSWER BUTTON ****************************     
        var delay = 800; // time allowed (ms) after correct answer before going to next question.
            if (txt == the_place.name) { // ************ CORRECT ANSWER. this answer is correct. ************
		update_array(the_place.history, new Object({correct: true, zoom_clicks: zooms}) ); // unshift and pop	
		right_wrong_label.text = "Yes, it's ";
            } else { // ************ WRONG ANSWER. this answer is wrong. ***********
		update_array(the_place.history, new Object({ correct: false, zoom_clicks: 0}) );
		right_wrong_label.text = "No, it's ";		
		delay = 2500;
            }
	the_marker.labelContent = the_place.name;
	score += place_score(the_place, max_score_per_answer); 
	document.getElementById("score_div").innerText = 'Score: ' + score;
	zooms = 0; 

// **************** GET NEXT PLACE **********************
	the_place = random_place(current_places);
	the_place.age = 0;
	setTimeout(function() { // do some stuff after timeout of delay ms.
	    right_wrong_label.setMap(null);
	    the_marker.setMap(null);         
            move_map_to_place(map, circle, info_window, the_place, zoom_offset);
            zoom_level_text.innerText = 'Zoom level: ' + map.getZoom();
	}, delay);  
        return the_place; // Why return the_place ???
    } // end of handle_answer_button_click

} // end of zoom_out_game (constructor)


function place_rights_in_a_row(place){
	var rights_in_a_row = 0;
	for(var i=0; i< place.history.length; i++){ // just
	    if(place.history[i].correct != true){break; }
	    rights_in_a_row++;
	}
	return rights_in_a_row;
    }

function place_score(place, max_score_per_answer){ // update the place's score, and return (new_score - old_score)
    var old_place_score = place.score;
	var new_place_score = 0;
	for(var i=0; i< place.history.length; i++){ // just
	    if(place.history[i].correct != true){break; }
	    new_place_score += Math.max(0, max_score_per_answer - place.history[i].zoom_clicks);	    
	}
    
    new_place_score = Math.min(max_place_score, new_place_score); 
    place.score = new_place_score;
    return new_place_score - old_place_score;
    }

function random_place(places) { // places is 
    var sum_prob = 0;
        for (var name in places) { 
            places[name].relprob = relprob(places, name);
            sum_prob += places[name].relprob;
        }

        var rprob = sum_prob * Math.random();
        sum_prob = 0;
        var chosen_name = 'noplace';
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
        console.log('Next place: ' + chosen_name + ". place: " + places[chosen_name].name + " age: " + places[chosen_name].age);
        return places[chosen_name];
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

