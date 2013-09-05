var dodecagon = {
    path: // 'M -10,0 -8,6  -6,8 0,10 6,8 10,0 0,-10 z',
    'M -10,0 -8,6 -6,8  0,10 6,8 8,6  10,0 8,-6, 6,-8  0,-10 -6,-8  -8,-6  z',
    //    google.maps.SymbolPath.CIRCLE,
    fillColor: "black",
    fillOpacity: 0.8,
    scale: 0.8,
    strokeColor: "gold",
    strokeWeight: 3
};

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
    initialize_places(places);
    var zoom_offset = -2;
    var max_place_score = 10;
    var the_place = random_place(places);

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
    var the_place_score = max_place_score;

    var zoom_button_area = document.getElementById("zoom_buttons");

    var zoom_out_button = document.createElement("button");
    zoom_out_button.appendChild(document.createTextNode("Zoom Out"));
    zoom_out_button.addEventListener("click", function(event) {
        // console.log("zoom out button clicked!!!!!");
        map.setZoom(map.getZoom() - 1);
        zoom_level_text.innerText = 'Zoom level: ' + map.getZoom();
        the_place_score--;
    }, false);
    zoom_button_area.appendChild(zoom_out_button);

    var zoom_in_button = document.createElement("button");
    zoom_in_button.appendChild(document.createTextNode("Zoom In"));
    zoom_in_button.addEventListener("click", function(event) {
        //     console.log("zoom in button clicked!!!!!");
        map.setZoom(map.getZoom() + 1);
        zoom_level_text.innerText = 'Zoom level: ' + map.getZoom();
        the_place_score--;
    }, false);
    zoom_button_area.appendChild(zoom_in_button);
    var zoom_level_text = document.createElement("button");
    zoom_level_text.innerText = 'Zoom level: ' + map.getZoom();
    zoom_button_area.appendChild(zoom_level_text);


    var answer_buttons = new Array();
    var answer_button_area = document.getElementById("answer_buttons");



    for (var i = 0; i < places.length; i++) {
        answer_buttons[i] = document.createElement("a"); // using a link, not button at present.
        //      answer_buttons[i] = document.createElement("BUTTON"); // using a link, not button at present.
        var t = document.createTextNode(places[i].name);
        answer_buttons[i].appendChild(t);
        //    answer_buttons[i].textContent = places[i].name;
        answer_buttons[i].href = "#"; // what does this do??? - makes it a link




        answer_buttons[i].addEventListener("click", function(event) {
                the_place = handle_answer_button_click(event, the_place);
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

    function handle_answer_button_click(event, the_place) {
        var txtnode = event.target.childNodes[0];
        var txt = txtnode.nodeValue;
    //    console.log("text: " + txt );
//	console.log(" the place name: " + the_place.name);


 var right_wrong_label = new MapLabel({
     text: '',
     position: map_viewport_latlng(map, 0.5, 0.9), //new google.maps.LatLng(50,50),
           map: map,
           fontSize: 40,
    align: 'center',
    draggable: false, // true,
         });

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


       
        var delay = 1000;
            if (txt == the_place.name) {
		right_wrong_label.text = "Yes, it's "
	the_marker.labelContent = the_place.name;
                console.log("Yes, it's " + the_place.name);
            //        alert("Yes, it's " + the_place.name);
                if (the_place.last_answer_correct !== true) {
                    score += the_place_score;
                    document.getElementById("score_div").innerText = 'Score: ' + score;
                }
                the_place.last_answer_correct = true;
	

            } else {
		right_wrong_label.text = "No, it's ";
			the_marker.labelContent = the_place.name;
                console.log("No, it's " + the_place.name + ", not " + txt);
      //          alert("No, it's " + the_place.name + ", not " + txt);
 
  /*  info_window.setContent(the_place.name);
 info_window.setPosition(the_place.marker_position);
 info_window.open(map); */
                if (the_place.last_answer_correct === true) score--;
                the_place.last_answer_correct = false;
		delay = 2500;
            }
 //   };

the_place = random_place(places);
 setTimeout(function() {
     right_wrong_label.setMap(null);
     the_marker.setMap(null);
            the_place.age = 0;
            console.log("handle_.... (next)place name: " + the_place.name);
            the_place_score = 10; // maximum you can get by answering place correctly (i.e. if no zooming, panning)
            move_map_to_place(map, circle, info_window, the_place, zoom_offset);
            zoom_level_text.innerText = 'Zoom level: ' + map.getZoom();
  //          console.log("SCORE: " + score);
  //          console.log("circle position:   {lat: ", circle.getCenter().lat() + ", lng: " + circle.getCenter().lng() + "}  ");
 }, delay);
    
        return the_place;
    } // end of handle_answer_button_click
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

function initialize_places(places) {
    var indices = [];
    for (var i = 0; i < places.length; i++) {
        indices[i] = i;
    }
    indices.sort(function(a, b) {
        return Math.random() > 0.5
    });
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
