var puzzle_obj;


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

    var Islands = [];
    for(var i=0; i<WorldBigIslands_top38.length; i++){
	var an_island = WorldBigIslands_top38[i];
//	console.log("name: ", an_island.name);
	if(an_island.population > 0.1){
	    Islands.push(an_island);
	    console.log('name, population: ' + an_island.name + "  " + an_island.population.kilopeople);
			}
    }

   

 //   places = Peninsulas.slice(0,15); 
//    places = GBcities.slice(0);
 //   places = StrangePlaces.slice(0);
  //  places = PopulousIslands.slice(0,10);
//    places = Islands; // 
//    places = WorldBigIslands_top38.slice(0,10);
//    places = Indonesia_Big.slice(0);
  //  places = Indonesia_Populous.slice(0);
 //   places = Philippines_Big11.slice(0,11);
   // places = Canadian_Arctic_Islands.slice(0,7);
 //   places = Arctic_Islands.slice(0);
    places = BOP_Islands.slice(0);
    for(var i=0; i<places.length; i++){
	console.log("i, name: " + i + "  " + places[i].name);
    }

 //   places.sort(function(a,b){return Math.min(a.area.rank, a.population.rank) - Math.min(b.area.rank, b.population.rank)});
 //   places.sort(function(a,b){return (a.area.rank + a.population.rank) - (b.area.rank + b.population.rank)});
  places.sort(function(a,b){return -(a.area.sqkm * a.population.kilopeople) + (b.area.sqkm * b.population.kilopeople)});
    console.log('counter, places.length: ' + localStorage.counter + " " + places.length);
    //   shuffle(places); 
    places = places.slice(0,20);
 //    puzzle_obj = new drag_game(places);
   puzzle_obj = new zoom_out_game(places);

}
