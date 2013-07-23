 function drag_game(places) { // function zoom_out_game is a constructor, so 'this' keyword
     // refers to the object contructed
     //    if (false && localStorage.counter >= places.length) {
     //      localStorage.counter = 0;
     //      shuffle(places);
     //      console.log("shuffled places array: " + places);
     //  }
     //  console.log("counter: " + localStorage.counter);

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
         //  a_place.latlng = new google.maps.LatLng(a_place.lat, a_place.lng);
     }
     avg_lat /= places.length;
     avg_lng /= places.length;
     var map_center_latlng = new google.maps.LatLng(center_lat, center_lng);
     var mapOptions = {
         zoom: 6,
         center: map_center_latlng,
         mapTypeId: google.maps.MapTypeId.SATELLITE,
         draggable: true,
         scrollwheel: false,
         disableDoubleClickZoom: true,
         disableDefaultUI: true
     };
     var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
     for (var i = 0; i < places.length; i++) {
         var a_place = places[i];
         //     if (a_place.radius !== undefined) {
         var radius = 10000;
         var circle = new google.maps.Circle({
             strokeColor: 'B0D000', // 0000',
             strokeOpacity: 0.8,
             strokeWeight: 2,
             //   fillColor: '#FF0000',
             fillOpacity: 0.0,
             map: map,
             draggable: true,
             center: new google.maps.LatLng(a_place.marker_position.lat, a_place.marker_position.lng),
             radius: 30000 // 6667 // a_place.radius  // 10000
         });
         circle.name = a_place.name;
         console.log("circle name: " + circle.name);
         google.maps.event.addListener(circle, 'click', function(ev) {
             // 3 seconds after the center of the map has changed, pan back to the
             // marker.

             console.log("place where this circle is: " + this.name);
             handle_circle_click(ev, this.name);

         });

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
	 for(var i = 0; i<places.length ; i++){
	     console.log("iiiiii: " + i);
  var marker1 = new MarkerWithLabel({
       position: places[i].marker_position.latlng,
       draggable: true,
       raiseOnDrag: false,
       map: map, 
 //     labelAnchor: new google.maps.Point(50, -10),
       labelContent: places[i].name,
  //     labelAnchor: new google.maps.Point(50, -10),
 labelAnchor: new google.maps.Point(110, 11),
       labelClass: "labels", // the CSS class for the label
      labelStyle: {opacity: 1, fontSize: 20},
      icon: dodecagon,
  });
  console.log("iiiiiiiiii: " + i);
	 }
       
     } // loop over circles


     var zoom_button_area = document.getElementById("zoom_buttons");

     var zoom_out_button = document.createElement("button");
     zoom_out_button.appendChild(document.createTextNode("Zoom Out"));
     zoom_out_button.addEventListener("click", function(event) {
         console.log("zoom out button clicked!!!!!");
         map.setZoom(map.getZoom() - 1);
     }, false);
     zoom_button_area.appendChild(zoom_out_button);

     var zoom_in_button = document.createElement("button");
     zoom_in_button.appendChild(document.createTextNode("Zoom In"));
     zoom_in_button.addEventListener("click", function(event) {
         console.log("zoom in button clicked!!!!!");
         map.setZoom(map.getZoom() + 1);
     }, false);
     zoom_button_area.appendChild(zoom_in_button);

     var next_button = document.createElement("button");
     next_button.appendChild(document.createTextNode("Next"));
     next_button.addEventListener("click", function(event) {
         console.log("next button clicked!!!!!");
         //    the_place = random_place(places);
         //	map = map_of_place(the_place, zoom_offset);
     }, false);
     zoom_button_area.appendChild(next_button);

     //   var answer_buttons = new Array();
     var places_to_find_area = document.getElementById("answer_buttons");
console.log("before random_place. ");
     var the_place = random_place(places);
     console.log("after random_place. place name: " + the_place.name);
     //   for (var i = 0; i < places.length; i++) {
     //     var a = answer_buttons[i] =  
     var place_to_find = document.createElement("a"); // using a link, not button at present.
     place_to_find.textContent = the_place.name;
     place_to_find.href = "#";
  console.log("Bafter random_place. place name: " + the_place.name);
     place_to_find.addEventListener("click", function(event) {
         handle_answer_button_click(event, the_place.name)
     }, false);
  console.log("Cafter random_place. place name: " + the_place.name);
     places_to_find_area.appendChild(place_to_find);
  console.log("Dafter random_place. place name: " + the_place.name);

     function handle_answer_button_click(event, the_place) {
         var txtnode = event.target.childNodes[0];
         var txt = txtnode.nodeValue;
         console.log("text: " + txt);
         if (txt == the_place) {
             console.log("Yes, it's " + the_place);
             alert("Yes, it's " + the_place);
         } else {
             console.log("No, it's " + the_place + ", not " + txt);
             alert("No, it's " + the_place + ", not " + txt);
         }
     }
  console.log("Eafter random_place. place name: " + the_place.name);
     function handle_circle_click(event, the_place) {
         var txtnode = event.target.childNodes[0];
         var txt = txtnode.nodeValue;
         var name = the_place.name
         console.log("text: " + txt);
         if (txt == name) {
             console.log("Yes, it's " + name);
             alert("Yes, it's " + name);
         } else {
             console.log("No, it's " + name + ", not " + txt);
             alert("No, it's " + name + ", not " + txt);
         }
     }
  console.log("Fafter random_place. place name: " + the_place.name);
 } // end of drag_game (constructor)



 function random_place(places) {
     var sum_prob = 0;
     console.log("in random_places. size of places: " + places.length);
     for (var i = 0; i < places.length; i++) {
         //       for (var i = 0; i < places.length; i++) {
         places[i].relprob = relprob(places[i].age);
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


 function map_of_place(the_place, zoom_offset) {
     var latlng = new google.maps.LatLng(the_place.marker_position.lat, the_place.maker_position.lng);
     var radius = (the_place.radius == undefined) ? 5000 : the_place.radius;
     var mapOptions = {
         zoom: the_place.zoom + zoom_offset,
         center: latlng,
         mapTypeId: google.maps.MapTypeId.SATELLITE,
         draggable: true,
         scrollwheel: false,
         disableDoubleClickZoom: true,
         disableDefaultUI: true
     };
     var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
     if (the_place.radius !== undefined) {
         var circle = new google.maps.Circle({
             strokeColor: 'B0D000', // 0000',
             strokeOpacity: 0.8,
             strokeWeight: 2,
             //   fillColor: '#FF0000',
             fillOpacity: 0.0,
             map: map,
             center: latlng,
             radius: radius
         });
     }
     return map;
 } // end of next_place

 function relprob(age) {
     var grow_factor = 1.1;
     var relprob = Math.pow(grow_factor, age);
     relprob -= 1;
     relprob = (relprob > 0) ? relprob : 0;
     return relprob;
 }
