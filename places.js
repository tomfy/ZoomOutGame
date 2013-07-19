//   var gc = new google.maps.Geocoder();
var GBisland_names = [ // area > 300 km^2, or population > 10,000
'Isle of Wight', 'Isle of Man', 'Orkney', 'Isle of Skye', 'Lewis and Harris', 'Isle of Arran', 'Isle of Mull', 'Anglesey', 'Portsea Island', 'Canvey Island', 'Isle of Sheppey', 'Jersey', 'Guernsey', 'Scilly Isles', 'North Uist', 'South Uist', 'Shetland Mainland', 'Islay', 'Jura', 'Isle of Walney', 'Hayling Island', 'Holy Island, Anglesey'];

var WorldBigIslands_21_48 = ['Hokkaido', // 78,719 sq. km.
'Hispaniola', 'Sakhalin',
//	'Banks Island', // Canada
'Sri Lanka', 'Tasmania',
//	'Devon Island', // Canada
//	'Alexander Island', // Antarctica
'Tierra del Fuego', 'Severny Island', // Novaya Zemlya, N. Island
//	'Berkner Island', // Antarctica
//	'Axel Heiberg Island', // Canada
//	'Melville Island', 'Southampton Island', // both Canada
'Marajo', // Brazil
'Spitsbergen', // Svalbard
'Kyushu', 'Taiwan', 'New Britain, Papua New Guinea',
//	'Prince of Wales Island, Canada', // Canada
//	'Yuzhny Island', // Novaya Zemlya S. Island
'Hainan', 'Vancouver Island', 'Timor', 'Sicily',
//	'Somerset Island', // Canada
//	'Kotelny Island', // Russia - are Kotelny and Faddeyevsky really connected??
'Sardinia' // 23,848 km^2, next biggest is 19,162
];

var MediterraneanIslands = ['Sicily', 'Sardinia', 'Corsica', 'Cyprus', 'Crete', 'Euboea', 'Malta', 'Rhodes', 'Majorca', 'Lesbos', 'Elba', 'Ibiza', 'Minorca'

//	 'Cyclades, Greece',
//	'Dodecanese, Greece',
//	'Balearic Islands',
];

var EuropeCities = [ // Usually one per country, either capital or largest;
'London', 'Dublin', 'Edinburgh', 'Oslo', 'Stockholm', 'Helsinki', 'St. Petersburg, Russia', 'Moscow', 'Warsaw', 'Berlin', 'Hamburg', 'Munich', 'Cologne/Dusseldorf', 'Copenhagen', 'Amsterdam', 'Brussels', 'Paris', 'Marseille', 'Lyon', 'Madrid', 'Barcelona', 'Milan', 'Rome', 'Naples', 'Venice', 'Bologna', 'Florence', 'Vienna', 'Prague', 'Budapest', 'Bratislava', 'Ljubljana', 'Zagreb', 'Belgrade', 'Tirana', 'Skopje', 'Athens', 'Sofia', 'Bucharest', 'Kiev', 'Istanbul', 'Lisbon', 'Zurich', 'Geneva', 'Vilnius', 'Riga', 'Talinn', 'Minsk', 'Chisinau', 'Sarajevo'];

var Archipelagoes = ['Alexander', // Alaska panhandle
'Arctic Archipelago', // Canada
'Azores', 'Madeira', 'Philippines', 'Indonesia', 'Hawaiian Islands', 'Kuril Islands', 'Ryukyu Islands', 'Balearic Islands', 'Seychelles', 'Cyclades, Greece', 'Dodecanese, Greece', 'Marquesas', 'Solomon Islands', 'Canary Islands', 'Lesser Antilles', 'Greater Antilles', 'Faroe Islands', 'Aleutian Islands', 'Galapagos Islands', 'Samoan Islands', 'Bahamas', 'Aland Islands', // Baltic
'Orkney Islands', 'Shetland Islands', 'Outer Hebrides', 'Inner Hebrides', 'Franz Josef Land', // Arctic Ocean
'Lofoten Archipelago', // Norway
'Queen Adelaide Archipelago', // Chile
//
'Belcher Islands', // in Hudsons' bay - crazy looking
];

