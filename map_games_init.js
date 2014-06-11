var puzzle_obj;
var history_size = 6;
var n_places_at_a_time = 6;
var n_places_in_quiz = 50;
var radius_factor = 1.5;
var correct_points = 3;
var incorrect_cost = 1;
var max_place_score = 30;
var place_sufficient_score = 5;
var uniform_radius = 3500;
var circles_clickable = false;
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
    Philippine_archipelago: Philippine_archipelago,
    the_philippines: the_philippines,
    Islands_Indonesia: Indonesia_Islands_Big_or_Populous,
    Islands_GB: GB_Islands,
    Islands_Baltic: Baltic_Islands,
    Islands_Arctic: Arctic_Islands,
    Islands_Arctic_Canada: Canada_Islands_Arctic,
    BigAreaCountries: BigAreaCountries,
    BigGdpCountries: BigGdpCountries,
    BigPopulationCountries: BigPopulationCountries,

    various_countries: various_countries,
    Asia: Asia,
    Europe: Europe,
    Mediterranean: Mediterranean,
    Whole_world: Whole_world,
    NorthAmerica: NorthAmerica,
    CentralAmerica: CentralAmerica,
    SouthAmerica: SouthAmerica,

    Africa: Africa,
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

function initialize() {
    // get options from form
    var param_value_pairs = location.search.substr(1).split('&'); // param_value_pairs is array, could be e.g. [a=6, b=7] 
    var param_hash = {};
    for (i in param_value_pairs) {
        var name_value = param_value_pairs[i].split('=');
        console.log("XXXXX: " + name_value[0] + ": " + name_value[1]);
        param_hash[name_value[0]] = unescape(name_value[1]);
    }

    //   initialize_game(param_hash);
    //
    var places = []; // places_set_hash[places_set_name]; // reg. or assoc. array of places
    console.log("ABCD: " + param_hash['place_set_name']);
    var place_names = place_set_hash[param_hash['place_set_name']].slice(0); // choose the right array from hash of arrays, and copy.
    console.log("in initialize_game. places.length: " + places.length);

    console.log('place names: ' + place_names);
// load place objects into places array, and give them areas, populations from lists, if available.
    for(var i in place_names){
	var pname = place_names[i];
	console.log("pname: " + pname + " " + place_names[pname] );
	if(Countries[pname] !== undefined){
	    var a_place = Countries[pname];
	    console.log("Place Name: " + pname );
	    if(a_place.area === undefined){//  or a_place.area.sqkm === undefined){ // get area from list
		var area = Areas_of_countries[pname];
		console.log('name, area: ' + pname + " " + area);
		a_place.area = {sqkm: area, rank: undefined};
		console.log("ZZZ area: " + JSON.stringify(a_place.area));
	    }
	    if(a_place.population === undefined){ // or a_place.population === undefined){ // get area from list
		var pop = Math.floor(Populations_of_countries[pname]/1000);
		a_place.population = {kilopeople: pop, rank: undefined};
	    }
	    places.push(a_place);
	}else if(Islands[pname] !== undefined){
	    var a_place = Islands[pname];
	    places.push(a_place);
	}
/* else if(Philippine_Islands[pname] !== undefined){
	    var a_place = Philippine_Islands[pname];
	    places.push(a_place);
	} */
    }
  
    places = initialize_places_history_etc(places);
    places = initialize_places_border(places);

    places = sort_places(places, param_hash['sort_type']);
    places = places.slice(0, Math.min(n_places_in_quiz, places.length));

    initialize_places_latlng(places);

   console.log('places: ' + JSON.stringify(places));

    var game_type = param_hash['game_type'];
    if (game_type === 'Zoom_Out_Game') {
        puzzle_obj = new zoom_out_game(places);
    } else if (game_type === 'Drag_Game') {
        puzzle_obj = new drag_game(places);
    } else if (game_type === 'Click_Game') {
        puzzle_obj = new click_game(places);
    }
}

function initialize_game(param_hash) {
    var places = []; // places_set_hash[places_set_name]; // reg. or assoc. array of places
    console.log("ABCD: " + param_hash['place_set_name']);
    places = place_set_hash[param_hash['place_set_name']].slice(0); // choose the right array from hash of arrays, and copy.
    console.log("in initialize_game. places.length: " + places.length);
    places = initialize_places(places);
    places = sort_places(places, param_hash['sort_type']);
    //    places = initialize_places(places);


    var game_type = param_hash['game_type'];
    if (game_type === 'Zoom_Out_Game') {
        puzzle_obj = new zoom_out_game(places);
    } else if (game_type === 'Drag_Game') {
        puzzle_obj = new drag_game(places);
    } else if (game_type === 'Click_Game') {
        puzzle_obj = new click_game(places);
    }
}

