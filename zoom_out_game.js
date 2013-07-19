
function zoom_out_game(places) { // function zoom_out_game is a constructor, so 'this' keyword
// refers to the object contructed
    var zoom_offset = -1;
    var the_place = random_place(places);
  //  the_place.age = 0; 
    var map = map_of_place(the_place, zoom_offset);
    
    var score = 0; // number of question which were answered correctly on most recent asking.

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
	map = map_of_place(the_place, zoom_offset);
    }, false);
    zoom_button_area.appendChild(next_button);

    var answer_buttons = new Array();
    var answer_button_area = document.getElementById("answer_buttons");

    for (var i = 0; i < places.length; i++) {
        var a = answer_buttons[i] = document.createElement("a"); // using a link, not button at present.
        a.textContent = places[i].name;
        a.href = "#";
        answer_buttons[i].addEventListener("click", function(event) {
	    the_place = handle_answer_button_click(event, the_place);
          }, false);
             answer_button_area.appendChild(answer_buttons[i]);
    }

    function handle_answer_button_click(event, the_place) {
        var txtnode = event.target.childNodes[0];
        var txt = txtnode.nodeValue;
        console.log("text: " + txt);
        if (txt == the_place.name) {
            console.log("Yes, it's " + the_place.name);
        //    alert("Yes, it's " + the_place.name);
	    if(the_place.last_answer_correct !== true) score++;
	    the_place.last_answer_correct = true;
        } else {
            console.log("No, it's " + the_place.name + ", not " + txt);
            alert("No, it's " + the_place.name + ", not " + txt);
	    if( the_place.last_answer_correct === true) score--;
	    the_place.last_answer_correct = false;
        }
	the_place = random_place(places);
	the_place.age = 0;
	console.log("handle_.... (next)place name: " + the_place.name);
	map = map_of_place(the_place, zoom_offset);
	console.log("SCORE: " + score);
	console.log("circle position:   {", the_place.marker.getCenter().lat() + ", lng: " + the_place.marker.getCenter().lng() + "}  ");
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

function map_of_place(the_place, zoom_offset) {
    console.log("the_place.frame_center lat, lng: " + the_place.frame_center.lat + "  " + the_place.frame_center.lng);
 console.log("the_place.marker_position lat, lng: " + the_place.marker_position.lat + "  " + the_place.marker_position.lng);
    if(the_place.frame_center_latlng === undefined) the_place.frame_center_latlng = new google.maps.LatLng(the_place.frame_center.lat, the_place.frame_center.lng);

// get a map of the_place if not already defined ...
    if(the_place.map === undefined){ 
	console.log("the_place.map is undefined. get a map. place name: " + the_place.name);
    var mapOptions = {
        zoom: the_place.zoom + zoom_offset,
        center: the_place.frame_center_latlng,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        draggable: true,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        disableDefaultUI: true
    };
	the_place.map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

 if(the_place.marker_position_latlng === undefined) the_place.marker_position_latlng = new google.maps.LatLng(the_place.marker_position.lat, the_place.marker_position.lng);
    console.log('circle lat, lng: ' + the_place.marker_position.lat + "  " + the_place.marker_position.lng);
    console.log('frame latlng: ' + the_place.frame_center_latlng.toString());
    console.log('circle latlng: ' + the_place.marker_position_latlng.toString());
     if (the_place.marker === undefined) {
        var circle = new google.maps.Circle({
            strokeColor: 'B0D000', // 0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            //   fillColor: '#FF0000',
            fillOpacity: 0.0,
            map: the_place.map,
	    clickable: true,
	    draggable: true,
            center: the_place.marker_position_latlng,
            radius: the_place.radius * Math.pow(2, 10 - the_place.zoom)
        });
var infoWindow= new google.maps.InfoWindow({
    content: the_place.name
    });
	 google.maps.event.addListener(circle, 'rightclick', function(ev){
    infoWindow.setPosition(circle.getCenter());
    infoWindow.open(map);
	//     console.log("place: " + infoWindow.content + ". location:  {lat: ", circle.getCenter().lat() + ", lng: " + circle.getCenter().lng() + "}  ");
});
	 google.maps.event.addListener(circle, 'click', function(ev){
	     console.log("place: " + infoWindow.content + ". location:  {lat: ", circle.getCenter().lat() + ", lng: " + circle.getCenter().lng() + "}  ");
	 }); 
	 the_place.marker = circle;
     }else{
	 the_place.marker.map = the_place.map;
     }
    }
    return the_place.map;
} // end of map_of_place

function relprob(places, i) {
    var age = places[i].age;
    var last_answer_correct = places[i].last_answer_correct;
    var size = places.length;
    var grow_factor = 1.2;
    var reask_delay = 2;
    var relprob = Math.pow(grow_factor, age);
    console.log("last_answer_correct: " + last_answer_correct + "  age: " + age + "  reask_delay: " + reask_delay); 
    if(! last_answer_correct  &&  age >= reask_delay){
	relprob *= Math.pow(grow_factor, size - reask_delay);

    }
	console.log("i, age, relprob: " + i + "  " + age + "  " + relprob);
    relprob -= 1;
    relprob = (relprob > 0) ? relprob : 0;
    return relprob;
}