var EuropeCountries = ['France', 'Germany', 'Italy', 'Spain', 'Belgium', 'Netherlands', 'Denmark', 'Poland', 'Czech Republic', 'Slovakia', 'Hungary', 'Romania', 'Serbia', 'Bosnia', 'Croatia', 'Slovenia', 'Portugal', 'Austria', 'Albania', 'Macedonia', 'Bulgaria', 'Greece', 'Turkey', 'Moldova', 'Ukraine', 'Russia', 'Lithuania', 'Latvia', 'Estonia', 'Finland', 'Sweden', 'Norway', 'United Kingdom', 'Ireland', 'Iceland', 'Luxembourg', 'Switzerland'];

var WorldCities = [ // must be big
'Tokyo', 'Osaka', 'Nagoya', 'Seoul', 'Shanghai', 'Beijing', 'Guangzhou', 'Tianjin', 'Shenzhen',
// 'Hong Kong', 'Chungqing',
//   'Singapore',
'Jakarta', 'Manila', 'Delhi', 'Mumbai', 'Kolkata', 'Chennai', 'Bengalaru', 'Dhaka', 'Karachi', 'Tehran',

//    'Taipei',
//    'Sydney',
//   'Johannesburg',
'Cairo',
//   'Nairobi',
'Lagos', 'Kinshasa',

'New York', 'Chicago', 'Los Angeles',
//    'Chicago',
'Mexico City',

'Lima', 'Bogota', 'Buenos Aires', 'Rio de Janeiro', 'Sao Paolo',

'London', 'Istanbul', 'Moscow',

];

var default_zoom = 8;
var init_relprob = 4;
var init_age = 10;
var default_radius = 8000;

function Place(obj) {
   this.name = obj.name;
   this.zoom = obj.zoom || default_zoom;
   this.relprob = obj.relprob || init_relprob;
   this.age = obj.age || init_age;
   this.last_answer_correct = obj.last_answer_correct || undefined;
   this.lat = obj.lat;
   this.lng = obj.lng;
   this.frame_center = obj.frame_center;
   this.marker_position = obj.marker_position || obj.frame_center;
   //    this.marker_position = obj.marker_position;
   this.radius = obj.radius || default_radius
};

