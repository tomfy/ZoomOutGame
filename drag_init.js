var puzzle_obj;
var uniform_radius = 3500;
var close_enough_distance = 0.2;
 //   this.Peninsulas = Peninsulas;
 //   this.PopulousIslands = PopulousIslands;
 //   this.WorldBigIslands_top20 = WorldBigIslands_top20;
 //   this.GBcities = GBcities;
function initialize() {
 
  var places = [];
    //  places = WorldBigIslands_21_48.slice(0);
    //    places = MediterraneanIslands.slice(0);

    //     places = EuropeCountries.slice(0);
    //    places = Archipelagoes.slice(0);
    //   places = WorldCities.slice(0);
    //    places = oldPeninsulas.slice(0);


    //   places = Peninsulas.slice(0); 
    places = GBcities.slice(0,5);
  //  places = PopulousIslands.slice(0);
 // places = WorldBigIslands_top32.slice(20,32);
// places = Philippines_Big11.slice(0);
//    places = StrangePlaces.slice(0);

    var cropped_places = [];
 //   if(1){
    var minlat = -10;
    var maxlat = 38;
    var minlng = 70;
    var maxlng = 140;
    for(var i=0; i<places.length; i++){
	var lat = places[i].lat;
	var lng = places[i].lng;
	if(lat > minlat  && lat <= maxlat){
	    if(lng >= minlng && lng <= maxlng){
		cropped_places.push(places[i]);
	    }
	}
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

    for(var i = 0; i<places.length; i++){
	places[i].radius = uniform_radius;
    }

    puzzle_obj = new drag_game(places);
    console.log("XXXXXXXXXXXXXXXXXXXXXXXX");
//   puzzle_obj = new zoom_out_game(places);

}
