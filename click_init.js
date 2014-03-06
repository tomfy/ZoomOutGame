var puzzle_obj;
var radius_factor = 1.5;
var correct_points = 3;
var incorrect_cost = 1;
 //   this.Peninsulas = Peninsulas;
 //   this.PopulousIslands = PopulousIslands;
 //   this.WorldBigIslands_top20 = WorldBigIslands_top20;
 //   this.GBcities = GBcities;
var history_size = 5;
var max_place_score = 30;
var n_places_at_a_time = 6;
var n_places_in_quiz = 50;
var spot = { // the spot used in labeled markers.
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: "black",
    fillOpacity: 0.0001,
    scale: 7,
    strokeColor: "gold",
    strokeWeight: 3,
};

function initialize() {
  

  var places = [];
    //  places = WorldBigIslands_21_48.slice(0);
  //  places = MediterraneanIslands.slice(0,6);

    //     places = EuropeCountries.slice(0);
    //    places = Archipelagoes.slice(0);
   //    places = WorldCities.slice(0);
    //    places = oldPeninsulas.slice(0);
 // places = GBislands.slice(0);
    places = Baltic_Islands.slice(0);
  for(var j=0; j< places.length; j++){
	console.log("YYY, j: " + j + " jth place: " + JSON.stringify(places[j]) );
    }

    //   places = Peninsulas.slice(0); 
//    places = GBcities.slice(0);
  //  places = PopulousIslands.slice(0);
//	 places = WorldBigIslands_top38.slice(0,12);
 // places = Philippines_Big11.slice(0);
//    places = StrangePlaces.slice(0);

    var cropped_places = [];
 //   if(1){
    var minlat = -10;
    var maxlat = 38;
    var minlng = 70;
    var maxlng = 140;
    for(var i=0; i<places.length; i++){
	console.log("places[i]: " + JSON.stringify(places[i]) );

	console.log("places[i].name: " + places[i].name + " population: " + places[i].population); // area, zoom, frame_center: "
	var lat = places[i].lat;
	var lng = places[i].lng;
	if(lat > minlat  && lat <= maxlat){
	    if(lng >= minlng && lng <= maxlng){
		cropped_places.push(places[i]);
	    }
	}
    }

 for(var i=0; i<places.length; i++){
     places[i].history = createArray(history_size,  new Object({correct: false, zoom_clicks: 0}) ); 
   //  places[i].zoom_clicks = 0;
     places[i].score = 0;
     places[i].age = 0;
     console.log("XXXX place, history: " + places[i].name + "  " + JSON.stringify(places[i].history));
}
 //   }
  //  places = WorldBigIslands_top20.slice(0, 15);
    console.log('counter, places.length: ' + localStorage.counter + " " + places.length);
    //   shuffle(places); 

    //    if (localStorage.counter >= 0) {
    //        localStorage.counter++;
    //    } else {
    //        localStorage.counter = 0;
    //    }

    puzzle_obj = new click_game(places);
    console.log("XXXXXXXXXXXXXXXXXXXXXXXX");
//   puzzle_obj = new zoom_out_game(places);

}