// Islands
var Greenland = new Place({
   name: 'Greenland',
   zoom: 5,
   area: 2130,
   // thousands of square kilometers
   frame_center: {
      lat: 75.6617,
      lng: -39.9388
   },
   marker_position: {
      lat: 73.15181,
      lng: -39.50407
   },
});
var New_Guinea = new Place({
   name: 'New Guinea',
   population: 9.43,
   area: 785.7,
   // thousands of square kilometers
   zoom: 7.0,
   //   lat: -5.54,     // lng: 141.28},
   frame_center: {
      lat: -5.54,
      lng: 141.28
   },
   marker_position: {
      lat: -5.54,
      lng: 141.28
   },
});
var Borneo = new Place({
   name: 'Borneo',
   population: 19.7,
   area: 748.2,
   zoom: 7.0,
   //    lat: 0.74,     // lng: 113.85},
   frame_center: {
      lat: 0.74,
      lng: 113.85
   },
   marker_position: {
      lat: 0.74,
      lng: 113.85
   },
});
var Madagascar = new Place({
   name: 'Madagascar',
   population: 20.7,
   area: 587.7,
   zoom: 7.0,
   frame_center: {
      lat: -19.00,
      lng: 46.54
   },
   marker_position: {
      lat: -19.00,
      lng: 46.54
   },
});
var Baffin_Island = new Place({
   name: 'Baffin Island',
   area: 507.5,
   zoom: 6.0,
   frame_center: {
      lat: 69.90,
      lng: -72.95
   },
   marker_position: {
      lat: 69.90,
      lng: -72.95
   },
});
var Sumatra = new Place({
   name: 'Sumatra',
   population: 47.0,
   zoom: 7.0,
   frame_center: {
      lat: -1.10,
      lng: 102.04
   },
   marker_position: {
      lat: -1.10,
      lng: 102.04
   },
});
var Honshu = new Place({
   name: 'Honshu',
   population: 104.0,
   area: 225.8,
   zoom: 7.0,
   frame_center: {
      lat: 36.92,
      lng: 136.02
   },
   marker_position: {
      lat: 36.14278,
      lng: 138.5694
   },
});
var Victoria_Island = new Place({
   name: 'Victoria Island',
   area: 217.3,
   zoom: 7.0,
   frame_center: {
      lat: 71.05,
      lng: -110.51
   },
   marker_position: {
      lat: 71.05,
      lng: -109.51
   },
})
var Great_Britain = new Place({
   name: 'Great Britain',
   population: 61.4,
   area: 209.3,
   zoom: 7.0,
   frame_center: {
      lat: 54.73,
      lng: -2.00
   },
   marker_position: {
      lat: 54.53878,
      lng: -2.26179
   },
});
var Ellesmere_Island = new Place({
   name: 'Ellesmere Island',
   area: 196.2,
   zoom: 5.0,
   frame_center: {
      lat: 80.41068,
      lng: -79.36122
   },
   marker_position: {
      lat: 80.41068,
      lng: -80.36122
   },
});
var Sulawesi = new Place({
   name: 'Sulawesi',
   area: 180.7,
   zoom: 8.0,
   frame_center: {
      lat: -1.85,
      lng: 121.29
   },
   marker_position: {
      lat: -2.03666,
      lng: 120.44404
   },
});
var South_Island_New_Zealand = new Place({
   name: 'South Island, New Zealand',
   area: 145.8,
   zoom: 7.0,
   frame_center: {
      lat: -43.77,
      lng: 170.73
   },
   marker_position: {
      lat: -43.77,
      lng: 170.73
   },
});
var Java = new Place({
   name: 'Java',
   population: 132.941,
   // in millions
   area: 138.8,
   zoom: 8.0,
   frame_center: {
      lat: -7.39,
      lng: 110.39
   },
   marker_position: {
      lat: -7.39,
      lng: 110.39
   },
});
var North_Island_New_Zealand = new Place({
   name: 'North Island, New Zealand',
   population: 3.39,
   area: 111.6,
   zoom: 7.0,
   frame_center: {
      lat: -38.48,
      lng: 175.87
   },
   marker_position: {
      lat: -38.839924,
      lng: 176.023313
   },
});
var Luzon = new Place({
   name: 'Luzon',
   population: 48.5,
   area: 110.0,
   zoom: 8.0,
   frame_center: {
      lat: 15.51,
      lng: 121.40
   },
   marker_position: {
      lat: 15.67927,
      lng: 120.8912
   },
});
var Newfoundland = new Place({
   name: 'Newfoundland',
   area: 108.9,
   zoom: 7.0,
   frame_center: {
      lat: 49.15,
      lng: -55.81
   },
   marker_position: {
      lat: 48.6702,
      lng: -55.91975
   },
});
var Cuba = new Place({
   name: 'Cuba',
   area: 104.6,
   zoom: 7.0,
   frame_center: {
      lat: 21.77,
      lng: -79.50
   },
   marker_position: {
      lat: 22.075886,
      lng: -79.06053
   },
});
var Iceland = new Place({
   name: 'Iceland',
   area: 101.8,
   zoom: 7.0,
   frame_center: {
      lat: 64.92,
      lng: -18.41
   },
   marker_position: {
      lat: 64.92,
      lng: -18.41
   },
});
var Mindanao = new Place({
   name: 'Mindanao',
   population: 20.4,
   area: 97.5,
   zoom: 8.0,
   frame_center: {
      lat: 7.68,
      lng: 124.47
   },
   marker_position: {
      lat: 7.788875,
      lng: 125.030301
   },
});
var Ireland = new Place({
   name: 'Ireland',
   population: 6.38,
   area: 84.4,
   zoom: 8.0,
   frame_center: {
      lat: 53.37,
      lng: -7.91
   },
   marker_position: {
      lat: 53.37,
      lng: -7.91
   },
});

