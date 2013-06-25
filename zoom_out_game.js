var map;
//var place;
var puzzle_obj;

function initialize() {
    var gc = new google.maps.Geocoder();
    var GBcities =  [
	'London', 'Birmingham', 'Leeds', 
	'Glasgow', 'Sheffield', 'Bradford',
	'Edinburgh', 'Liverpool', 'Manchester', 
	'Bristol', 'Wakefield', 'Cardiff',
	'Coventry', 'Nottingham', 'Leicester', 
	'Sunderland', 'Newcastle upon Tyne', 
	'Portsmouth', 'Derby', 'Stoke on Trent'
    ];
    var GBislands = [ // area > 300 km^2, or population > 10,000
		'Isle of Wight', 'Isle of Man', 'Orkney',
		'Isle of Skye', 'Lewis and Harris', 'Isle of Arran',
		'Isle of Mull', 'Anglesey', 
		'Portsea Island', 'Canvey Island',
		'Isle of Sheppey', 'Jersey', 'Guernsey', 'Scilly Isles', 
	'North Uist', 'South Uist', 'Shetland Mainland', 'Islay', 'Jura',
	'Isle of Walney', 'Hayling Island', 'Holy Island, Anglesey'
    ]; 

    var WorldBigIslands_top20 = [ // 20 biggest by area
	'Greenland', 'New Guinea', 'Borneo', 
	'Madagascar', 'Baffin Island', 'Sumatra', 
	'Honshu', 'Victoria Island', 
	'Great Britain', 'Ellesmere Island', 'Sulawesi',

	'South Island, New Zealand', 'Java', 'North Island, New Zealand', 
	'Luzon, Philippines', 'Newfoundland', 'Cuba', 
	'Iceland', 'Mindanao', 'Ireland', // iceland: 101,826 km^2, mindanao 97,530

    ];

    var WorldBigIslands_21_48 = [
	'Hokkaido', // 78,719 sq. km.
	'Hispaniola',
	'Sakhalin',
//	'Banks Island', // Canada
	'Sri Lanka', 
	'Tasmania',
//	'Devon Island', // Canada
//	'Alexander Island', // Antarctica
	'Tierra del Fuego',
	'Severny Island', // Novaya Zemlya, N. Island
//	'Berkner Island', // Antarctica
//	'Axel Heiberg Island', // Canada
//	'Melville Island', 'Southampton Island', // both Canada
	'Marajo', // Brazil
	'Spitsbergen', // Svalbard
	'Kyushu',
	'Taiwan',
	'New Britain, Papua New Guinea',
//	'Prince of Wales Island, Canada', // Canada
//	'Yuzhny Island', // Novaya Zemlya S. Island
	'Hainan',
	'Vancouver Island',
	'Timor',
	'Sicily',
//	'Somerset Island', // Canada
//	'Kotelny Island', // Russia - are Kotelny and Faddeyevsky really connected??
	'Sardinia' // 23,848 km^2, next biggest is 19,162
    ];
    

    var PopulousIslands = [
	// > 100 million'
	'Java', 'Honshu', 
	// 40-100 million 
	'Great Britain','Sumatra', 'Luzon, Philippines', 
	// 10-40 million 
	'Taiwan', 'Sri Lanka', 'Madagascar', 'Hispaniola',
	'Mindanao', 'Borneo', 'Sulawesi', 
	'Salsette', 'Kyushu', 'Cuba',
	// 5-10 million:
	'Hainan', 'Long Island', 'New Guinea',
	'Ireland', 'Hokkaido', 'Singapore', 'Sicily' 
    ];



    var MediterraneanIslands = [
	'Sicily', 'Sardinia', 'Corsica',
	'Cyprus', 'Crete', 'Euboea',
	'Malta', 'Rhodes', 
	'Majorca', 'Lesbos',
	'Elba', 'Ibiza', 'Minorca'

//	 'Cyclades, Greece',
//	'Dodecanese, Greece',
//	'Balearic Islands',

    ];

    var EuropeCities = [ // Usually one per country, either capital or largest;
	'London', 
	'Dublin', 'Edinburgh',
	'Oslo', 'Stockholm', 'Helsinki',
	'St. Petersburg, Russia', 'Moscow',
	'Warsaw', 'Berlin', 'Hamburg', 'Munich', 'Cologne/Dusseldorf',
	'Copenhagen',
	'Amsterdam', 'Brussels', 
	'Paris', 'Marseille', 'Lyon',
	'Madrid', 'Barcelona', 'Milan',
	'Rome', 'Naples', 'Venice', 'Bologna',
	'Florence', 'Vienna', 
	'Prague', 'Budapest', 'Bratislava',
	'Ljubljana', 'Zagreb', 'Belgrade', 
	'Tirana', 'Skopje', 'Athens', 
	'Sofia', 'Bucharest',
	'Kiev', 'Istanbul', 
	'Lisbon', 'Zurich', 'Geneva',
	'Vilnius', 'Riga', 'Talinn',
	'Minsk', 'Chisinau', 'Sarajevo'
    ];

    var Archipelagoes = [
	'Alexander', // Alaska panhandle
	'Arctic Archipelago', // Canada
	'Azores', 'Madeira', 
	'Philippines', 'Indonesia',
	'Hawaiian Islands',
	'Kuril Islands',
	'Ryukyu Islands',
	'Balearic Islands',
	'Seychelles', 'Cyclades, Greece',
	'Dodecanese, Greece', 'Marquesas',
	'Solomon Islands',
	'Canary Islands',
	'Lesser Antilles',
	'Greater Antilles',
	'Faroe Islands',
	'Aleutian Islands',
	'Galapagos Islands',
	'Samoan Islands',
	'Bahamas',
	'Aland Islands', // Baltic
	'Orkney Islands',
	'Shetland Islands',
	'Outer Hebrides',
	'Inner Hebrides',
	'Franz Josef Land', // Arctic Ocean
	'Lofoten Archipelago', // Norway
	'Queen Adelaide Archipelago' // Chile
    ];

    var EuropeCountries = [
	'France', 'Germany', 'Italy',
	'Spain', 'Belgium', 'Netherlands', 
	'Denmark', 'Poland', 'Czech Republic',
	'Slovakia', 'Hungary', 'Romania',
	'Serbia', 'Bosnia', 'Croatia', 'Slovenia',
	'Portugal', 'Austria', 'Albania', 'Macedonia',
	'Bulgaria', 'Greece', 'Turkey', 'Moldova', 
	'Ukraine', 'Russia', 'Lithuania', 'Latvia',
	'Estonia', 'Finland', 'Sweden', 'Norway', 
	'United Kingdom', 'Ireland', 'Iceland',
	'Luxembourg', 'Switzerland'
    ];


    var WorldCities = [ // must be big
	'Tokyo', 'Osaka', 'Nagoya',
	'Seoul',
	'Shanghai', 'Beijing', 'Guangzhou', 'Tianjin', 'Shenzhen',
	// 'Hong Kong', 'Chungqing',
	//   'Singapore',
	'Jakarta',
	'Manila',
	'Delhi', 'Mumbai', 'Kolkata', 'Chennai', 'Bengalaru',
	'Dhaka',
	'Karachi',
	'Tehran', 

	//    'Taipei',

	//    'Sydney',

	//   'Johannesburg',
	'Cairo',
	//   'Nairobi',
	'Lagos',
	'Kinshasa',

	'New York',
	'Chicago',
	'Los Angeles',
	//    'Chicago',
	'Mexico City',

	'Lima', 'Bogota',
	'Buenos Aires',
	'Rio de Janeiro',
	'Sao Paolo',

	'London',
	'Istanbul',
	'Moscow',

    ];

  
    var init_relprob = 4;

    var PopulousIslands = [];
	// > 100 million'
    PopulousIslands.push({name : 'Java', zoom : 8.0, relprob : init_relprob, lat : -7.39, lng : 110.39});
    PopulousIslands.push({name : 'Honshu', zoom : 8.0, relprob : init_relprob, lat : 36.42, lng : 138.82});
	// 40-100 million 
    PopulousIslands.push({name : 'Great Britain', zoom : 7.0, relprob : init_relprob, lat : 54.73, lng : -2.00});
    PopulousIslands.push({name : 'Sumatra', zoom : 7.0, relprob : init_relprob, lat : -1.10, lng : 102.04});
			    PopulousIslands.push({name : 'Luzon', zoom : 8.0, relprob : init_relprob, lat : 15.51, lng : 121.10});
	// 10-40 million 
			    PopulousIslands.push({name : 'Taiwan', zoom : 9.0, relprob : init_relprob, lat : 23.70, lng : 121.00});
			      PopulousIslands.push({name : 'Sri Lanka', zoom : 9.0, relprob : init_relprob, lat : 7.92, lng : 80.77});
    PopulousIslands.push({name : 'Madagascar', zoom : 7.0, relprob : init_relprob, lat : -19.00, lng : 46.54}); 
    PopulousIslands.push({name : 'Hispaniola', zoom : 8.0, relprob : init_relprob, lat : 19.00, lng : -71.54});
			    PopulousIslands.push({name : 'Mindanao', zoom : 8.0, relprob : init_relprob, lat : 7.68, lng : 124.47});
			      PopulousIslands.push({name : 'Borneo', zoom : 7.0, relprob : init_relprob, lat : 0.74, lng : 113.85});
			    PopulousIslands.push({name : 'Sulawesi', zoom : 8.0, relprob : init_relprob, lat : -1.85, lng : 121.29});
			    PopulousIslands.push({name : 'Salsette', zoom : 10.0, relprob : init_relprob, lat : 19.17, lng : 72.90});
			      PopulousIslands.push({name : 'Kyushu', zoom : 9.0, relprob : init_relprob, lat : 32.6, lng : 130.77});
			    PopulousIslands.push({name : 'Cuba', zoom : 8.0, relprob : init_relprob, lat : 21.77, lng : -79.50});
	// 5-10 million:
			    PopulousIslands.push({name : 'Hainan', zoom : 9.0, relprob : init_relprob, lat : 19.14, lng : 109.79});
    PopulousIslands.push({name : 'Long Island', zoom : 9.0, relprob : init_relprob, lat : 40.83, lng : -73.05});
			    PopulousIslands.push({name : 'New Guinea', zoom : 7.0, relprob : init_relprob, lat : -5.54, lng : 141.28});
			    PopulousIslands.push({name : 'Ireland', zoom : 8.0, relprob : init_relprob, lat : 53.37, lng : -7.91});
			    PopulousIslands.push({name : 'Hokkaido', zoom : 8.0, relprob : init_relprob, lat : 43.39, lng : 142.58});
    PopulousIslands.push({name : 'Singapore', zoom : 11.0, relprob : init_relprob, lat : 1.36, lng : 103.82}); 
			    PopulousIslands.push({name : 'Sicily', zoom : 9.0, relprob : init_relprob, lat : 37.56, lng : 14.26});
   


    var Peninsulas = [];
    Peninsulas.push({name : 'India', zoom : 7.0, relprob : init_relprob, lat : 16.96, lng : 77.61 });
    Peninsulas.push({name : 'Iberia', zoom : 7.0, relprob : init_relprob, lat : 40.50, lng : -4.57});
    Peninsulas.push({name : 'Korea', zoom : 8.0, relprob : init_relprob, lat : 36.28, lng : 127.79});
    Peninsulas.push({name : 'Italy', zoom : 8.0, relprob : init_relprob, lat : 42.22, lng : 13.10});
    Peninsulas.push({name : 'Arabia', zoom : 7.0, relprob : init_relprob, lat : 21.77, lng : 47.11});
    Peninsulas.push({name : 'Malay peninsula', zoom : 7.0, relprob : init_relprob, lat : 5.35, lng : 101.47});
    Peninsulas.push({name : 'Scandinavia', zoom : 7.0, relprob : init_relprob, lat : 62.24, lng : 13.49});
    Peninsulas.push({name : 'Florida', zoom : 9.0, relprob : init_relprob, lat : 27.60, lng : -81.47});

    Peninsulas.push({name : 'Peloponnese', zoom : 9.0, relprob : init_relprob, lat : 37.50, lng : 22.15});
    Peninsulas.push({name : 'Shandong', zoom : 9.0, relprob : init_relprob, lat : 37.15, lng : 120.76});
    Peninsulas.push({name : 'Antarctic peninsula', zoom : 7.0, relprob : init_relprob, lat : -70.00, lng : -66.45});
    Peninsulas.push({name : 'Yucatan', zoom : 8.0, relprob : init_relprob, lat : 19.95, lng : -89.03});
    Peninsulas.push({name : 'Liaodong peninsula', zoom : 9.0, relprob : init_relprob, lat : 39.92, lng : 122.45});
    Peninsulas.push({name : 'Leizhou peninsula', zoom : 10.0, relprob : init_relprob, lat : 20.79, lng : 110.02});
    Peninsulas.push({name : 'Cape York peninsula', zoom : 8.0, relprob : init_relprob, lat : -14.2, lng: 142.91});
    Peninsulas.push({name : 'Jutland', zoom : 8.0, relprob : init_relprob, lat : 55.87, lng : 9.23}); 
  
    Peninsulas.push({name : 'Baja California', zoom : 8.0, relprob : init_relprob, lat : 27.68, lng : -113.42});
    Peninsulas.push({name : 'Alaska Peninsula', zoom : 8.0, relprob : init_relprob, lat : 56.41, lng : -159.04}); 
    Peninsulas.push({name : 'Kamchatka Peninsula', zoom : 7.0, relprob : init_relprob, lat : 57.30, lng : 159.74});
    Peninsulas.push({name : 'Seward Peninsula', zoom : 8.0, relprob : init_relprob, lat : 65.42, lng: -163.70});
    Peninsulas.push({name : 'Kola Peninsula', zoom : 7.0, relprob : init_relprob, lat : 67.50, lng : 37.27});
    Peninsulas.push({name : 'Chukchi Peninsula', zoom : 7.0, relprob : init_relprob, lat : 65.89, lng : -174.86});
    Peninsulas.push({name : 'Boothia Peninsula', zoom : 7.0, relprob : init_relprob, lat : 70.86, lng : -94.39});
    Peninsulas.push({name : 'Yamal Peninsula', zoom : 7.0, relprob : init_relprob, lat : 71.14, lng : 69.92});

    var places = [];
  //  places = WorldBigIslands_21_48.slice(0);
 //    places = MediterraneanIslands.slice(0);
      places = PopulousIslands.slice(0);
   //     places = EuropeCountries.slice(0);
   //    places = Archipelagoes.slice(0);
    //   places = WorldCities.slice(0);
    //    places = oldPeninsulas.slice(0);
 //   places = Peninsulas.slice(0); 

    console.log('counter, places.length: ' + localStorage.counter + " " + places.length);
    //   shuffle(places); 

    if(localStorage.counter >= 0){
	localStorage.counter++;
    }else{
	localStorage.counter = 0;
    }

    puzzle_obj = new zoom_out_game(places, gc);
}

