function place_object_editor() { //  this function is a constructor, so 'this' keyword refers to the object contructed

    var init_latlng = new google.maps.LatLng(42.4414,-76.4796);

    // ********************* CONSTRUCT MAP *****************************
    var mapOptions = {
        zoom: 3,
     //   center: the_place.frame_center.latlng,
	center: init_latlng,
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

 /*   // *************************  CONSTRUCT CIRCLE TO MARK PLACE (OPTIONAL)  ****************************
    var circle = new google.maps.Circle({
        strokeColor: 'B0B000',
        strokeOpacity: 0.75,
        strokeWeight: 2,
        //   fillColor: '#FF0000',
        fillOpacity: 0.0,
        map: map,
        clickable: true,
        draggable: false,
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

    google.maps.event.addListener(circle, 'click', function(ev) { // click on circle -> show latitude and longitude in console.
        console.log("place: " + info_window.content + ". location:  {lat: ", circle.getCenter().lat() + ", lng: " + circle.getCenter().lng() + "}  ");
    });

    // Initialize text displayed in scoer_div, etc.
    document.getElementById("score_div").innerText = 'Score: 0';
    document.getElementById("zoom_info_div").innerText = " Zoom level: " + map.getZoom();
    document.getElementById("map_center_info_div").innerText = "Map center: " + my_latlng_to_string(map.getCenter());
    document.getElementById("click_position_info_div").innerText = "Click position: "; */

    // ************************  CREATE ZOOM BUTTONS  ***********************
    var zoom_button_area = document.getElementById("zoom_buttons");

    var zoom_out_button = document.createElement("button");
    zoom_out_button.appendChild(document.createTextNode("Zoom Out"));
    zoom_out_button.addEventListener("click", function(event) {
        map.setZoom(map.getZoom() - 1);
   //     zoom_level_text.innerText = 'Zoom level: ' + map.getZoom();
    },
    false);
    zoom_button_area.appendChild(zoom_out_button);

    var zoom_in_button = document.createElement("button");
    zoom_in_button.appendChild(document.createTextNode("Zoom In"));
    zoom_in_button.addEventListener("click", function(event) {
        map.setZoom(map.getZoom() + 1);
   //     zoom_level_text.innerText = 'Zoom level: ' + map.getZoom();
    },
    false);
    zoom_button_area.appendChild(zoom_in_button);

    document.getElementById("click_position_info_div").innerText = 'Click position: {lat: _____ , lng: _____ }'; // ' + my_latlng_to_string(init_latlng);
    document.getElementById("map_center_info_div").innerText = 'Map center: ' + my_latlng_to_string(init_latlng);
document.getElementById("zoom_info_div").innerText = 'Zoom level: ' + map.getZoom();
 /*   var zoom_level_text = document.createElement("button");
    zoom_level_text.innerText = 'Zoom level: ' + map.getZoom();
    zoom_button_area.appendChild(zoom_level_text); */

    // ******************* ADD EVENT LISTERNERS TO MAP *********************
    // click -> show click position lat and lng
    google.maps.event.addListener(map, 'click', function(event) {
        console.log("map clicked at latlng: ", event.latLng.toString());
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