// Populous Islands not found above:
var Taiwan = new Place({
   name: 'Taiwan',
   population: 23.2,
   zoom: 8.0,
   frame_center: {
      lat: 23.68491,
      lng: 120.90661
   },
});
var Sri_Lanka = new Place({
   name: 'Sri Lanka',
   population: 20.9,
   area: 65.3,
   zoom: 8.0,
   frame_center: {
      lat: 7.92,
      lng: 80.77
   },
   marker_position: {
      lat: 7.46819251,
      lng: 80.7480541
   },
   //{lat: 7.92, lng: 80.77},
});
var Hispaniola = new Place({
   name: 'Hispaniola',
   population: 19.9,
   area: 73.9,
   zoom: 8.0,

   frame_center: {
      lat: 19.00,
      lng: -71.54
   },
   marker_position: {
      lat: 19.00,
      lng: -71.54
   },
});
var Salsette = new Place({
   name: 'Salsette',
   population: 15.1,
   zoom: 11.0,
   frame_center: {
      lat: 19.17,
      lng: 72.90
   },
   marker_position: {
      lat: 19.17,
      lng: 72.90
   },
});
var Kyushu = new Place({
   name: 'Kyushu',
   population: 13.2,
   area: 37.4,
   zoom: 9.0,

   frame_center: {
      lat: 32.6,
      lng: 130.77
   },
   marker_position: {
      lat: 32.6,
      lng: 130.77
   },
});
var Cuba = new Place({
   name: 'Cuba',
   population: 11.2,
   zoom: 8.0,
   frame_center: {
      lat: 21.77,
      lng: -79.50
   },
   marker_position: {
      lat: 22.106247,
      lng: -79.225322
   },
});
var Hainan = new Place({
   name: 'Hainan',
   population: 8.67,
   zoom: 9.0,

   frame_center: {
      lat: 19.14,
      lng: 109.79
   },
   marker_position: {
      lat: 19.14,
      lng: 109.79
   },
});
var Long_Island = new Place({
   name: 'Long Island',
   population: 7.69,
   area: 3.629,
   zoom: 9.0,

   frame_center: {
      lat: 40.83,
      lng: -73.05
   },
   marker_position: {
      lat: 40.83,
      lng: -73.05
   },
});
var Hokkaido = new Place({
   name: 'Hokkaido',
   population: 5.44,
   area: 78.7,
   zoom: 8.0,

   frame_center: {
      lat: 43.39,
      lng: 142.58
   },
   marker_position: {
      lat: 43.39,
      lng: 142.58
   },
});
var Singapore = new Place({
   name: 'Singapore',
   population: 5.31,
   zoom: 11.0,

   frame_center: {
      lat: 1.36,
      lng: 103.82
   },
   marker_position: {
      lat: 1.36,
      lng: 103.82
   },
});
var Sicily = new Place({
   name: 'Sicily',
   population: 5.02,
   zoom: 9.0,

   frame_center: {
      lat: 37.56,
      lng: 14.26
   },
   marker_position: {
      lat: 37.56,
      lng: 14.26
   },
});

var Bali = new Place({
   name: 'Bali',
   population: 4.22,
   area: 5.416,
   zoom: 10.0,
   frame_center: {
      lat: -8.34978,
      lng: 115.18639
   },
   marker_position: {
      lat: -8.34978,
      lng: 115.18639
   },
});
var Negros = new Place({
   name: 'Negros',
   population: 4.19,
   area: 13.07,
   zoom: 9.0,
   frame_center: {
      lat: 10.08794,
      lng: 123.00849
   },
});
var Panay = new Place({
   name: 'Panay',
   population: 4.03,
   area: 12.01,
   zoom: 10.0,
   frame_center: {
      lat: 11.178533591704257,
      lng: 122.47023133802372
   },
});
var Shikoku = new Place({
   name: 'Shikoku',
   population: 3.91,
   area: 18.55,
   zoom: 9.0,
   frame_center: {
      lat: 33.578830595342254,
      lng: 133.49401529922307
   },
   marker_position: {
      lat: 33.688609266179725,
      lng: 133.40613758760207
   },
});
var Puerto_Rico = new Place({
   name: 'Puerto Rico',
   population: 3.73,
   area: 9.100,
   zoom: 10.0,
   frame_center: {
      lat: 18.227978508379525,
      lng: -66.42788624731321
   },
});
var Cebu = new Place({
   name: 'Cebu',
   population: 3.63,
   area: 4.468,
   zoom: 10.0,
   frame_center: {
      lat: 10.401537,
      lng: 123.788661
   },
});
var Madura = new Place({
   name: 'Madura',
   population: 3.62,
   area: 4.429,
   zoom: 9.0,
   frame_center: {
      lat: -7.05416,
      lng: 113.39644
   },
});
// var North_Island_New_Zealand = new Place
var Lombok = new Place({
   name: 'Lombok',
   population: 3.16,
   area: 4.625,
   zoom: 10.0,
   frame_center: {
      lat: -8.575682,
      lng: 116.340400
   },
});
var Timor = new Place({
   name: 'Timor',
   population: 2.79,
   zoom: 9.0,
   frame_center: {
      lat: -9.226799422752977,
      lng: 125.1405274591159
   },
   marker_position: {
      lat: -9.150876214108859,
      lng: 125.0965784633512
   },
});
var Jamaica = new Place({
   name: 'Jamaica',
   population: 2.74,
   zoom: 10.0,
   frame_center: {
      lat: 18.149722821927448,
      lng: -77.27968367837246
   },
});

