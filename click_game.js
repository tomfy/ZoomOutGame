function click_game(places) { // function zoom_out_game is a constructor, so 'this' keyword
    // refers to the object contructed
 
    console.log("places.length: " + places.length);
  //  console.log("places: " + JSON.stringify(places) );
    var indices = in_order_array(places.length);
    shuffle(indices); 
//    indices = randomize_array_order(indices);
    indices = indices.concat(slightly_out_of_order_array(indices.slice()));
    console.log("indices:::::. " + indices + "\n");
 //  exit;
    initialize_places_latlng(places);
    initialize_places_ages(places);

    var factor = 1;
    var zoom_llbounds = get_zoom_level_to_contain_places(places, factor);
    var map_center_latlng = zoom_llbounds[0];
    var zoom = zoom_llbounds[1];
    var llbounds = zoom_llbounds[2];

    var zoom_offset = 0;
    console.log("places length: " + places.length);
    var the_index = indices.shift(); // random_place(places);
    var the_place = places[the_index];
    console.log("index, place: " + the_index + "  " + the_place.name);
    //  zoom += -2;
    // get map, circle, info window:
    var mapOptions = {
        zoom: zoom,
        center: map_center_latlng,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        draggable: true, // false,
        // true,
        clickable: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        disableDefaultUI: true,
        zoomControl: false,
        // true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
        }
    };
    var map_ll_bounds;
    var markers = [];
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    if (the_place.border_polygon !== undefined) {
        the_place.border_polygon.setMap(map);
    }
    console.log("before. zoom: " + map.getZoom());

    map.fitBounds(llbounds);
    console.log("after. zoom: " + map.getZoom());

    google.maps.event.addListenerOnce(map, 'bounds_changed', function() {
        //    put_circles_on_map(map, places);
        put_borders_on_map(map, places);
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
        /*    question_buttons[i].addEventListener("click", function(event) {
            the_place = handle_question_button_click(event, the_place);
        },
					     false); */
    }
    question_button_area.appendChild(question_buttons[the_index]); // show 

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
        },
        false);
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
        },
        false);
    zoom_button_area.appendChild(zoom_in_button);
    var score = 0; // number of question which were answered correctly on most recent asking.
    document.getElementById("score_div").innerText = 'Score: ' + score;

    function put_borders_on_map(map, places) {
        for (var i = 0; i < places.length; i++) {
  // places[i].border_polygon.innerPolygon.setMap(map);
	    if(places[i].border_polygon !== undefined){ // BORDER is defined, use it.
            places[i].border_polygon.setMap(map);
	  

            var the_polygon = places[i].border_polygon;
            the_polygon.place_name = places[i].name;
            (function() { // closure
         //    /* 
  google.maps.event.addListener(the_polygon, 'click', function() {
		    console.log("ASDFASDF: this: " + this.place_name + "  " + this.strokeColor );
                    var correct_answer = (this.place_name === the_place.name);; // the_place : place asked, this: circle.
                    if (correct_answer) {
                        console.log("CORRECT! " + this.place_name + "  " + the_place.name);

			this.setOptions({ strokeOpacity: (this.strokeOpacity > 0.5)? 0.01 : 0.75 });
			this.setOptions({ unhighlightedFillOpacity: 0.01 });
			this.setOptions({ fillOpacity: this.unhighlightedFillOpacity});

                        question_button_area.removeChild(question_buttons[the_index]);
                        score += correct_points;

                        update_array(the_place.history, new Object({
                            correct: true,
                            zoom_clicks: 0
                        })); // unshift and pop	

                        the_index = indices.shift(); // random_place(places)
			console.log("XXX the index: " + the_index );
                        the_place = places[the_index];
                        question_button_area.appendChild(question_buttons[the_index]);
                    } else {
                        score -= incorrect_cost;
                        console.log("Nope. You clicked: " + this.place_name);

                        update_array(the_place.history, new Object({
                            correct: false,
                            zoom_clicks: 0
                        })); // unshift and pop	
                    };
                    document.getElementById("score_div").innerText = 'Score: ' + score;
                }); // end of event listener for click on polygon
     /* var info_window = new google.maps.InfoWindow({
                    content: places[i].name
                });
		google.maps.event.addListener(the_polygon, 'rightclick', function(ev) {
                    info_window.setPosition(this.center);
                    info_window.open(map);
                }); */
		  google.maps.event.addListener(the_polygon, 'mouseover', function(ev) {
			  this.setOptions({fillOpacity: 0.4});
                }); // end event listener for mouseover on polygon */
     
   google.maps.event.addListener(the_polygon, 'mouseout', function(ev) {
        this.setOptions({fillOpacity: this.unhighlightedFillOpacity});
                }); // end event listener for mouseout on polygon */
   //    google.maps.event.addListener(the_polygon, 'mousemove', function(ev) {
//	   console.log("mousemove ..." + this.place_name);
  //     }); // end event listener for mousemove on polygon
           
            })();
            }else{ // BORDER undefined, use circle
 (function() { // closure
                var circle = new google.maps.Circle({
                    strokeColor: 'A0D040',
                    // 0000',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    //   fillColor: '#FF0000',
                    fillOpacity: 0.0,
                    map: map,
                    clickable: true,
                    draggable: false,
                    //true,
                    center: places[i].marker_position.latlng,
                    radius: places[i].radius * radius_factor,
                    // * Math.pow(2, 8 - map.zoom)
                    place_name: places[i].name
                });

                google.maps.event.addListener(circle, 'click', function() {

                    console.log("circle; click.  place: " + this.place_name);
                    console.log("the_place.name: " + the_place.name);
                    var correct_answer = (this.place_name === the_place.name);; // the_place : place asked, this: circle.
                    if (correct_answer) {
                        console.log("CORRECT! " + this.place_name + "  " + the_place.name);
                     /*   this.setOptions({
                            strokeOpacity: 0.6
                        }); */
			var stroke_opacity = this.strokeOpacity;

			if(stroke_opacity > 0.75){ 
                        this.setOptions({
                            strokeColor: 'E07020',
			    strokeOpacity: 0.7,
                        }); 
			}else if(stroke_opacity > 0.5){
			    this.setOptions({strokeOpacity: 0.01 });
			}else{
			    this.setOptions({
				strokeColor:  'A0D040',
				strokeOpacity: 0.8,
			    });
			}
                        question_button_area.removeChild(question_buttons[the_index]);
                        score += correct_points;

                        update_array(the_place.history, new Object({
                            correct: true,
                            zoom_clicks: 0
                        })); // unshift and pop	

                        the_index = random_place(places)
                        the_place = places[the_index];
                        question_button_area.appendChild(question_buttons[the_index]);
                    } else {
                        score -= incorrect_cost;
                        console.log("Nope. You clicked: " + this.place_name);

                        update_array(the_place.history, new Object({
                            correct: false,
                            zoom_clicks: 0
                        })); // unshift and pop	
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
    }


    function put_circles_on_map(map, places) {

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
                    draggable: false,
                    //true,
                    center: places[i].marker_position.latlng,
                    radius: places[i].radius * radius_factor,
                    // * Math.pow(2, 8 - map.zoom)
                    place_name: places[i].name
                });

                google.maps.event.addListener(circle, 'click', function() {

                    console.log("circle; click.  place: " + this.place_name);
                    console.log("the_place.name: " + the_place.name);
                    var correct_answer = (this.place_name === the_place.name);; // the_place : place asked, this: circle.
                    if (correct_answer) {
                        console.log("CORRECT! " + this.place_name + "  " + the_place.name);
                        this.setOptions({
                            strokeOpacity: 0.6
                        });
                        this.setOptions({
                            strokeColor: 'E0B040',
			    strokeOpacity: 0.8,
                        });
                        question_button_area.removeChild(question_buttons[the_index]);
                        score += correct_points;

                        update_array(the_place.history, new Object({
                            correct: true,
                            zoom_clicks: 0
                        })); // unshift and pop	

                        the_index = random_place(places)
                        the_place = places[the_index];
                        question_button_area.appendChild(question_buttons[the_index]);
                    } else {
                        score -= incorrect_cost;
                        console.log("Nope. You clicked: " + this.place_name);

                        update_array(the_place.history, new Object({
                            correct: false,
                            zoom_clicks: 0
                        })); // unshift and pop	
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