function random_place(places){
    var sum_prob = 0;
    var grow_factor = 1.5;
for (var i = 0; i < places.length; i++) {
    sum_prob += places[i].relprob - 1;
    console.log('places index: ' + i + '  relprob: ' + places[i].relprob + ' name: ' + places[i].name);
}

    var rprob = sum_prob * Math.random();
//    console.log('rprob: ' + rprob);
    sum_prob = 0;
    var chosen_index = 10000;
for (var i = 0; i < places.length; i++) {
    sum_prob += places[i].relprob - 1;
//    console.log('index: ' + i + '. sum_prob: ' + sum_prob + '. rprob: ' + rprob);
    if(sum_prob >= rprob && chosen_index == 10000){
	chosen_index = i;
	places[i].relprob = 1;	
    }else{
	places[i].relprob *= grow_factor;
	console.log('i: ' + i + '.  ' + places[i].relprob);
    }
}
    console.log('chosen index: ' + chosen_index + ". place: " + places[chosen_index].name);
    return places[chosen_index];
}

function zoom_out_game(places, geocoder){
    //   this.map = map;
 //   this.places_list = places; 
    this.geocoder = geocoder;
    //   this.onclick = function(event){handle_click(event, the_puzzle_obj)};

 //   var sorted_places = places.slice(0).sort();
    if(false && localStorage.counter >= places.length){
	localStorage.counter = 0;
	shuffle(places);
	console.log("shuffled places array: " + places);
    }
  
    console.log("counter: " + localStorage.counter);
    var the_place = random_place(places); // places[localStorage.counter];
  // console.log("places: " + the_place.name);
    console.log("the place, zoom: " + the_place.name + "  " + the_place.zoom);



  //  var the_zoom = the_place.zoom;
    if(0){
    this.geocoder.geocode({'address': the_place.name, 'region': 'ch'
			  }, function(a, b){
			      var mapOptions = {
				  center: a[0].geometry.location,
				  zoom: the_place.zoom,
				  mapTypeId: google.maps.MapTypeId.SATELLITE,
				  draggable: false,
				  scrollwheel: false,
				  disableDoubleClickZoom: true,
				  disableDefaultUI: true      
			      };	
			      this.map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
			  }
);
    }else{
	next_place(places, geocoder);
    }
    console.log("after geocoder.geocode....");
    map = this.map;
    var zoom_button_area =  document.getElementById("zoom_buttons");

    var zoom_out_button = document.createElement("button");
    zoom_out_button.appendChild(document.createTextNode("Zoom Out"));
    zoom_out_button.addEventListener("click", function(event){  map.setZoom(map.getZoom()-1); }, false);
    zoom_button_area.appendChild(zoom_out_button);

    var zoom_in_button = document.createElement("button");
    zoom_in_button.appendChild(document.createTextNode("Zoom In"));
    zoom_in_button.addEventListener("click", function(event){ console.log("zoom in button clicked!!!!!");
							      map.setZoom(map.getZoom()+1); }, false);
    zoom_button_area.appendChild(zoom_in_button);

    var next_button = document.createElement("button");
    next_button.appendChild(document.createTextNode("Next"));
    next_button.addEventListener("click", function(event){ console.log("next button clicked!!!!!");
							   the_place = next_place(places, geocoder); }, false);
    zoom_button_area.appendChild(next_button);

    
    var answer_buttons = new Array();
    var answer_button_area = document.getElementById("answer_buttons");
    
    console.log("xxxxx");
    for(var i=0; i<places.length; i++){
	var a = answer_buttons[i] =  document.createElement("a"); // using a link, not button at present.
	a.textContent = places[i].name;
	a.href = "#";
	answer_buttons[i].addEventListener("click", function(event){handle_answer_button_click(event, the_place.name)}, false);

	//	answer_buttons[i].appendChild(document.createTextNode(sorted_places[i]));
	//	answer_buttons[i].addEventListener("click", function(event){handle_answer_button_click(event, the_place)}, false);
	answer_button_area.appendChild(answer_buttons[i]);
    }
    console.log("yyyyy");

    function next_place(places, geocoder){

	var the_place = random_place(places);


	var latlng = new google.maps.LatLng(the_place.lat, the_place.lng);
  var mapOptions = {
    zoom: the_place.zoom,
    center: latlng,
  mapTypeId: google.maps.MapTypeId.SATELLITE,
				  draggable: false,
				  scrollwheel: false,
				  disableDoubleClickZoom: true,
				  disableDefaultUI: true  
  };

	if(0){
 geocoder.geocode({'address': the_place.name, 'region': 'ch'
			  }, function(a, b){
			      var mapOptions = {
				  center: a[0].geometry.location,
				  zoom: the_place.zoom,
				  mapTypeId: google.maps.MapTypeId.SATELLITE,
				  draggable: false,
				  scrollwheel: false,
				  disableDoubleClickZoom: true,
				  disableDefaultUI: true      
			      };	
			      this.map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
			  }
);
	}
	 this.map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
	return the_place;
    } // end of next_place
	


    function handle_answer_button_click(event, the_place){
	var txtnode = event.target.childNodes[0];
	var txt=txtnode.nodeValue;
	console.log("text: " + txt);
	if(txt == the_place){
	    console.log("Yes, it's " + the_place);
	    alert("Yes, it's " + the_place);
	}else{
	    console.log("No, it's " + the_place + ", not " + txt);
	    alert("No, it's " + the_place + ", not " + txt);
	}
    }

    console.log("zzzz");
}