function sort_places(places, sort) {
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

function initialize_places_history_etc(places) { // initialize, history, score, age, 
    /*
   console.log("places.length: " + places.length);
    for (var i = 0; i < places.length; i++) {
        console.log("GGG: i, name: " + i + "  " + JSON.stringify(places[i]));
    }
   console.log("AAA: " + places.length); // */
    // slice to first n_places_in_quiz  
    //   places = places.slice(0, n_places_in_quiz);
    //console.log("ABB: " + places.length);
    for (var i = 0; i < places.length; i++) {
        places[i].history = createArray(history_size, new Object({
            correct: false,
            zoom_clicks: 0
        }));
        places[i].score = 0;
        places[i].age = 0;
        //   console.log("XXXX place, history: " + places[i].name + "  " + JSON.stringify(places[i].history));


        // border: {
        // polygon1: [[13.05055, -59.53306000000001], [13.335, -59.63111000000001], [13.165, -59.42917], [13.05055, -59.53306000000001]], 
        // },

        if (places[i].population === undefined) {
            places[i].population = {
                kilopeople: 1,
                rank: 1000
            };
        }
        if (places[i].area === undefined) {
            places[i].area = {
                sqkm: 1,
                rank: 1000
            };
        }
    }
    return places;
}

function initialize_places_border(places) {
    for (var i = 0; i < places.length; i++) {
        var min_lat = 1000;
        var max_lat = -1000;
        var min_lng = 10000;
        var max_lng = -10000;
        var path_array = []; // accumulate the array of arrays of LatLng objects here.
        var border = places[i].border;
        for (var pgon_name in border) { // construct array of array of LatLng objects to represent polygon
            var pgon = border[pgon_name];
            for (var j = 0; j < pgon.length; j++) {
                var pair = pgon[j];
                var lat = pair[0];
                var lng = pair[1];
                // Russian and U.S. cross the +-180 degrees of longitude line,
                // so make Russian longitudes be all > 0, U.S. longitudes all < 0:
                if (places[i].name === 'Russia') {
		    lng += (lng < 0)? 360 : 0;
                }
                if (places[i].name === 'United States') {
                    lng -= (lng > 0)? 360 : 0;
                }
                min_lat = Math.min(lat, min_lat);
                min_lng = Math.min(lng, min_lng);
                max_lat = Math.max(lat, max_lat);
                max_lng = Math.max(lng, max_lng);
                var the_latlng = new google.maps.LatLng(lat, lng);
                pgon[j] = the_latlng;
            }
            path_array.push(pgon);
        }
        console.log("place: " + places[i].name + ". min, max lng: " + min_lng + " " + max_lng);
        var bounding_box_center_lat = 0.5 * (min_lat + max_lat);
        var bounding_box_center_lng = 0.5 * (min_lng + max_lng);
        if (places[i].frame_center === undefined) {
            console.log("in initialize places. place name: " + places[i].name + ". frame center: " + JSON.stringify(places[i].frame_center));
            places[i].frame_center = {
                lat: bounding_box_center_lat,
                lng: bounding_box_center_lng
            };
            console.log("in initialize places. place name: " + places[i].name + ". frame center: " + JSON.stringify(places[i].frame_center) + "\n");
        }

        if (places[i].marker_position === undefined) {
            places[i].marker_position = places[i].frame_center;
        }
        if(places[i].border !== undefined){ places[i].border = path_array; // array of arrays of latlng objects

        // if  frame_center not defined, look for polygon, and define frame_center from that.
        // if  marker_position not defined, set to frame_center
       
					    var the_polygon = new google.maps.Polygon({
            paths: places[i].border,
            clickable: true,
            strokePosition: google.maps.StrokePosition.INSIDE,
            strokeColor:  'E0B040', //'#AA77FF',
            strokeOpacity: 0.75,
            strokeWeight: 2,
            fillColor: '#FF0000',
          //  fillOpacity: 0.2,	 
        });
					    the_polygon.gameRound = 1; 
					    the_polygon.unhighlightedFillOpacity = 0.15;
					    the_polygon.setOptions({ fillOpacity: the_polygon.unhighlightedFillOpacity });

					    places[i].border_polygon = the_polygon;
/*	places[i].border_polygon.innerPolygon = new google.maps.Polygon({
            paths: places[i].border,
            clickable: true,
            strokePosition: google.maps.StrokePosition.INSIDE,
            strokeColor: '#000000',
            strokeOpacity: 0.0099,
            strokeWeight: 2,
		    fillColor: '#000000', // '#FF0000',
            fillOpacity: 0.001,
					    }); */
				    
	places[i].border_polygon.center = new google.maps.LatLng(bounding_box_center_lat, bounding_box_center_lng);
    }
    }
    return places;
}


function initialize_places_latlng(places) { // places is regular array
    // put lat and lng into a LatLng object and store this in the place obj. 

    for (var i = 0; i < places.length; i++) {
        var the_place = places[i];
        console.log("the_place, name, lat, lng: " + the_place.name + " lat,lng: " + the_place.frame_center.lat + "  " + the_place.frame_center.lng);
        the_place.frame_center.latlng = new google.maps.LatLng(the_place.frame_center.lat, the_place.frame_center.lng);
        the_place.marker_position.latlng = new google.maps.LatLng(the_place.marker_position.lat, the_place.marker_position.lng);
    }
}

function initialize_places_ages(places) { // places can be either reg. or  assoc. array here.
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
        //	console.log("In Initialize_places_ages. place: ", the_place.name + ". age: " + the_place.age);
    }
}