// Philippine Islands 3-11 by area (Luzon, Mindanao, Negros, Panay, Cebu already found above)
/*var Negros = new Place({
        name: 'Negros',
              zoom: 9.0,       
         frame_center: {lat: 10.129258, lng: 123.063354},
         marker_position: {lat: 10.129258, lng: 123.063354},
    }); */
var Samar = new Place({
   name: 'Samar',
   area: 12.85,
   zoom: 9.0,
   frame_center: {
      lat: 11.865503,
      lng: 125.117798
   },
   marker_position: {
      lat: 11.865503,
      lng: 125.117798
   },
});
var Palawan = new Place({
   name: 'Palawan',
   zoom: 8.0,
   area: 12.19,
   frame_center: {
      lat: 9.642215,
      lng: 118.547974
   },
   marker_position: {
      lat: 9.642215,
      lng: 118.547974
   },
});
/*var Panay = new Place({
        name: 'Panay',
        zoom: 10.0,
         frame_center: {lat: 11.198105, lng: 122.470093},
         marker_position: {lat: 11.198105, lng: 122.470093},
    }); */
var Mindoro = new Place({
   name: 'Mindoro',
   area: 10.57,
   zoom: 10.0,
   frame_center: {
      lat: 12.966169,
      lng: 121.121521
   },
   marker_position: {
      lat: 12.966169,
      lng: 121.121521
   },
});
var Leyte = new Place({
   name: 'Leyte',
   zoom: 10.0,
   frame_center: {
      lat: 10.837774,
      lng: 124.867859
   },
   marker_position: {
      lat: 10.837774,
      lng: 124.867859
   },
});

/* var Cebu = new Place({
        name: 'Cebu',
              zoom: 10.0,      
         frame_center: {lat: 10.356294, lng: 123.766479},
         marker_position: {lat: 10.356294, lng: 123.766479},
    }); */
var Bohol = new Place({
   name: 'Bohol',
   zoom: 10.0,
   frame_center: {
      lat: 9.876399,
      lng: 124.215546
   },
   marker_position: {
      lat: 9.876399,
      lng: 124.215546
   },
});

var Masbate = new Place({
   name: 'Masbate',

   area: 3.268,
   zoom: 10.0,
   frame_center: {
      lat: 12.189242,
      lng: 123.636017
   },
   marker_position: {
      lat: 12.189242,
      lng: 123.636017
   },
});

var WorldBigIslands_top20 = [Greenland, New_Guinea, Borneo, Madagascar, Baffin_Island, Sumatra, Honshu, Victoria_Island, Great_Britain, Ellesmere_Island, Sulawesi, South_Island_New_Zealand, Java, North_Island_New_Zealand, Luzon, Newfoundland, Cuba, Iceland, Mindanao, Ireland];

var PopulousIslands = [Java, Honshu, Great_Britain, Sumatra, Luzon, Taiwan, Sri_Lanka, Madagascar, Mindanao, Hispaniola, Borneo, Sulawesi, Salsette, Kyushu, Cuba, Hainan, Long_Island, New_Guinea, Ireland, Hokkaido, Singapore, Sicily, Bali, Negros, Panay, Shikoku, Puerto_Rico, Cebu, Madura, North_Island_New_Zealand, Lombok, Timor, Jamaica];

var Philippines_Big11 = [Luzon, Mindanao, Negros, Samar, Palawan, Panay, Mindoro, Leyte, Cebu, Bohol, Masbate];

