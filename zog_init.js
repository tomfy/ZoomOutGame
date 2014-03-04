var puzzle_obj;
var history_size = 5;
var max_place_score = 30;
var n_places_at_a_time = 8;
var n_places_in_quiz = 50;

 //   this.Peninsulas = Peninsulas;
 //   this.PopulousIslands = PopulousIslands;
 //   this.WorldBigIslands_top20 = WorldBigIslands_top20;
 //   this.GBcities = GBcities;
function initialize() {
 
  var places = [];
   //   places = WorldBigIslands_21_48.slice(0);
     //   places = MediterraneanIslands.slice(0);

   //      places = EuropeCountries.slice(0);
   //     places = Archipelagoes.slice(0);
    //   places = WorldCities.slice(0);
    //    places = oldPeninsulas.slice(0);

    var Islands = [];
    for(var i=0; i<WorldBigIslands_top47.length; i++){
	var an_island = WorldBigIslands_top47[i];
//	console.log("name: ", an_island.name);
	if(false || an_island.population.kilopeople > 10){
	    Islands.push(an_island);
	    console.log('name, population: ' + an_island.name + "  " + an_island.population.kilopeople);
			}
    }

    //   places = Peninsulas.slice(0,15); 
 //   places = GBislands.slice(0);
 //   places = GBcities.slice(0);
 //   places = StrangePlaces.slice(0);
//   places = PopulousIslands.slice(0);
    places = Islands; // 
 //   places = WorldBigIslands_top47.slice(0); // ,10);
//    places = Indonesia_Big.slice(0);
//    places = Indonesia_Populous.slice(0);
//    places = Indonesia_BOP.slice(0);
//  places = Philippines_Big11.slice(0,11);
 //   places = Canadian_Arctic_Islands.slice(0,15);
 //   places = Arctic_Islands.slice(0);
 //  places = BOP_Islands.slice(0);
 //   places = Baltic_Islands.slice(0);
    for(var i=0; i<places.length; i++){
	console.log("i, name: " + i + "  " + places[i].name);
    }
   // places.sort(function(a,b){return b.area.sqkm - a.area.sqkm; }); // by area
 //   places.sort(function(a,b){return a.area.rank -b.area.rank; }); // by size rank
places.sort(function(a,b){return b.population.kilopeople -a.population.kilopeople; }); // by population
 // 
// places.sort(function(a,b){return Math.min(a.area.rank, a.population.rank) - Math.min(b.area.rank, b.population.rank)});
//    places.sort(function(a,b){return Math.max(a.area.rank, a.population.rank) - Math.max(b.area.rank, b.population.rank)});
//    places.sort(function(a,b){return (a.area.rank + a.population.rank) - (b.area.rank + b.population.rank)});
//  places.sort(function(a,b){return -(a.area.sqkm * a.population.kilopeople) + (b.area.sqkm * b.population.kilopeople)});
    console.log('counter, places.length: ' + localStorage.counter + " " + places.length);
    //   shuffle(places); 

//  population: {kilopeople: 37.85, rank: 1000},
    places = places.slice(0,n_places_in_quiz);

 for(var i=0; i<places.length; i++){
     places[i].history = createArray(history_size, 
//false
				     new Object({correct: false, zoom_clicks: 0})

				    ); 
   //  places[i].zoom_clicks = 0;
     places[i].score = 0;
     places[i].age = 0;
     console.log("XXXX place, history: " + places[i].name + "  " + JSON.stringify(places[i].history));
}

 //    puzzle_obj = new drag_game(places);
   puzzle_obj = new zoom_out_game(places);

}
