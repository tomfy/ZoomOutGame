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

    //   places = Peninsulas.slice(0); 
//    places = GBcities.slice(0);
 //   places = StrangePlaces.slice(0);
  //  places = PopulousIslands.slice(0,10);
    places = WorldBigIslands_top32.slice(20,32);
  //  places = Philippines_Big11.slice(0,11);
    console.log('counter, places.length: ' + localStorage.counter + " " + places.length);
    //   shuffle(places); 

 //    puzzle_obj = new drag_game(places);
   puzzle_obj = new zoom_out_game(places);

}