var GBcities = [];
GBcities.push(new Place({
   name: 'London',
   zoom: 10.0,
   relprob: init_relprob,
   age: 10,
   frame_center: {
      lat: 51.510,
      lng: -0.122
   },
   marker_position: {
      lat: 51.510,
      lng: -0.122
   },
   radius: 18000
}));
GBcities.push(new Place({
   name: 'Birmingham',
   zoom: 10.0,

   frame_center: {
      lat: 52.481,
      lng: -1.8965
   },
   marker_position: {
      lat: 52.481,
      lng: -1.8965
   },
   radius: 5000
}));
GBcities.push(new Place({
   name: 'Leeds',
   zoom: 10.0,

   //        frame_center: {lat: 53.831361, // lng: -1.573040},
   //        marker_position: {lat: 53.831361, // lng: -1.573040},
   lat: 53.79964,
   lng: -1.54942,
   radius: 5000
}));
GBcities.push(new Place({
   name: 'Glasgow',
   zoom: 10.0,
   frame_center: {
      lat: 55.8647,
      lng: -4.2545
   },
   marker_position: {
      lat: 55.8647,
      lng: -4.2545
   },
   radius: 5000
}));
GBcities.push(new Place({
   name: 'Sheffield',
   zoom: 10.0,
   frame_center: {
      lat: 53.3865,
      lng: -1.4653
   },
   marker_position: {
      lat: 53.3865,
      lng: -1.4653
   },
   radius: 4800
}));
GBcities.push(new Place({
   name: 'Bradford',
   zoom: 10.0,
   frame_center: {
      lat: 53.792398,
      lng: -1.754701
   },
   marker_position: {
      lat: 53.792398,
      lng: -1.754701
   },
   radius: 4000
}));
GBcities.push(new Place({
   name: 'Edinburgh',
   zoom: 10.0,
   frame_center: {
      lat: 55.9566,
      lng: -3.1943
   },
   marker_position: {
      lat: 55.9566,
      lng: -3.1943
   },
   radius: 5000
}));
GBcities.push(new Place({
   name: 'Liverpool',
   zoom: 10.0,
   frame_center: {
      lat: 53.4095,
      lng: -2.9824
   },
   marker_position: {
      lat: 53.4095,
      lng: -2.9824
   },
   radius: 6000
}));
GBcities.push(new Place({
   name: 'Manchester',
   zoom: 10.0,

   frame_center: {
      lat: 53.4805,
      lng: -2.2440
   },
   marker_position: {
      lat: 53.4805,
      lng: -2.2440
   },
   radius: 7000
}));
GBcities.push(new Place({
   name: 'Bristol',
   zoom: 10.0,

   frame_center: {
      lat: 51.4549,
      lng: -2.5875
   },
   marker_position: {
      lat: 51.4549,
      lng: -2.5875
   },
   radius: 3200
}));
GBcities.push(new Place({
   name: 'Wakefield',
   zoom: 10.0,

   frame_center: {
      lat: 53.6816,
      lng: -1.4964
   },
   marker_position: {
      lat: 53.6816,
      lng: -1.4964
   },
   radius: 2000
}));
GBcities.push(new Place({
   name: 'Cardiff',
   zoom: 10.0,

   frame_center: {
      lat: 51.4801,
      lng: -3.1646
   },
   marker_position: {
      lat: 51.4801,
      lng: -3.1646
   },
   radius: 4800
}));
GBcities.push(new Place({
   name: 'Coventry',
   zoom: 10.0,

   frame_center: {
      lat: 52.4074,
      lng: -1.5113
   },
   marker_position: {
      lat: 52.4074,
      lng: -1.5113
   },
   radius: 3200
}));
GBcities.push(new Place({
   name: 'Nottingham',
   zoom: 10.0,

   frame_center: {
      lat: 52.95256,
      lng: -1.1477
   },
   marker_position: {
      lat: 52.95256,
      lng: -1.1477
   },
   radius: 3200
}));
GBcities.push(new Place({
   name: 'Leicester',
   zoom: 10.0,

   frame_center: {
      lat: 52.6378,
      lng: -1.1343
   },
   marker_position: {
      lat: 52.6378,
      lng: -1.1343
   },
   radius: 3200
}));
GBcities.push(new Place({
   name: 'Sunderland',
   zoom: 10.0,

   frame_center: {
      lat: 54.9078,
      lng: -1.3805
   },
   marker_position: {
      lat: 54.9078,
      lng: -1.3805
   },
   radius: 3200
}));
GBcities.push(new Place({
   name: 'Newcastle upon Tyne',
   zoom: 10.0,

   frame_center: {
      lat: 54.9713,
      lng: -1.613
   },
   marker_position: {
      lat: 54.9713,
      lng: -1.613
   },
   radius: 4000
}));
// Brighton
// Hull
// Plymouth
// Wolverhampton
GBcities.push(new Place({
   name: 'Derby',
   zoom: 10.0,

   frame_center: {
      lat: 52.9230,
      lng: -1.4759
   },
   marker_position: {
      lat: 52.9230,
      lng: -1.4759
   },
   radius: 3200
}));
GBcities.push(new Place({
   name: 'Stoke on Trent',
   zoom: 10.0,

   frame_center: {
      lat: 53.0113,
      lng: -2.1959
   },
   marker_position: {
      lat: 53.0113,
      lng: -2.1959
   },
   radius: 4800
}));
// Southampton
// Salford
GBcities.push(new Place({
   name: 'Portsmouth',
   zoom: 10.0,

   frame_center: {
      lat: 50.8057,
      lng: -1.0712
   },
   marker_position: {
      lat: 50.8057,
      lng: -1.0712
   },
   radius: 3600
}));
// Aberdeen
// Swansea

