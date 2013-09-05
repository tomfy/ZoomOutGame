// Islands
// Largest area islands:
var Greenland = new Place({
    name: 'Greenland',
    zoom: 5,
    population: {kilopeople: 56.37, rank: 1000},
    area: {sqkm: 2130800, rank: 1},   // are in km^2, and world rank by area
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
    population: {kilopeople: 9425.634, rank: 16},
    area: {sqkm: 785753, rank: 2},
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
    population: {kilopeople: 19712.0, rank: 11},
    area: {sqkm: 748168, rank: 3},
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
    population: {kilopeople: 20714, rank: 8},
    area: {sqkm: 587713, rank: 4},
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
    population: {kilopeople: 10.75, rank: 1000},
    area: {sqkm: 507451, rank: 5},
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
    population: {kilopeople: 47010, rank: 5},
    area: {sqkm: 473481, rank: 6}, 
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
    population: {kilopeople: 104000, rank: 2},
    area: {sqkm: 225800, rank: 7},
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
    population: {kilopeople: 1.9, rank: 1000}, 
    area: {sqkm: 217291, rank: 8},
    zoom: 6.0,
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
    population: {kilopeople: 61371, rank: 3},
    area: {sqkm: 209331, rank: 9},
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
    population: {kilopeople: 0.15, rank: 1000},
    area: {sqkm: 196236, rank: 10},
    zoom: 6.0,
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
    population: {kilopeople: 17360, rank: 12},
    area: {sqkm: 180681, rank: 11},
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
    population: {kilopeople: 1038.6, rank: 56},
    area: {sqkm: 145836, rank: 12},
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
    population: {kilopeople: 132941, rank: 1},
    area: {sqkm: 138794, rank: 13}, // km^2
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
    population: {kilopeople: 3393.9, rank: 30},
    area: {sqkm: 111583, rank: 14},
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
    population: {kilopeople: 48520.8, rank: 4},
    area: {sqkm: 109965, rank: 15},
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
    population: {kilopeople: 479.1, rank: 81},
    area: {sqkm: 108860, rank: 16},
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
    population: {kilopeople: 11150, rank: 15},
    area: {sqkm: 104556, rank: 17},
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
    population: {kilopeople: 311.4, rank: 106},
    area: {sqkm: 101826, rank: 18},
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
    population: {kilopeople: 20365, rank: 9},
    area: {sqkm: 97530, rank: 19},
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
    population: {kilopeople: 6380.7, rank: 19},
    area: {sqkm: 84421, rank: 20},
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
var Hokkaido = new Place({
    name: 'Hokkaido',
    population: {kilopeople: 5444.3, rank: 20},
    area: {sqkm: 78719, rank: 21},
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
var Hispaniola = new Place({
    name: 'Hispaniola',
    population: {kilopeople: 19920, rank: 10},
    area: {sqkm: 73929, rank: 22},
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
var Sakhalin = new Place({
        name: 'Sakhalin',
    population: {kilopeople: 485, rank: 80},
    area: {sqkm: 72493, rank: 23},
        zoom: 7.0,
        frame_center: {
            lat: 50.175733,
            lng: 142.959097
        },
        marker_position: {
            lat: 50.175733,
            lng: 142.959097
        }
});
var Banks_Island = new Place({
        name: 'Banks Island',
    population: {kilopeople: 0.136, rank: 1000},
    area: {sqkm: 70028, rank: 24},
    zoom: 7.0,
        frame_center: {
            lat: 72.998423,
            lng: -121.439086
        },
        marker_position: {
            lat: 72.998423,
            lng: -121.439086
        },
});
var Sri_Lanka = new Place({
    name: 'Sri Lanka',
    population: {kilopeople: 20860, rank: 7},
    area: {sqkm: 65268, rank: 25},
    zoom: 8.0,
    frame_center: {
        lat: 7.92,
        lng: 80.77
    },
    marker_position: {
        lat: 7.46819251,
        lng: 80.7480541
    },
});
var Tasmania = new Place({
    name: 'Tasmania',
    population: {kilopeople: 507.6, rank: 77},
    area: {sqkm: 65022, rank: 26},
    zoom: 8.0,
    frame_center: {
        lat: -42.1843449,
        lng: 146.715009
    },
});
var Devon_Island = new Place({
    name: 'Devon Island',
    population: {kilopeople: 0, rank: 1000}, // largest uninhabited island.
    area: {sqkm: 55247, rank: 27},
    zoom: 7.0,
    frame_center: {lat:  75.48754, lng: -88.79613},
    marker_position: {lat:  75.12984, lng: -89.36577},
});
var Alexander_Island = new Place({
    name: 'Alexander Island', 
    population: {kilopeople: 0, rank: 1000},
    area: {sqkm: 49070, rank: 28},
zoom: 7.0, 
    frame_center: {lat: -71.0, lng: -70.0},
  //  marker_position: 
    });
var Tierra_del_Fuego = new Place({ // 'Isla Grande de Tierra del Fuego'
    name: 'Tierra del Fuego',
    population: {kilopeople: 108, rank: 180}, // very approx.
    area: {sqkm: 47401, rank: 29},
    zoom: 8.0,
    frame_center: {lat:  -53.95611, lng: -68.680239}, 
    marker_position: {lat:  -54.104480, lng: -68.493370},
});
var Severny_Island = new Place({
    name: 'Severny Island',
    population: {kilopeople: undefined, rank: 1000}, 
    area: {sqkm: 47079, rank: 30},
    zoom: 7.0,
    frame_center: {lat:  75.05975, lng: 58.82664},
    marker_position: {lat:  75.05975, lng: 58.82664}
});
// Berkner island. This is an antarctic ice island - ice resting on underwater rock.
// Does not appear on google maps. So not useful here, but included for completeness.
var Berkner_Island = new Place({ // Debateable whether it is an island.
     name: 'Berkner Island',
    population: {kilopeople: 0, rank: 1000},
    area: {sqkm: 43873, rank: 31}, 
    zoom: 9.0,
    frame_center: {lat: -79.5, lng:  -47.5},
    marker_position: {lat: -79.5, lng:  -47.5},
}); 
var Axel_Heiberg_Island = new Place({
    name: 'Axel Heiberg Island',
    population: {kilopeople: 0, rank: 1000},
    area: {sqkm: 43178, rank: 32},
    zoom: 6.0,
    frame_center: {lat:  79.65257877833461, lng: -91.17164348931226},
});
var Melville_Island = new Place({
    name: 'Melville Island',
    population: {kilopeople: 0, rank: 1000},
    area: {sqkm: 42149, rank: 33},
    zoom: 7.0,
    frame_center: {
        lat: 75.639079,
        lng: -110.814563
    },
    marker_position: {
        lat: 75.386334,
        lng: -111.01183
    }
});
var Southampton_Island = new Place({
    name: 'Southampton Island',
    population: {kilopeople: 0.721, rank: 1000},
    area: {sqkm: 41214, rank: 34},
    zoom: 7.0,
    frame_center: {lat: 64.6615, lng: -84.5947},
    marker_position: {lat: 64.6615, lng: -84.5947},
});
var Marajo = new Place({
    name: 'Marajo',
    population: {kilopeople: 487, rank: 79},
    area: {sqkm: 40100, rank: 35},
    zoom: 7.0,
    frame_center: {lat: -0.9503, lng: -49.7021},
    marker_position: {lat: -0.9503, lng: -49.7021},
});
var Spitsbergen = new Place({
    name: 'Spitsbergen',
    population: {kilopeople: 2.753, rank: 1000},
    area: {sqkm: 37814, rank: 36},
    frame_center: {lat: 78.5495, lng: 16.3688},
    marker_position: {lat: 78.7163, lng: 15.9082},
});
var Kyushu = new Place({
    name: 'Kyushu',
    population: {kilopeople: 13.200, rank: 14},
    area: {sqkm: 37437, rank: 37},
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
var Taiwan = new Place({
    name: 'Taiwan',
    population: {kilopeople: 23232, rank: 6},
    area: {sqkm: 35883, rank: 38},
    zoom: 8.0,
    frame_center: {
        lat: 23.68491,
        lng: 120.90661
    },
});
var New_Britain = new Place({
    name: 'New Britain',
    population: {kilopeople: 513.9, rank: 76},
    area: {sqkm: 35145, rank: 39},
    zoom: 8.0,
    frame_center: {lat: -5.273, lng: -209.5106},
    marker_position: {lat: -5.7581, lng: 150.7159},
});
var Prince_of_Wales_Island = new Place({
    name: 'Prince of Wales Island',
    population: {kilopeople: 0, rank: 1000},
    area: {sqkm: 33339, rank: 40},
    frame_center: {lat: 72.8007, lng: -98.0735},
    marker_position: {lat: 72.6858, lng: -98.8989},
});
var Yuzhny_Island = new Place({
    name: 'Yuzhny Island',
    population: {kilopeople: undefined, rank: 1000}, // 'largely evacuated in 1950's to make way for nuclear tests'
    area: {sqkm: 33246, rank: 41},
    frame_center:  {lat: 72.0507, lng: 55.1149},
    marker_position: {lat: 72.1279, lng: 53.9648},
});
var Hainan = new Place({
    name: 'Hainan',
    population: {kilopeople: 8672, rank: 17},
    area: {sqkm: 33210, rank: 42},
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
var Vancouver_Island = new Place({
    name: 'Vancouver Island',
    population: {kilopeople: 748.9, rank: 67},
    area: {sqkm: 31285, rank: 43},
    zoom: 9.0,
    frame_center: {lat: 49.6604, lng: -125.7256},
    marker_position: {lat: 49.6178, lng: -125.6726},
});
var Timor = new Place({
    name: 'Timor',
    population: {kilopeople: 2786, rank: 32},
    area: {sqkm: 28418, rank: 44},
    zoom: 9.0,
    frame_center: {
        lat: -9.226799,
        lng: 125.140527
    },
    marker_position: {
        lat: -9.150876214108859,
        lng: 125.0965784633512
    },
});
var Sicily = new Place({
    name: 'Sicily',
    population: {kilopeople: 5017, rank: 22},
    area: {sqkm: 25662, rank: 45},
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
var Somerset_Island = new Place({
    name: 'Somerset Island',
    population: {kilopeople: 0, rank: 1000},
    area: {sqkm: 24786, rank: 46},
    zoom: 8.0,
    frame_center: {lat: 73.0707, lng: -93.7725},
    marker_position: {lat: 73.1568, lng: -93.8232},
});
var Kotelny_Island = new Place({
    name: 'Kotelny Island', // also 'Kotelny/Faddayevsky Island'
    population: {kilopeople: 0, rank: 1000},
    area: {sqkm: 24000, rank: 47},
    zoom: 8.0,
frame_center: {lat: 75.443, lng: 141.0497},
    marker_position: {lat: 75.4005, lng: 140.592},
});
var Sardinia = new Place({
    name: 'Sardinia',
    population: {kilopeople: 1637, rank: 42},
    area: {sqkm: 23949, rank: 48},
    zoom: 9.0,
    frame_center: {lat: 40.0938, lng: 9.049},
    marker_position: {lat: 40.1159, lng: 9.0802},
});

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


// end of Big islands

// Populous islands not among the large islands listed above.
// Taiwan
// Sri Lanka
// Hispaniola
var Salsette = new Place({
    name: 'Salsette',
    population: {kilopeople: 15112, rank: 13},
    area: {sqkm: 619, rank: 1000}, 
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
//Hainan
var Long_Island = new Place({
    name: 'Long Island',
    population: {kilopeople: 7687, rank: 18},
    area: {sqkm: 3629, rank: 148},
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
// Ireland
// Hokkaido
var Singapore = new Place({
    name: 'Singapore',
    population: {kilopeople: 5312, rank: 21},
    area: {sqkm: 697, rank: 1000}, 
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
// Sicily
var Bali = new Place({
    name: 'Bali',
    population: {kilopeople: 4220, rank: 23},
    area: {sqkm: 5416, rank: 108},
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
    population: {kilopeople: 4195, rank: 24},
    area: {sqkm: 13074, rank: 62},
    zoom: 9.0,
    frame_center: {
        lat: 10.08794,
        lng: 123.00849
    },
});
var Panay = new Place({
    name: 'Panay',
    population: {kilopeople: 4032, rank: 25},
    area: {sqkm: 12011, rank: 65},
    zoom: 10.0,
    frame_center: {
        lat: 11.1785335,
        lng: 122.470231
    },
});
var Shikoku = new Place({
    name: 'Shikoku',
    population: {kilopeople: 3913, rank: 26},
    area: {sqkm: 18545, rank: 50},
    zoom: 9.0,
    frame_center: {
        lat: 33.5788305,
        lng: 133.494015
    },
    marker_position: {
        lat: 33.6886092,
        lng: 133.406137
    },
});
var Puerto_Rico = new Place({
    name: 'Puerto Rico',
    population: {kilopeople: 3726, rank: 27},
    area: {sqkm: 9100, rank: 82},
    zoom: 10.0,
    frame_center: {
        lat: 18.2279785,
        lng: -66.427886
    },
});
var Cebu = new Place({
    name: 'Cebu',
    population: {kilopeople: 3630, rank: 28},
    area: {sqkm: 4468, rank: 125}, 
    zoom: 10.0,
    frame_center: {
        lat: 10.401537,
        lng: 123.788661
    },
});
var Madura = new Place({
    name: 'Madura',
    population: {kilopeople: 3622, rank: 29},
    area: {sqkm: 4429, rank: 128},
    zoom: 9.0,
    frame_center: {
        lat: -7.05416,
        lng: 113.39644
    },
});
// var North_Island_New_Zealand = new Place
var Lombok = new Place({
    name: 'Lombok',
    population: {kilopeople: 3160, rank: 31},
    area: {sqkm: 4625, rank: 122},
    zoom: 10.0,
    frame_center: {
        lat: -8.575682,
        lng: 116.340400
    },
});
// Timor
var Jamaica = new Place({
    name: 'Jamaica',
    population: {kilopeople: 2741, rank: 33},
    area: {sqkm: 11190, rank: 71},
    zoom: 10.0,
    frame_center: {
        lat: 18.1497228,
        lng: -77.2796836
    },
});
// Zhongshan Dao - this is listed as 34th most populous by wikipedia, but status as island is doubtful.
var Zealand = new Place({
    name: 'Zealand', // Denmark
    population: {kilopeople: 2275, rank: 35}, 
    area: {sqkm: 7031, rank: 96},
    zoom: 10.0,
    frame_center: {lat: 55.569, lng: 11.8542},
});

// Philippine Islands  (Luzon, Mindanao, Negros, Panay, Cebu already found above)
// These are the other 6 largest (and most populous) Philippine islands.
var Samar = new Place({
    name: 'Samar',
    population: {kilopeople: 1751, rank: 40},
    area: {sqkm: 12849, rank: 63},
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
    population: {kilopeople: 793.4, rank: 65},
    area: {sqkm: 12189, rank: 64},
    frame_center: {
        lat: 9.642215,
        lng: 118.547974
    },
    marker_position: {
        lat: 9.642215,
        lng: 118.547974
    },
});
var Mindoro = new Place({
    name: 'Mindoro',
    population: {kilopeople: 1239, rank: 51},
    area: {sqkm: 10572, rank: 74},
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
    population: {kilopeople: 2188, rank: 36},
    area: {sqkm: 7368, rank: 94},
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
// Cebu
var Bohol = new Place({
    name: 'Bohol',
    population: {kilopeople: 1164, rank: 53},
    area: {sqkm: 3821, rank: 142},
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
    population: {kilopeople: 659.9, rank: 72},
    area: {sqkm: 3268, rank: 155}, 
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

// Indonesian Islands
// by size:
// New Guinea, Borneo, Sumatra, Sulawesi, Java, // already found above. 
var Halmahera = new Place ({
    name: 'Halmahera',
    population: {kilopeople: 449.9, rank: 84}, 
    area: {sqkm: 18040, rank: 51},
    zoom: 9.0,
    frame_center: {lat: 0.6921, lng: 127.8699},
});
var Seram = new Place ({
    name: 'Seram',
    population: {kilopeople: 434.1, rank: 90},
    area: {sqkm: 17454, rank: 52},
    zoom: 9,
    frame_center:  {lat: -3.1515, lng: 129.4629}
});
var Sumbawa = new Place ({
    name: 'Sumbawa',
    population: {kilopeople: 1330, rank: 45},
    area: {sqkm: 14386, rank: 58},
    zoom: 10.0,
    frame_center: {lat: -8.5973, lng: 117.9492},
    marker_position: {lat: -8.7982, lng: 117.9382},
});
var Flores = new Place ({
    name: 'Flores',
    population: {kilopeople: 1831, rank: 39},
    area: {sqkm: 14154, rank: 60},
    zoom: 9,
 // frame_center: {lat: -8.5329, lng: 121.5866},
    frame_center: {lat: -8.6625, lng: 121.5967},
    marker_position: {lat: -8.6625, lng: 121.322},
});
var Yos_Sudarso = new Place ({
    name: 'Yos_Sudarso',
    population: {kilopeople: 11, rank: 1000},
    area: {sqkm: 11742, rank: 67},
    zoom: 9,
    frame_center: {lat: -7.8152, lng: 138.4506},
});
var Bangka = new Place ({
    name: 'Bangka',
    population: {kilopeople: 960.7, rank: 58},
    area: {sqkm: 11413, rank: 68},
    zoom: 9,
    frame_center: {lat: -2.2963, lng: 105.9942},
});
var Sumba = new Place ({
    name: 'Sumba',
    population: {kilopeople: 686.1, rank: 70},
    area: {sqkm: 10711, rank: 73},
    zoom: 9,
    frame_center: {lat: -9.7253, lng: 120.0256},
});
var Buru = new Place ({
    name: 'Buru',
    population: {kilopeople: 162.1, rank: 138},
    area: {sqkm: 8473, rank: 88},
    zoom: 9,
    frame_center:  {lat: -3.4202, lng: 126.6449},
});
//Belitung, Madura, Buton, Nias, Siberut, Wetar, 
var Belitung = new Place ({
    name: 'Belitung',
    population: {kilopeople: 262.4, rank: 116},
    area: {sqkm: 4478, rank: 124},
    zoom: 10,
    frame_center: {lat: -2.869, lng: 107.916},
});
var Buton = new Place ({
    name: 'Buton',
    population: {kilopeople: 447.4, rank: 86},
    area: {sqkm: 4408, rank: 129},
    zoom: 10,
    frame_center: {lat: -5.0399, lng: 122.9331}
});
var Nias = new Place ({
    name: 'Nias',
    population: {kilopeople: 756.3, rank: 66},
    area: {sqkm: 4048, rank: 137},
    zoom: 10,
    frame_center: {lat: 1.0958, lng: 97.5558}, 
});
var Siberut = new Place ({
    name: 'Siberut',
    population: {kilopeople: 35, rank: 1000},
    area: {sqkm: 3828, rank: 141},
    zoom: 10,
    frame_center:  {lat: -1.3841, lng: 98.9346},
});
var Wetar = new Place ({
    name: 'Wetar',
    population: {kilopeople: undefined, rank: 1000},// not in wikipedia!
    area: {sqkm: 3600, rank: 150},
    zoom: 10,
    frame_center: {lat: -7.7716, lng: 126.275},
});
//  among top 20 most populous not found above:
var  Batam = new Place({
    name: 'Batam',
    population: {kilopeople: 1154, rank: 54},
    area: {sqkm: 715, rank: 1000},
    zoom: 11,
    frame_center:  {lat: 1.0773, lng: 104.0265},
});
var Ambon = new Place({
    name: 'Ambon',
    population: {kilopeople: 441, rank: 88},
    area: {sqkm: 775, rank: 1000},
    zoom: 12,
    frame_center: {lat: -3.6426, lng: 128.1445},
});
var Bintan = new Place({
    name: 'Bintan',
    population: {kilopeople: 334.9, rank: 103},
    area: {sqkm: 2402, rank: 1000},
    zoom: 11,
    frame_center: {lat: 1.022, lng: 104.4587},
    marker_position:  {lat: 1.0848, lng: 104.5143},
});

// Canadian Arctic Islands 
// Everything down to Somerset Island is already taken care of above
//
var Bathurst_Island = new Place({
    name: 'Bathurst Island',
    population: {kilopeople: 0, rank: 1000},
    area: {sqkm: 16042, rank: 54},
    zoom: 8.0,
    frame_center: {lat: 75.8614, lng: -99.4691},
    marker_position: {lat: 75.8183, lng: -99.8657},
});
var Prince_Patrick_Island = new Place({
name: 'Prince Patrick Island',
    population: {kilopeople: 0, rank: 1000},
area: {sqkm: 15848, rank: 55},
    zoom: 8.0,
    frame_center: {lat: 76.7349, lng: -118.8566},
    marker_position: {lat: 76.7051, lng: -119.3774},
});
var King_William_Island = new Place({
    name: 'King William Island',
    population: {kilopeople: 0.96, rank: 1000},
    area: {sqkm: 13111, rank: 61},
    zoom: 8.0,
    frame_center: {lat: 69.152, lng: -97.4394},
    marker_position: {lat: 69.0607, lng: -97.24},
});
var Ellef_Ringnes_Island = new Place({
name: 'Ellef Ringnes Island',
    population: {kilopeople: 0, rank: 1000},
area: {sqkm: 11295, rank: 69},
zoom: 8.0,
    frame_center: {lat: 78.5851, lng: -102.1855},
    marker_position: {lat: 78.6343, lng: -102.0959},
});
var Bylot_Island = new Place({
    name: 'Bylot Island',
    population: {kilopeople: 0, rank: 1000},
    area: {sqkm: 11067, rank: 72},
    zoom: 8.0,
    frame_center: {lat: 73.2419, lng: -78.4935},
    marker_position: {lat: 73.2536, lng: -78.7939},
});
// Other arctic/antarctic islands
var Nordaustlandet = new Place({
    name: 'Nordaustlandet', // 'North East Land' - part of Svalbard
    population: {kilopeople: 0, rank: 1000},
    area: {sqkm: 14467, rank: 57},
    zoom: 9.0,
    frame_center: {lat: 79.8549, lng: 22.7629},
    marker_position: {lat: 79.789, lng: 22.7637},
});
var October_Revolution_Island = new Place({
    name: 'October Revolution Island',
    population: {kilopeople: 0, rank: 1000},
    area: {sqkm: 14204, rank: 59},
    zoom: 9.0,
    frame_center: {lat: 79.5097, lng: -261.633},
    marker_position: {lat: 79.4605, lng: 97.207},
});
var Bolshevik_Island = new Place({
    name: 'Bolshevik Island',
    population: {kilopeople: 0, rank: 1000},
    area: {sqkm: 11206, rank: 70},
    zoom: 9.0,
    frame_center: {lat: 78.6959, lng: 102.5857},
    marker_position: {lat: 78.6192, lng: 102.6013},
});



var Thurston_Island = new Place({ // Completely snow/ice covered
    name: 'Thurston Island',
    population: {kilopeople: 0, rank: 1000},
    area: {sqkm: 15700, rank: 56},
    zoom: 9.0,
    frame_center: {lat: -72.1641, lng: -98.6118},
    marker_position: {lat: -72.2523, lng: -98.8},
}); 

// Other islands > 10000 sq km:
/*
var New_Caledonia
var Viti_Levu   // Fiji main island
var Hawaii     // 'Big Island'
*/
var Cape_Breton_Island = new Place({
    name: 'Cape Breton Island',
    population: {kilopeople: 147.45, rank: 150},
    area: {sqkm: 10311, rank: 77},
    zoom: 9.0,
    frame_center: {lat: 46.2402, lng: -60.5198},
    marker_position: {lat: 46.1684, lng: -60.7324},
});
// --------------------------------------------
//   var gc = new google.maps.Geocoder();
var GBisland_names = [ // area > 300 km^2, or population > 10,000
    'Isle of Wight', 'Isle of Man', 'Orkney', 'Isle of Skye', 'Lewis and Harris', 'Isle of Arran', 'Isle of Mull', 'Anglesey', 'Portsea Island', 'Canvey Island', 'Isle of Sheppey', 'Jersey', 'Guernsey', 'Scilly Isles', 'North Uist', 'South Uist', 'Shetland Mainland', 'Islay', 'Jura', 'Isle of Walney', 'Hayling Island', 'Holy Island, Anglesey'
];

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

var WorldBigIslands_top38 = [ // everything over 35000 sqkm.
    // 1-10
    Greenland, New_Guinea, Borneo, Madagascar,
    Baffin_Island, Sumatra, Honshu, Victoria_Island,
    Great_Britain, Ellesmere_Island, 

    // 11-20
    Sulawesi, South_Island_New_Zealand,
    Java, North_Island_New_Zealand, Luzon, Newfoundland,
    Cuba, Iceland, Mindanao, Ireland,
 
    //21-30
    Hokkaido, Hispaniola, Sakhalin, Banks_Island, 
    Sri_Lanka, Tasmania, Devon_Island, Alexander_Island,
    Tierra_del_Fuego, Severny_Island, 
    
// 31-38
    Axel_Heiberg_Island, Melville_Island, Southampton_Island, Marajo,
    Spitsbergen, Kyushu, Taiwan, New_Britain
];

var PopulousIslands = [ // top 35 by population - everything over 2 million population, except Zhongshan Dao - or doubtful insularity.
    Java, Honshu, Great_Britain, Sumatra,
    Luzon, Taiwan, Sri_Lanka, Madagascar,
    Mindanao, Hispaniola, Borneo, Sulawesi,
    Salsette, Kyushu, Cuba, Hainan,
    Long_Island, New_Guinea, Ireland, Hokkaido,
    Singapore, Sicily, Bali, Negros,
    Panay, Shikoku, Puerto_Rico, Cebu,
    Madura, North_Island_New_Zealand, Lombok, Timor,
    Jamaica, Zealand, Leyte,
];

var Philippines_Big11 = [
    Luzon, Mindanao, Negros, Samar,
    Palawan, Panay, Mindoro, Leyte,
    Cebu, Bohol, Masbate
];

var Indonesia_Big = [ // these are ranked by total island area, not by area of Indonesian part. (area > 3500 km^2. 
// > 100000 km^2
    New_Guinea, Borneo, Sumatra, Sulawesi, Java,
// 20000 - 100000
    Timor,
//  10000 - 20000 km^2
    Halmahera, Seram, Sumbawa, Flores, Yos_Sudarso,
    Bangka, Sumba,
//  5000 - 10000 km^2
    Buru, // 8.5 thousand km^2
    Bali, // 5.4 thousand km^2
// 2500 - 5000 km^2
    Lombok, Belitung, Madura, Buton, Nias,
    Siberut, Wetar, // Wetar: 3600 km^2
];

// population > 400,000  -  20 islands.
var Indonesia_Populous = [ // ranked by population on whole island, not Indonesian part. (population > 1 million. 12 islands. )
    Java, Sumatra, Borneo, Sulawesi, New_Guinea,
    Bali, Madura, Lombok, Timor, Flores, 
    Sumbawa, Batam, Bangka, Nias, Sumba,
    Halmahera, Buton, Ambon, Seram,  // Seram: 0.4341 million
    Bintan, // Bintan: 
];

var Canadian_Arctic_Islands = [
    Baffin_Island, Victoria_Island, Ellesmere_Island, Banks_Island, Devon_Island,
    Axel_Heiberg_Island, Melville_Island, Southampton_Island, Prince_of_Wales_Island, Somerset_Island,
    Bathurst_Island, Prince_Patrick_Island, King_William_Island, Ellef_Ringnes_Island, Bylot_Island,
];

var Arctic_Islands =  [
    Greenland,
    Baffin_Island, Victoria_Island, Ellesmere_Island, Banks_Island, Devon_Island, Iceland,
    Axel_Heiberg_Island, Melville_Island, Southampton_Island, Prince_of_Wales_Island, Somerset_Island,
    Bathurst_Island, Prince_Patrick_Island, King_William_Island, Ellef_Ringnes_Island, Bylot_Island,
    Spitsbergen, Nordaustlandet, 
    Yuzhny_Island, Severny_Island, Kotelny_Island, October_Revolution_Island, Bolshevik_Island
];

 var BigOrPopulous = {'Greenland': Greenland};
 for (var i = 0; i < WorldBigIslands_top38.length; i++) {
     var an_island = WorldBigIslands_top38[i];
     var name = an_island.name;
     BigOrPopulous[name] = an_island;
 }
 for (var i = 0; i < PopulousIslands.length; i++) {
     var an_island = PopulousIslands[i];
     var name = an_island.name;
     BigOrPopulous[name] = an_island;
 }
var BOP_Islands = [];
for (var island_name in BigOrPopulous){
    console.log("name: " + island_name);
    var island = BigOrPopulous[island_name];
    console.log("name, islandname: " + island_name + " " + island.name );
    BOP_Islands.push(island);
}