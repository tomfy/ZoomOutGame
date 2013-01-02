var map;
var place;
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
/*	'Isle of Wight', 'Isle of Man', 'Orkney',
	'Isle of Skye', 'Lewis and Harris', 'Isle of Arran',
	'Isle of Mull', 'Anglesey', 
 'Portsea Island', 'Canvey Island',
	'Isle of Sheppey', 'Jersey', 'Guernsey', 'Scilly Isles', */
	'North Uist', 'South Uist', 'Shetland Mainland', 'Islay', 'Jura',
	'Isle of Walney', 'Hayling Island', 'Holy Island, Anglesey'
    ]; 

    var WorldBigIslands = [ // 20 biggest by area
	'Greenland', 'New Guinea', 'Borneo', 
	'Madagascar', 'Baffin Island', 'Sumatra', 
	'Great Britain', 'Ireland', 'Iceland',
	'Ellesmere Island', 'Java', 'Sulawesi',
	'Honshu', 'Victoria Island', 
	'North Island, New Zealand', 'South Island, New Zealand',
	'Luzon, Philippines', 'Newfoundland', 'Cuba', 'Mindanao'];

var PopulousIslands = [
// > 100 million'
    'Java', 'Honshu', 
// 40-100 million 
'Great Britain','Sumatra', 'Luzon, Philippines', 
// 10-40 million 'Taiwan',
    'Sri Lanka', 'Madagascar', 'Hispaniola',
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
    'Philippines', 'Indonesia',
    'Hawaiian Islands',
    'Kuril Islands',
    'Ryukyu Islands',
    'Balearic Islands',
    'Seychelles', 'Cyclades, Greece',
    'Dodecanese, Greece', 'Marquesas',
    'Elba', 'Ibiza', 'Minorca'
];

var EuropeCities = [ // Usually one per country, either capital or largest;
    'London', 'Dublin', 'Edinburgh',
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
   /* 'Azores', 'Madeira', 
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
    'Aland Islands',
'Orkney Islands', */
'Shetland Islands',
    'Outer Hebrides',
    'Inner Hebrides',
    'Franz Josef Land'
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

var Peninsulas = [
    'Italy',
    'Scandinavia',
    'Yucatan',
   /* 'Baja California',
    'Florida',
    'Kamchatka',
    'Korea',
    'Malay Peninsula',
    'India',
    'Arabia',
    'Iberia',*/
];
    var places = [];
//	WorldBigIslands.slice(0);
 //  places = MediterraneanIslands.slice(0);
 //   places = PopulousIslands.slice(0);
    places = EuropeCountries.slice(0);
    places = Archipelagoes.slice(0);
    places = WorldCities.slice(0);
    places = Peninsulas.slice(0);
  var sorted_places = places.slice(0).sort();
    console.log('counter, places.length: ' + localStorage.counter + " " + places.length);
 //   shuffle(places); 

    if(localStorage.counter >= 0){
	localStorage.counter++;
    }else{
	localStorage.counter = 0;
    }

    if(localStorage.counter >= places.length){
	localStorage.counter = 0;
	shuffle(places);
	console.log("shuffled places array: " + places);
    }
    console.log("places array: " + places);
    console.log("counter: " + localStorage.counter);
    var the_place = places[localStorage.counter];
    console.log("the place: " + the_place);

    gc.geocode({'address': the_place, 
		'region': 'ch'
	//	'region': 'uk'
	       }, function(a, b){
	var mapOptions = {
	    center: a[0].geometry.location,
	    zoom: 8,
	    mapTypeId: google.maps.MapTypeId.SATELLITE,
	    draggable: false,
	    scrollwheel: false,
	    disableDoubleClickZoom: true,
	    disableDefaultUI: true      
	};	
	map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    });

    var zoom_button_area =  document.getElementById("zoom_buttons");

    var zoom_out_button = document.createElement("button");
    zoom_out_button.appendChild(document.createTextNode("Zoom Out"));
    zoom_out_button.addEventListener("click", function(event){ console.log("zoom out button clicked!!!!!"), 
							       map.setZoom(map.getZoom()-1); }, false);
    zoom_button_area.appendChild(zoom_out_button);

    var zoom_in_button = document.createElement("button");
    zoom_in_button.appendChild(document.createTextNode("Zoom In"));
    zoom_in_button.addEventListener("click", function(event){ console.log("zoom in button clicked!!!!!"), 
							      map.setZoom(map.getZoom()+1); }, false);
    zoom_button_area.appendChild(zoom_in_button);
  
    var answer_buttons = new Array();
    var answer_button_area = document.getElementById("answer_buttons");
    
    for(var i=0; i<sorted_places.length; i++){
	var a = answer_buttons[i] =  document.createElement("a");
	a.textContent = sorted_places[i];
	a.href = "#";
	answer_buttons[i].addEventListener("click", function(event){handle_answer_button_click(event, the_place)}, false);

//	answer_buttons[i].appendChild(document.createTextNode(sorted_places[i]));
//	answer_buttons[i].addEventListener("click", function(event){handle_answer_button_click(event, the_place)}, false);
	answer_button_area.appendChild(answer_buttons[i]);
    }

     puzzle_obj = new zoom_out_game(map, places, gc);
}

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

function zoom_out_game(map, places, geocoder){
    this.map = map;
    this.places = places; 
    this.geocoder = geocoder;
    this.onclick = function(event){handle_click(event, the_puzzle_obj)};

    function check_answer(text){
	console.log("text: " + text);
    }
}



