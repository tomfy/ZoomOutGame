var puzzle_obj;
var history_size = 6;
var n_places_at_a_time = 4;
var n_places_in_quiz = 20;
var radius_factor = 1.5;
var correct_points = 3;
var incorrect_cost = 1;
var max_place_score = 30;
var place_sufficient_score = 20;
var uniform_radius = 3500;
//var close_enough_distance = 0.1;

// the spot used in labeled markers.
var spot = {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: "black",
    fillOpacity: 0.0001,
    scale: 7,
    strokeColor: "gold",
    strokeWeight: 3,
};

var place_set_hash = new Object({
    World_Islands: World_Islands_Big_or_Populous,
    Islands_Philippines: Philippines_Islands_Big11,
    Islands_Indonesia: Indonesia_Islands_Big_or_Populous,
    Islands_GB: GB_Islands,
    Islands_Baltic: Baltic_Islands,
    Islands_Arctic: Arctic_Islands,
    Islands_Arctic_Canada: Canada_Islands_Arctic
});
    

   // ******** ISLANDS *************
    //	GB_Islands.slice(ilo, ihi);
    //    Baltic_Islands.slice(ilo, ihi);
    // World_Islands_Big.slice(ilo, ihi);
    //    World_Islands_Populous.slice(ilo, ihi);
    //    Philippines_Islands_Big11.slice(ilo, ihi);
    //    Indonesia_Islands_Big.slice(ilo, ihi);
    //    Indonesia_Islands_Populous.slice(ilo, ihi);
    //    Indonesia_BOP.slice(ilo, ihi);
    //    Canada_Islands_Arctic.slice(ilo, ihi);
    //    Arctic_Islands.slice(ilo, ihi);

    //    World_Islands_Big_or_Populous; // assoc. array

    // ********* OTHER ***********
    //   places = MediterraneanIslands.slice(0);
    //      places = EuropeCountries.slice(0);
    //     places = Archipelagoes.slice(0);
    //   places = WorldCities.slice(0);
    //    places = oldPeninsulas.slice(0);

    //   places = Peninsulas.slice(0,15); 
    //   places = GBcities.slice(0);
    //   places = StrangePlaces.slice(0);

function initialize(){
// get options from form
    var param_value_pairs = location.search.substr(1).split('&'); // param_value_pairs is array, could be e.g. [a=6, b=7] 
      var param_hash = {};
      for(i in param_value_pairs){
      var name_value = param_value_pairs[i].split('=');
      param_hash[name_value[0]] = unescape(name_value[1]);
      }
    initialize_game(param_hash);
}

    function initialize_game(param_hash){
    var places = []; // places_set_hash[places_set_name]; // reg. or assoc. array of places
	places = place_set_hash[param_hash['place_set_name']].slice(0); // choose the right array from has of arrays, and copy.
	places = sort_places(places, param_hash['sort_type']);
    places = initialize_places(places);
var game_type = param_hash['game_type'];    
if(game_type === 'Zoom_Out_Game'){
	puzzle_obj = new zoom_out_game(places);
    }else if(game_type === 'Drag_Game'){
	puzzle_obj = new drag_game(places);
    }else if(game_type === 'Click_Game'){
	puzzle_obj = new click_game(places);
    }
}

function sort_places(places, sort){
  if (sort === 'Area') {
        places.sort(function(a, b) {
            return b.area.sqkm - a.area.sqkm;
        }); // by area
    } else if (sort === 'Population') {
        places.sort(function(a, b) {
            return b.population.kilopeople - a.population.kilopeople;
        });
    } else if (sort === 'Min_AP_Ranks') {
        places.sort(function(a, b) {
            return Math.min(a.area.rank, a.population.rank) - Math.min(b.area.rank, b.population.rank)
        });
    } else if (sort === 'Max_AP_Ranks') {
        places.sort(function(a, b) {
            return Math.max(a.area.rank, a.population.rank) - Math.max(b.area.rank, b.population.rank)
        });
    } else if (sort === 'Sum_AP_Ranks') {
        places.sort(function(a, b) {
            return (a.area.rank + a.population.rank) - (b.area.rank + b.population.rank)
        });
    } else if (sort === 'Area_times_Population') {
        places.sort(function(a, b) {
            return (b.area.sqkm * b.population.kilopeople) - (a.area.sqkm * a.population.kilopeople)
        });
    } else { // unknown or undefined sort; defaults to sorting by area
 places.sort(function(a, b) {
            return b.area.sqkm - a.area.sqkm;
        }); // by area
    }
    return places;
}

function initialize_places(places) { // initialize, history, score, age, 
   
    for (var i = 0; i < places.length; i++) {
        console.log("GGG: i, name: " + i + "  " + places[i].name);
    }
   console.log("AAA: " + places.length);
// slice to first n_places_in_quiz  
    places = places.slice(0, n_places_in_quiz);
 console.log("ABB: " + places.length);
    for (var i = 0; i < places.length; i++) {
        places[i].history = createArray(history_size, new Object({
            correct: false,
            zoom_clicks: 0
        }));
        places[i].score = 0;
        places[i].age = 0;
        console.log("XXXX place, history: " + places[i].name + "  " + JSON.stringify(places[i].history));
    }
    console.log("BBB: " + places.length);
    return places;
}
