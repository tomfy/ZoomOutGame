
    //   var gc = new google.maps.Geocoder();

    var GBisland_names = [ // area > 300 km^2, or population > 10,000
        'Isle of Wight', 'Isle of Man', 'Orkney',
        'Isle of Skye', 'Lewis and Harris', 'Isle of Arran',
        'Isle of Mull', 'Anglesey',
        'Portsea Island', 'Canvey Island',
        'Isle of Sheppey', 'Jersey', 'Guernsey', 'Scilly Isles',
        'North Uist', 'South Uist', 'Shetland Mainland', 'Islay', 'Jura',
        'Isle of Walney', 'Hayling Island', 'Holy Island, Anglesey'
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
        'Queen Adelaide Archipelago', // Chile
//
	'Belcher Islands', // in Hudsons' bay - crazy looking
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

var default_zoom = 8;
    var init_relprob = 4;
    var init_age = 10;
    var default_radius = 8000;


function Place(obj){
    this.name = obj.name;
    this.zoom = obj.zoom || default_zoom;
    this.relprob = obj.relprob || init_relprob;
    this.age = obj.age || init_age;
    this.last_answer_correct = obj.last_answer_correct || undefined;
    this.lat = obj.lat;
    this.lng = obj.lng;
    this.frame_center = obj.frame_center;
    this.marker_position = obj.frame_center;
    this.marker_position = obj.marker_position;
    this.radius = obj.radius || default_radius
};

    var WorldBigIslands_top20 = []; // 20 biggest by area
    WorldBigIslands_top20.push(new Place({
        name: 'Greenland',
        zoom: 5,
      //  lat: 73.0,      // lng: -36.5},
	frame_center: {lat: 73.0, lng: -36.5},
marker_position: {lat: 73.0, lng: -36.5},
    }));
    WorldBigIslands_top20.push(new Place({
        name: 'New Guinea',
        zoom: 7.0,
     //   lat: -5.54,     // lng: 141.28},
	frame_center: {lat: -5.54, lng: 141.28},
	marker_position: {lat: -5.54, lng: 141.28},
    }));
    WorldBigIslands_top20.push(new Place({
        name: 'Borneo',
        zoom: 7.0,
    //    lat: 0.74,     // lng: 113.85},
	frame_center: {lat: 0.74, lng: 113.85},
	marker_position: {lat: 0.74, lng: 113.85},
    }));
    WorldBigIslands_top20.push(new Place({
        name: 'Madagascar',
        zoom: 7.0,
       frame_center: {lat: -19.00, lng: 46.54},
       marker_position: {lat: -19.00, lng: 46.54},
    }));
    WorldBigIslands_top20.push(new Place({
        name: 'Baffin Island',
        zoom: 6.0,
      frame_center: {lat: 69.90, lng: -72.95},
      marker_position: {lat: 69.90, lng: -72.95},
    }));
    WorldBigIslands_top20.push(new Place({
        name: 'Sumatra',
        zoom: 7.0,
       frame_center: {lat: -1.10, lng: 102.04},
       marker_position: {lat: -1.10, lng: 102.04},
    }));
    WorldBigIslands_top20.push(new Place({
        name: 'Honshu',
        zoom: 7.0,
	frame_center: {lat: 36.92, lng: 138.02},
	marker_position: {lat: 36.92, lng: 138.02},
    }));
    WorldBigIslands_top20.push(new Place({
        name: 'Victoria Island',
        zoom: 7.0,       
         frame_center: {lat: 71.05, lng: -109.51},
         marker_position: {lat: 71.05, lng: -109.51},
    }));
    WorldBigIslands_top20.push(new Place({
        name: 'Great Britain',
        zoom: 7.0,        
         frame_center: {lat: 54.73, lng: -2.00},
         marker_position: {lat: 54.73, lng: -2.00},
    }));
    WorldBigIslands_top20.push(new Place({
        name: 'Ellesmere Island',
        zoom: 6.0,        
         frame_center: {lat: 80.44, lng: -77.87},
         marker_position: {lat: 80.44, lng: -77.87},
    }));
    WorldBigIslands_top20.push(new Place({
        name: 'Sulawesi',
        zoom: 8.0,        
         frame_center: {lat: -1.85, lng: 121.29},
         marker_position: {lat: -1.85, lng: 121.29},
    }));
    WorldBigIslands_top20.push(new Place({
        name: 'South Island, New Zealand',
        zoom: 8.0,       
         frame_center: {lat: -43.77, lng: 170.73},
         marker_position: {lat: -43.77, lng: 170.73},
    }));
    WorldBigIslands_top20.push(new Place({
        name: 'Java',
        zoom: 8.0,        
         frame_center: {lat: -7.39, lng: 110.39},
         marker_position: {lat: -7.39, lng: 110.39},
    }));
    WorldBigIslands_top20.push(new Place({
        name: 'North Island, New Zealand',
        zoom: 8.0,        
         frame_center: {lat: -38.48, lng: 175.87},
         marker_position: {lat: -38.48, lng: 175.87},
    }));
    WorldBigIslands_top20.push(new Place({
        name: 'Luzon',
        zoom: 8.0,
        
         frame_center: {lat: 15.51, lng: 121.10},
         marker_position: {lat: 15.51, lng: 121.10},
    }));
    WorldBigIslands_top20.push(new Place({
        name: 'Newfoundland',
        zoom: 8.0,
        
         frame_center: {lat: 48.75, lng: -55.81},
         marker_position: {lat: 48.75, lng: -55.81},
    }));
    WorldBigIslands_top20.push(new Place({
        name: 'Cuba',
        zoom: 8.0,       
         frame_center: {lat: 21.77, lng: -79.50},
         marker_position: {lat: 21.77, lng: -79.50},
    }));
    WorldBigIslands_top20.push(new Place({
        name: 'Iceland',
        zoom: 8.0,        
         frame_center: {lat: 64.92, lng: -18.41},
         marker_position: {lat: 64.92, lng: -18.41},
    }));
    WorldBigIslands_top20.push(new Place({
        name: 'Mindanao',
        zoom: 8.0,        
         frame_center: {lat: 7.68, lng: 124.47},
         marker_position: {lat: 7.68, lng: 124.47},
    }));
    WorldBigIslands_top20.push(new Place({
        name: 'Ireland',
        zoom: 8.0,        
         frame_center: {lat: 53.37, lng: -7.91},
         marker_position: {lat: 53.37, lng: -7.91},
    }));


    var GBcities = [];
    GBcities.push(new Place({
        name: 'London',
        zoom: 10.0,
        relprob: init_relprob,
        age: 10,
         frame_center: {lat: 51.510, lng: -0.122},
         marker_position: {lat: 51.510, lng: -0.122},
        radius: 18000
    }));
    GBcities.push(new Place({
        name: 'Birmingham',
        zoom: 10.0,
        
         frame_center: {lat: 52.481, lng: -1.8965},
         marker_position: {lat: 52.481, lng: -1.8965},
        radius: 5000
    }));
    GBcities.push(new Place({
        name: 'Leeds',
        zoom: 10.0,
        
//        frame_center: {lat: 53.831361, // lng: -1.573040},
//        marker_position: {lat: 53.831361, // lng: -1.573040},
	 lat : 53.79964,
	lng : -1.54942,
        radius: 5000
    }));
    GBcities.push(new Place({
        name: 'Glasgow',
        zoom: 10.0,        
         frame_center: {lat: 55.8647, lng: -4.2545},
         marker_position: {lat: 55.8647, lng: -4.2545},
        radius: 5000
    }));
    GBcities.push(new Place({
        name: 'Sheffield',
        zoom: 10.0,       
         frame_center: {lat: 53.3865, lng: -1.4653},
         marker_position: {lat: 53.3865, lng: -1.4653},
        radius: 4800
    }));
    GBcities.push(new Place({
        name: 'Bradford',
        zoom: 10.0,        
         frame_center: {lat: 53.792398, lng: -1.754701},       
marker_position: {lat: 53.792398, lng: -1.754701},
        radius: 4000
    }));
    GBcities.push(new Place({
        name: 'Edinburgh',
        zoom: 10.0,        
         frame_center: {lat: 55.9566, lng: -3.1943},
         marker_position: {lat: 55.9566, lng: -3.1943},
        radius: 5000
    }));
    GBcities.push(new Place({
        name: 'Liverpool',
        zoom: 10.0,       
         frame_center: {lat: 53.4095, lng: -2.9824},
         marker_position: {lat: 53.4095, lng: -2.9824},
        radius: 6000
    }));
    GBcities.push(new Place({
        name: 'Manchester',
        zoom: 10.0,
        
         frame_center: {lat: 53.4805, lng: -2.2440},
         marker_position: {lat: 53.4805, lng: -2.2440},
        radius: 7000
    }));
    GBcities.push(new Place({
        name: 'Bristol',
        zoom: 10.0,
        
         frame_center: {lat: 51.4549, lng: -2.5875},
         marker_position: {lat: 51.4549, lng: -2.5875},
        radius: 3200
    }));
    GBcities.push(new Place({
        name: 'Wakefield',
        zoom: 10.0,
        
         frame_center: {lat: 53.6816, lng: -1.4964},
         marker_position: {lat: 53.6816, lng: -1.4964},
        radius: 2000
    }));
    GBcities.push(new Place({
        name: 'Cardiff',
        zoom: 10.0,
        
         frame_center: {lat: 51.4801, lng: -3.1646},
         marker_position: {lat: 51.4801, lng: -3.1646},
        radius: 4800
    }));
    GBcities.push(new Place({
        name: 'Coventry',
        zoom: 10.0,
        
         frame_center: {lat: 52.4074, lng: -1.5113},
         marker_position: {lat: 52.4074, lng: -1.5113},
        radius: 3200
    }));
    GBcities.push(new Place({
        name: 'Nottingham',
        zoom: 10.0,
        
         frame_center: {lat: 52.95256, lng: -1.1477},
         marker_position: {lat: 52.95256, lng: -1.1477},
        radius: 3200
    }));
    GBcities.push(new Place({
        name: 'Leicester',
        zoom: 10.0,
        
         frame_center: {lat: 52.6378, lng: -1.1343},
         marker_position: {lat: 52.6378, lng: -1.1343},
	radius : 3200
    }));
    GBcities.push(new Place({
        name: 'Sunderland',
        zoom: 10.0,
        
         frame_center: {lat: 54.9078, lng: -1.3805},
         marker_position: {lat: 54.9078, lng: -1.3805},
        radius: 3200
    }));
    GBcities.push(new Place({
        name: 'Newcastle upon Tyne',
        zoom: 10.0,
        
         frame_center: {lat: 54.9713, lng: -1.613},
         marker_position: {lat: 54.9713, lng: -1.613},
        radius: 4000
    }));
    // Brighton
    // Hull
    // Plymouth
    // Wolverhampton
    GBcities.push(new Place({
        name: 'Derby',
        zoom: 10.0,
        
         frame_center: {lat: 52.9230, lng: -1.4759},
         marker_position: {lat: 52.9230, lng: -1.4759},
	radius : 3200
    }));
    GBcities.push(new Place({
        name: 'Stoke on Trent',
        zoom: 10.0,
        
         frame_center: {lat: 53.0113, lng: -2.1959},
         marker_position: {lat: 53.0113, lng: -2.1959},
	radius : 4800
    }));
    // Southampton
    // Salford
    GBcities.push(new Place({
        name: 'Portsmouth',
        zoom: 10.0,
        
         frame_center: {lat: 50.8057, lng: -1.0712},
         marker_position: {lat: 50.8057, lng: -1.0712},
        radius: 3600
    }));
    // Aberdeen
    // Swansea

    var PopulousIslands = [];
    // > 100 million'
    PopulousIslands.push(new Place({
        name: 'Java',
        zoom: 8.0,
        
         frame_center: {lat: -7.39, lng: 110.39},
         marker_position: {lat: -7.39, lng: 110.39},
    }));
    PopulousIslands.push(new Place({
        name: 'Honshu',
        zoom: 7.0,
        
         frame_center: {lat: 36.92, lng: 138.02},
         marker_position: {lat: 36.92, lng: 138.02},
    }));
    // 40-100 million 
    PopulousIslands.push(new Place({
        name: 'Great Britain',
        zoom: 7.0,
        
         frame_center: {lat: 54.73, lng: -2.00},
         marker_position: {lat: 54.73, lng: -2.00},
    }));
    PopulousIslands.push(new Place({
        name: 'Sumatra',
        zoom: 7.0,
        
         frame_center: {lat: -1.10, lng: 102.04},
         marker_position: {lat: -1.10, lng: 102.04},
    }));
    PopulousIslands.push(new Place({
        name: 'Luzon',
        zoom: 8.0,
        
         frame_center: {lat: 15.51, lng: 121.10},
         marker_position: {lat: 15.51, lng: 121.10},
    }));
    // 10-40 million 
    PopulousIslands.push(new Place({
        name: 'Taiwan',
        zoom: 9.0,
        
         frame_center: {lat: 23.70, lng: 121.00},
         marker_position: {lat: 23.70, lng: 121.00},
    }));
    PopulousIslands.push(new Place({
        name: 'Sri Lanka',
        zoom: 9.0,
        
         frame_center: {lat: 7.92, lng: 80.77},
         marker_position: {lat: 7.92, lng: 80.77},
    }));
    PopulousIslands.push(new Place({
        name: 'Madagascar',
        zoom: 7.0,
        
         frame_center: {lat: -19.00, lng: 46.54},
         marker_position: {lat: -19.00, lng: 46.54},
    }));
    PopulousIslands.push(new Place({
        name: 'Hispaniola',
        zoom: 8.0,
        
         frame_center: {lat: 19.00, lng: -71.54},
         marker_position: {lat: 19.00, lng: -71.54},
    }));
    PopulousIslands.push(new Place({
        name: 'Mindanao',
        zoom: 8.0,
        
         frame_center: {lat: 7.68, lng: 124.47},
         marker_position: {lat: 7.68, lng: 124.47},
    }));
    PopulousIslands.push(new Place({
        name: 'Borneo',
        zoom: 7.0,
        
         frame_center: {lat: 0.74, lng: 113.85},
         marker_position: {lat: 0.74, lng: 113.85},
    }));
    PopulousIslands.push(new Place({
        name: 'Sulawesi',
        zoom: 8.0,
        
         frame_center: {lat: -1.85, lng: 121.29},
         marker_position: {lat: -1.85, lng: 121.29},
    }));
    PopulousIslands.push(new Place({
        name: 'Salsette',
        zoom: 10.0,
        
         frame_center: {lat: 19.17, lng: 72.90},
         marker_position: {lat: 19.17, lng: 72.90},
    }));
    PopulousIslands.push(new Place({
        name: 'Kyushu',
        zoom: 9.0,
        
         frame_center: {lat: 32.6, lng: 130.77},
         marker_position: {lat: 32.6, lng: 130.77},
    }));
    PopulousIslands.push(new Place({
        name: 'Cuba',
        zoom: 8.0,
        
         frame_center: {lat: 21.77, lng: -79.50},
         marker_position: {lat: 21.77, lng: -79.50},
    }));
    // 5-10 million:
    PopulousIslands.push(new Place({
        name: 'Hainan',
        zoom: 9.0,
        
         frame_center: {lat: 19.14, lng: 109.79},
         marker_position: {lat: 19.14, lng: 109.79},
    }));
    PopulousIslands.push(new Place({
        name: 'Long Island',
        zoom: 9.0,
        
         frame_center: {lat: 40.83, lng: -73.05},
         marker_position: {lat: 40.83, lng: -73.05},
    }));
    PopulousIslands.push(new Place({
        name: 'New Guinea',
        zoom: 7.0,
        
         frame_center: {lat: -5.54, lng: 141.28},
         marker_position: {lat: -5.54, lng: 141.28},
    }));
    PopulousIslands.push(new Place({
        name: 'Ireland',
        zoom: 8.0,
        
         frame_center: {lat: 53.37, lng: -7.91},
         marker_position: {lat: 53.37, lng: -7.91},
    }));
    PopulousIslands.push(new Place({
        name: 'Hokkaido',
        zoom: 8.0,
        
         frame_center: {lat: 43.39, lng: 142.58},
         marker_position: {lat: 43.39, lng: 142.58},
    }));
    PopulousIslands.push(new Place({
        name: 'Singapore',
        zoom: 11.0,
        
         frame_center: {lat: 1.36, lng: 103.82},
         marker_position: {lat: 1.36, lng: 103.82},
    }));
    PopulousIslands.push(new Place({
        name: 'Sicily',
        zoom: 9.0,
        
         frame_center: {lat: 37.56, lng: 14.26},
         marker_position: {lat: 37.56, lng: 14.26},
    }));

    var Peninsulas = [];
    Peninsulas.push(new Place({
        name: 'India',
        zoom: 7.0,
        
         frame_center: {lat: 16.96, lng: 77.61},
         marker_position: {lat: 16.96, lng: 77.61},
    }));
    Peninsulas.push(new Place({
        name: 'Iberia',
        zoom: 7.0,
        
         frame_center: {lat: 40.50, lng: -4.57},
         marker_position: {lat: 40.50, lng: -4.57},
    }));
    Peninsulas.push(new Place({
        name: 'Korea',
        zoom: 8.0,
        
         frame_center: {lat: 36.28, lng: 127.79},
         marker_position: {lat: 36.28, lng: 127.79},
    }));
    Peninsulas.push(new Place({
        name: 'Italy',
        zoom: 8.0,
        
         frame_center: {lat: 42.22, lng: 13.10},
         marker_position: {lat: 42.22, lng: 13.10},
    }));
    Peninsulas.push(new Place({
        name: 'Arabia',
        zoom: 7.0,
        
         frame_center: {lat: 21.77, lng: 47.11},
         marker_position: {lat: 21.77, lng: 47.11},
    }));
    Peninsulas.push(new Place({
        name: 'Malay peninsula',
        zoom: 7.0,
        
         frame_center: {lat: 5.35, lng: 101.47},
         marker_position: {lat: 5.35, lng: 101.47},
    }));
    Peninsulas.push(new Place({
        name: 'Scandinavia',
        zoom: 7.0,
        
         frame_center: {lat: 62.24, lng: 13.49},
         marker_position: {lat: 62.24, lng: 13.49},
    }));
    Peninsulas.push(new Place({
        name: 'Florida',
        zoom: 9.0,
        
         frame_center: {lat: 27.60, lng: -81.47},
         marker_position: {lat: 27.60, lng: -81.47},
    }));

    Peninsulas.push(new Place({
        name: 'Peloponnese',
        zoom: 9.0,        
         frame_center: {lat: 37.50, lng: 22.15},
         marker_position: {lat: 37.50, lng: 22.15},
    }));
    Peninsulas.push(new Place({
        name: 'Shandong',
        zoom: 9.0,        
         frame_center: {lat: 37.15, lng: 120.76},
         marker_position: {lat: 37.15, lng: 120.76},
    }));
    Peninsulas.push(new Place({
        name: 'Antarctic peninsula',
        zoom: 7.0,        
         frame_center: {lat: -70.00, lng: -66.45},
         marker_position: {lat: -70.00, lng: -66.45},
    }));
    Peninsulas.push(new Place({
        name: 'Yucatan',
        zoom: 8.0,
        
         frame_center: {lat: 19.95, lng: -89.03},
         marker_position: {lat: 19.95, lng: -89.03},
    }));
    Peninsulas.push(new Place({
        name: 'Liaodong peninsula',
        zoom: 9.0,
        
         frame_center: {lat: 39.92, lng: 122.45},
         marker_position: {lat: 39.92, lng: 122.45},
    }));
    Peninsulas.push(new Place({
        name: 'Leizhou peninsula',
        zoom: 10.0,        
         frame_center: {lat: 20.79, lng: 110.02},
         marker_position: {lat: 20.79, lng: 110.02},
    }));
    Peninsulas.push(new Place({
        name: 'Cape York peninsula',
        zoom: 8.0,
        
         frame_center: {lat: -14.2, lng: 142.91},
         marker_position: {lat: -14.2, lng: 142.91},
    }));
    Peninsulas.push(new Place({
        name: 'Jutland',
        zoom: 8.0,        
         frame_center: {lat: 55.87, lng: 9.23},
         marker_position: {lat: 55.87, lng: 9.23},
    }));

    Peninsulas.push(new Place({
        name: 'Baja California',
        zoom: 8.0,       
         frame_center: {lat: 27.68, lng: -113.42},
         marker_position: {lat: 27.68, lng: -113.42},
    }));
    Peninsulas.push(new Place({
        name: 'Alaska Peninsula',
        zoom: 8.0,        
         frame_center: {lat: 56.41, lng: -159.04},
         marker_position: {lat: 56.41, lng: -159.04},
    }));
    Peninsulas.push(new Place({
        name: 'Kamchatka Peninsula',
        zoom: 7.0,        
         frame_center: {lat: 57.30, lng: 159.74},
         marker_position: {lat: 57.30, lng: 159.74},
    }));
    Peninsulas.push(new Place({
        name: 'Seward Peninsula',
        zoom: 8.0,
        
         frame_center: {lat: 65.42, lng: -163.70},
         marker_position: {lat: 65.42, lng: -163.70},
    }));
    Peninsulas.push(new Place({
        name: 'Kola Peninsula',
        zoom: 7.0,
        
         frame_center: {lat: 67.50, lng: 37.27},
         marker_position: {lat: 67.50, lng: 37.27},
    }));
    Peninsulas.push(new Place({
        name: 'Chukchi Peninsula',
        zoom: 7.0,
        
         frame_center: {lat: 65.89, lng: -174.86},
         marker_position: {lat: 65.89, lng: -174.86},
    }));
    Peninsulas.push(new Place({
        name: 'Boothia Peninsula',
        zoom: 7.0,       
         frame_center: {lat: 70.86, lng: -94.39},
         marker_position: {lat: 70.86, lng: -94.39},
    }));
    Peninsulas.push(new Place({
        name: 'Yamal Peninsula',
        zoom: 7.0,        
         frame_center: {lat: 71.14, lng: 69.92},
         marker_position: {lat: 71.14, lng: 69.92},
    }));

var StrangePlaces = [];
  StrangePlaces.push(new Place({
        name: 'Belcher Islands',
        zoom: 5.0,        
       frame_center: {lat: 56.251981, lng: -79.365234},
       marker_position: {lat: 56.251981, lng: -79.365234},
    }));
  StrangePlaces.push(new Place({
        name: 'Meanders, Oxbows near Yenisei Delta',
        zoom: 7.0,
        
       frame_center: {lat: 70.350818, lng: 81.001511},
       marker_position: {lat: 70.350818, lng: 81.001511},
    }));
  StrangePlaces.push(new Place({
        name: 'More Meanders & Oxbows near Yenisei Delta',
        zoom: 7.0,
        
       frame_center: {lat: 67.11977, lng: 80.566864},
       marker_position: {lat: 67.11977, lng: 80.566864},
    }));
  StrangePlaces.push(new Place({
        name: 'Meandering River on Sakhalin Island',
        zoom: 8.0,
        
       frame_center: {lat: 49.997330, lng: 142.942085},
       marker_position: {lat: 49.997330, lng: 142.942085},
    }));
  StrangePlaces.push(new Place({
        name: 'Rano Kau Volcanic Crater, Easter Island',
        zoom: 12.0,       
       frame_center: {lat: -27.186713, lng: -109.435329},
       marker_position: {lat: -27.186713, lng: -109.435329},
    }));
 StrangePlaces.push(new Place({
        name: 'Volga Delta',
        zoom: 8.0,        
       frame_center: {lat: 46.146934, lng: 47.647705},
       marker_position: {lat: 46.146934, lng: 47.647705},
    }));
  StrangePlaces.push(new Place({
        name: 'Mouths of the Ganges',
        zoom: 5.0,       
       frame_center: {lat: 22.34, lng: 89.85},
       marker_position: {lat: 22.34, lng: 89.85},
    }));
 StrangePlaces.push(new Place({
        name: 'Peninsula near Christchurch, NZ',
        zoom: 7.0,       
       frame_center: {lat: -43.75242, lng: 172.897339},
       marker_position: {lat: -43.75242, lng: 172.897339},
    }));

var Phillipines_Big11 = [];
 Phillipines_Big11.push(new Place({
        name: 'Luzon',
              zoom: 8.0,        
         frame_center: {lat: 15.51, lng: 121.10},
         marker_position: {lat: 15.51, lng: 121.10},
    }));
       Phillipines_Big11.push(new Place({
        name: 'Mindanao',
        zoom: 8.0,
         frame_center: {lat: 7.68, lng: 124.47},
         marker_position: {lat: 7.68, lng: 124.47},
    }));

Phillipines_Big11.push(new Place({
        name: 'Negros',
              zoom: 9.0,       
         frame_center: {lat: 10.129258, lng: 123.063354},
         marker_position: {lat: 10.129258, lng: 123.063354},
    }));
       Phillipines_Big11.push(new Place({
        name: 'Samar',
        zoom: 9.0,
         frame_center: {lat: 11.865503, lng: 125.117798},
         marker_position: {lat: 11.865503, lng: 125.117798},
    }));

Phillipines_Big11.push(new Place({
        name: 'Palawan',
              zoom: 8.0,     
         frame_center: {lat: 9.642215, lng: 118.547974},
         marker_position: {lat: 9.642215, lng: 118.547974},
    }));
       Phillipines_Big11.push(new Place({
        name: 'Panay',
        zoom: 10.0,
         frame_center: {lat: 11.198105, lng: 122.470093},
         marker_position: {lat: 11.198105, lng: 122.470093},
    }));

Phillipines_Big11.push(new Place({
        name: 'Mindoro',
              zoom: 10.0, 
         frame_center: {lat: 12.966169, lng: 121.121521},
         marker_position: {lat: 12.966169, lng: 121.121521},
    }));
       Phillipines_Big11.push(new Place({
        name: 'Leyte',
        zoom: 10.0,
         frame_center: {lat: 10.837774, lng: 124.867859},
         marker_position: {lat: 10.837774, lng: 124.867859},
    }));

Phillipines_Big11.push(new Place({
        name: 'Cebu',
              zoom: 10.0,      
         frame_center: {lat: 10.356294, lng: 123.766479},
         marker_position: {lat: 10.356294, lng: 123.766479},
    }));
       Phillipines_Big11.push(new Place({
        name: 'Bohol',
        zoom: 10.0,
         frame_center: {lat: 9.876399, lng: 124.215546},
         marker_position: {lat: 9.876399, lng: 124.215546},
    }));

Phillipines_Big11.push(new Place({
        name: 'Masbate',
              zoom: 10.0,      
         frame_center: {lat: 12.189242, lng: 123.636017},
         marker_position: {lat: 12.189242, lng: 123.636017},
    }));
    
