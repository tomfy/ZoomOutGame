var puzzle_obj;
var history_size = 6;
var max_place_score = 30;
var n_places_at_a_time = 112;
var n_places_in_quiz = 50;
var radius_factor = 1.5;
var correct_points = 3;
var incorrect_cost = 1;
var max_place_score = 30;
var uniform_radius = 3500;
var close_enough_distance = 0.1;

// the spot used in labeled markers.
var spot = {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: "black",
    fillOpacity: 0.0001,
    scale: 7,
    strokeColor: "gold",
    strokeWeight: 3,
};

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

function initialize_zoom_out_game() {
    var places = initialize_places(World_Islands_Big.slice(0,20));
    sort_places(places, 'Area');
    //    puzzle_obj = new drag_game(places);
    puzzle_obj = new zoom_out_game(places);
}

function initialize_click_game() {
    var which_places = Indonesia_Islands_Big.slice(0,12);
    var places = initialize_places(which_places);
    sort_places(places, 'Area');
    console.log("In click_game_initialize(). places.length: " + places.length);
    puzzle_obj = new click_game(places);
}

function initialize_drag_game() {
    var places = initialize_places(Philippines_Islands_Big11);
    sort_places(places, 'Area');
    console.log("In drag_game_initialize(). places.length: " + places.length);
    puzzle_obj = new drag_game(places);
}

function sort_places(places, sort){
  if (sort == 'Area') {
        places.sort(function(a, b) {
            return b.area.sqkm - a.area.sqkm;
        }); // by area
    } else if (sort == 'Population') {
        places.sort(function(a, b) {
            return b.population.kilopeople - a.population.kilopeople;
        });
    } else if (sort == 'Min_AP_Ranks') {
        places.sort(function(a, b) {
            return Math.min(a.area.rank, a.population.rank) - Math.min(b.area.rank, b.population.rank)
        });
    } else if (sort == 'Max_AP_Ranks') {
        places.sort(function(a, b) {
            return Math.max(a.area.rank, a.population.rank) - Math.max(b.area.rank, b.population.rank)
        });
    } else if (sort == 'Avg_AP_Ranks') {
        places.sort(function(a, b) {
            return (a.area.rank + a.population.rank) - (b.area.rank + b.population.rank)
        });
    } else if (sort == 'Area_Population_Product') {
        places.sort(function(a, b) {
            return (b.area.sqkm * b.population.kilopeople) - (a.area.sqkm * a.population.kilopeople)
        });
    } else { // unknown or undefined sort, default is by area
 places.sort(function(a, b) {
            return b.area.sqkm - a.area.sqkm;
        }); // by area
    }
}

function initialize_places(places) { // initialize, history, score, age, 
   
    for (var i = 0; i < places.length; i++) {
        console.log("i, name: " + i + "  " + places[i].name);
    }
  
// slice to first n_places_in_quiz  
    places = places.slice(0, n_places_in_quiz);

    for (var i = 0; i < places.length; i++) {
        places[i].history = createArray(history_size, new Object({
            correct: false,
            zoom_clicks: 0
        }));
        places[i].score = 0;
        places[i].age = 0;
        console.log("XXXX place, history: " + places[i].name + "  " + JSON.stringify(places[i].history));
    }
    return places;
}