var Peninsulas = [];
Peninsulas.push(new Place({
   name: 'India',
   zoom: 7.0,

   frame_center: {
      lat: 16.96,
      lng: 77.61
   },
   marker_position: {
      lat: 16.96,
      lng: 77.61
   },
}));
Peninsulas.push(new Place({
   name: 'Iberia',
   zoom: 7.0,

   frame_center: {
      lat: 40.50,
      lng: -4.57
   },
   marker_position: {
      lat: 40.50,
      lng: -4.57
   },
}));
Peninsulas.push(new Place({
   name: 'Korea',
   zoom: 8.0,

   frame_center: {
      lat: 36.28,
      lng: 127.79
   },
   marker_position: {
      lat: 36.28,
      lng: 127.79
   },
}));
Peninsulas.push(new Place({
   name: 'Italy',
   zoom: 8.0,

   frame_center: {
      lat: 42.22,
      lng: 13.10
   },
   marker_position: {
      lat: 42.22,
      lng: 13.10
   },
}));
Peninsulas.push(new Place({
   name: 'Arabia',
   zoom: 7.0,

   frame_center: {
      lat: 21.77,
      lng: 47.11
   },
   marker_position: {
      lat: 21.77,
      lng: 47.11
   },
}));
Peninsulas.push(new Place({
   name: 'Malay peninsula',
   zoom: 7.0,

   frame_center: {
      lat: 5.35,
      lng: 101.47
   },
   marker_position: {
      lat: 5.35,
      lng: 101.47
   },
}));
Peninsulas.push(new Place({
   name: 'Scandinavia',
   zoom: 7.0,

   frame_center: {
      lat: 62.24,
      lng: 13.49
   },
   marker_position: {
      lat: 62.24,
      lng: 13.49
   },
}));
Peninsulas.push(new Place({
   name: 'Florida',
   zoom: 9.0,

   frame_center: {
      lat: 27.60,
      lng: -81.47
   },
   marker_position: {
      lat: 27.60,
      lng: -81.47
   },
}));

Peninsulas.push(new Place({
   name: 'Peloponnese',
   zoom: 9.0,
   frame_center: {
      lat: 37.50,
      lng: 22.15
   },
   marker_position: {
      lat: 37.50,
      lng: 22.15
   },
}));
Peninsulas.push(new Place({
   name: 'Shandong',
   zoom: 9.0,
   frame_center: {
      lat: 37.15,
      lng: 120.76
   },
   marker_position: {
      lat: 37.15,
      lng: 120.76
   },
}));
Peninsulas.push(new Place({
   name: 'Antarctic peninsula',
   zoom: 7.0,
   frame_center: {
      lat: -70.00,
      lng: -66.45
   },
   marker_position: {
      lat: -70.00,
      lng: -66.45
   },
}));
Peninsulas.push(new Place({
   name: 'Yucatan',
   zoom: 8.0,

   frame_center: {
      lat: 19.95,
      lng: -89.03
   },
   marker_position: {
      lat: 19.95,
      lng: -89.03
   },
}));
Peninsulas.push(new Place({
   name: 'Liaodong peninsula',
   zoom: 9.0,

   frame_center: {
      lat: 39.92,
      lng: 122.45
   },
   marker_position: {
      lat: 39.92,
      lng: 122.45
   },
}));
Peninsulas.push(new Place({
   name: 'Leizhou peninsula',
   zoom: 10.0,
   frame_center: {
      lat: 20.79,
      lng: 110.02
   },
   marker_position: {
      lat: 20.79,
      lng: 110.02
   },
}));
Peninsulas.push(new Place({
   name: 'Cape York peninsula',
   zoom: 8.0,

   frame_center: {
      lat: -14.2,
      lng: 142.91
   },
   marker_position: {
      lat: -14.2,
      lng: 142.91
   },
}));
Peninsulas.push(new Place({
   name: 'Jutland',
   zoom: 8.0,
   frame_center: {
      lat: 55.87,
      lng: 9.23
   },
   marker_position: {
      lat: 55.87,
      lng: 9.23
   },
}));

Peninsulas.push(new Place({
   name: 'Baja California',
   zoom: 8.0,
   frame_center: {
      lat: 27.68,
      lng: -113.42
   },
   marker_position: {
      lat: 27.68,
      lng: -113.42
   },
}));
Peninsulas.push(new Place({
   name: 'Alaska Peninsula',
   zoom: 8.0,
   frame_center: {
      lat: 56.41,
      lng: -159.04
   },
   marker_position: {
      lat: 56.41,
      lng: -159.04
   },
}));
Peninsulas.push(new Place({
   name: 'Kamchatka Peninsula',
   zoom: 7.0,
   frame_center: {
      lat: 57.30,
      lng: 159.74
   },
   marker_position: {
      lat: 57.30,
      lng: 159.74
   },
}));
Peninsulas.push(new Place({
   name: 'Seward Peninsula',
   zoom: 8.0,

   frame_center: {
      lat: 65.42,
      lng: -163.70
   },
   marker_position: {
      lat: 65.42,
      lng: -163.70
   },
}));
Peninsulas.push(new Place({
   name: 'Kola Peninsula',
   zoom: 7.0,

   frame_center: {
      lat: 67.50,
      lng: 37.27
   },
   marker_position: {
      lat: 67.50,
      lng: 37.27
   },
}));
Peninsulas.push(new Place({
   name: 'Chukchi Peninsula',
   zoom: 7.0,

   frame_center: {
      lat: 65.89,
      lng: -174.86
   },
   marker_position: {
      lat: 65.89,
      lng: -174.86
   },
}));
Peninsulas.push(new Place({
   name: 'Boothia Peninsula',
   zoom: 7.0,
   frame_center: {
      lat: 70.86,
      lng: -94.39
   },
   marker_position: {
      lat: 70.86,
      lng: -94.39
   },
}));
Peninsulas.push(new Place({
   name: 'Yamal Peninsula',
   zoom: 7.0,
   frame_center: {
      lat: 71.14,
      lng: 69.92
   },
   marker_position: {
      lat: 71.14,
      lng: 69.92
   },
}));

var StrangePlaces = [];
StrangePlaces.push(new Place({
   name: 'Belcher Islands',
   zoom: 5.0,
   frame_center: {
      lat: 56.251981,
      lng: -79.365234
   },
   marker_position: {
      lat: 56.251981,
      lng: -79.365234
   },
}));
StrangePlaces.push(new Place({
   name: 'Meanders, Oxbows near Yenisei Delta',
   zoom: 7.0,

   frame_center: {
      lat: 70.350818,
      lng: 81.001511
   },
   marker_position: {
      lat: 70.350818,
      lng: 81.001511
   },
}));
StrangePlaces.push(new Place({
   name: 'More Meanders & Oxbows near Yenisei Delta',
   zoom: 7.0,

   frame_center: {
      lat: 67.11977,
      lng: 80.566864
   },
   marker_position: {
      lat: 67.11977,
      lng: 80.566864
   },
}));
StrangePlaces.push(new Place({
   name: 'Meandering River on Sakhalin Island',
   zoom: 8.0,

   frame_center: {
      lat: 49.997330,
      lng: 142.942085
   },
   marker_position: {
      lat: 49.997330,
      lng: 142.942085
   },
}));
StrangePlaces.push(new Place({
   name: 'Rano Kau Volcanic Crater, Easter Island',
   zoom: 12.0,
   frame_center: {
      lat: -27.186713,
      lng: -109.435329
   },
   marker_position: {
      lat: -27.186713,
      lng: -109.435329
   },
}));
StrangePlaces.push(new Place({
   name: 'Volga Delta',
   zoom: 8.0,
   frame_center: {
      lat: 46.146934,
      lng: 47.647705
   },
   marker_position: {
      lat: 46.146934,
      lng: 47.647705
   },
}));
StrangePlaces.push(new Place({
   name: 'Mouths of the Ganges',
   zoom: 5.0,
   frame_center: {
      lat: 22.34,
      lng: 89.85
   },
   marker_position: {
      lat: 22.34,
      lng: 89.85
   },
}));
StrangePlaces.push(new Place({
   name: 'Peninsula near Christchurch, NZ',
   zoom: 7.0,
   frame_center: {
      lat: -43.75242,
      lng: 172.897339
   },
   marker_position: {
      lat: -43.75242,
      lng: 172.897339
   },
}));