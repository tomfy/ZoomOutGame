// ********  Sets of islands: (arrays of objects) ************

var GB_Islands = [ // area > 300 km^2, or population > 10,000
    'Isle_of_Wight', 'Isle_of_Man', 'Orkney_Mainland', 'Isle_of_Skye', 'Anglesey', 
    'North_Uist', 'South_Uist', 'Lewis_and_Harris', 'Isle_of_Mull', 'Isle_of_Arran', 
    'Islay', 'Jura', 'Guernsey', 'Jersey', 'Isles_of_Scilly', 
    'Portsea_Island', 'Hayling_Island', 'Canvey_Island', 'Isle_of_Sheppey', 'Isle_of_Walney',
    'Shetland_Mainland', 'Holy_Island_Anglesey',
];

var Baltic_Islands = [
    'Zealand', 'Funen', 'Gotland', 'Hiumaa', 'Saaremaa', 'Fasta_Aland', 
    'Ruegen', 'Oeland', 'Bornholm', 
// 'Hailuoto', 
'Lolland', 'Falster',
];

var World_Islands_Big = [ // everything over 20000 sqkm.
    // 1-10
    'Greenland', 'New_Guinea', 'Borneo', 'Madagascar',
    'Baffin_Island', 'Sumatra', 'Honshu', 'Victoria_Island',
    'Great_Britain', 'Ellesmere_Island', 

    // 11-20
    'Sulawesi', 'South_Island_New_Zealand',
    'Java', 'North_Island_New_Zealand', 'Luzon', 'Newfoundland',
    'Cuba', 'Iceland', 'Mindanao', 'Ireland',
 
    //21-30
    'Hokkaido', 'Hispaniola', 'Sakhalin', 'Banks_Island', 
    'Sri_Lanka', 'Tasmania', 'Devon_Island', 'Alexander_Island',
    'Tierra_del_Fuego', 'Severny_Island', 
    
// 31-38  > 35000 sqkm
    'Axel_Heiberg_Island', 'Melville_Island', 'Southampton_Island', 'Marajo',
    'Spitsbergen', 'Kyushu', 'Taiwan', 'New_Britain',

// 20000 < area < 35000 (sqkm) 39-47
    'Prince_of_Wales_Island', 'Yuzhny_Island', 'Hainan', 
    'Vancouver_Island', 'Timor', 'Sicily',
    'Somerset_Island', 'Kotelny_Island', 'Sardinia',
// 10000 < area < 20000 (sqkm) 48-74
    // 'Bananal', // Brazil (Tocantins) fluvial island
    'Shikoku', 'Halmahera', 'Seram', 'New_Caledonia',
    'Bathurst_Island', 'Prince_Patrick_Island', 'Thurston_Island', // Antarctica
    'Nordaustlandet', // Svalbard
    'Sumbawa', 'October_Revolution_Island', 'Flores', 'King_William_Island', 
    'Negros', 'Samar', 'Palawan', 'Panay',
    // 'Tupinambarana', // Brazil - 'now split into 4 islands'
    'Yos_Sudarso', // near New Guinea
    'Bangka', 'Ellef_Ringnes_Island', 'Bolshevik_Island', 'Jamaica',
    'Bylot_Island', 'Sumba', 'Mindoro', 'Viti_Levu', // Fiji main island
    'Hawaii', // Big island
    'Cape_Breton_Island',
];

var World_Islands_Populous = [ // Everything over 2 million 'population', (except Zhongshan Dao - of doubtful insularity)
    // 1-35
    'Java', 'Honshu', 'Great_Britain', 'Sumatra',
    'Luzon', 'Taiwan', 'Sri_Lanka', 'Madagascar',
    'Mindanao', 'Hispaniola', 'Borneo', 'Sulawesi',
    'Salsette', 'Kyushu', 'Cuba', 'Hainan',
    'Long_Island', 'New_Guinea', 'Ireland', 'Hokkaido',
    'Singapore', 'Sicily', 'Bali', 'Negros',
    'Panay', 'Shikoku', 'Puerto_Rico', 'Cebu',
    'Madura', 'North_Island_New_Zealand', 'Lombok', 'Timor',
    'Jamaica', /* 'Zhongshan_Dao', */ 'Zealand', 'Leyte',

    // 1 million < population < 2 million
    // 36 - 55
    'Island_of_Montreal', 'Xiamen_Island', 'Flores', 'Samar',
    'Bhola_Island', 'Sardinia', 'Manhattan', 'Haizhu', 
    'Sao_Luis', 'Sumbawa', 
/* 'Mauritius', 'Trinidad', 'Okinawa', */
    /* 'Hong_Kong', */ 'Mindoro', /* 'Bahrain', */, 'Bohol',
    'Batam', /* Cyprus */, 'South_Island_New_Zealand',

];

var Philippines_Islands_Big11 = [
    'Luzon', 'Mindanao', 'Negros', 'Samar',
    'Palawan', 'Panay', 'Mindoro', 'Leyte',
    'Cebu', 'Bohol', 'Masbate',
];



var Indonesia_Islands_Big = [ // these are ranked by total island 'area', not by area of Indonesian part. (area > 3500 km^2. 
// > 100000 km^2   1-5
    'New_Guinea', 'Borneo', 'Sumatra', 'Sulawesi', 'Java',
// 20000 - 100000  6
    'Timor',  
//  10000 - 20000 km^2  7-13
    'Halmahera', 'Seram', 'Sumbawa', 'Flores', 'Yos_Sudarso',
    'Bangka', 'Sumba',
//  5000 - 10000 km^2 14-15
    'Buru', // 8.5 thousand km^2
    'Bali', // 5.4 thousand km^2
// 2500 - 5000 km^2  16-22
    'Lombok', 'Belitung', 'Madura', 'Buton', 'Nias',
    'Siberut', 'Wetar', // Wetar: 3600 km^2
    // 'Waigeo', 'Yamdena', 'Taliabu', 'Muna', 
    // 'Obira',
];

// population > 400,000  -  20 islands.
var Indonesia_Islands_Populous = [ // ranked by population on whole 'island', not Indonesian part. (population > 1 million. 12 islands. )
    'Java', 'Sumatra', 'Borneo', 'Sulawesi', 'New_Guinea',
    'Bali', 'Madura', 'Lombok', 'Timor', 'Flores', 
    'Sumbawa', 
    // 300,000 < population < 1 million
    'Batam', 'Bangka', 'Nias', 'Sumba',
    'Halmahera', 'Buton', 'Ambon', 'Seram',  // Seram: 434 thousand
    'Bintan', // Bintan: 330 thousand
];

var Philippine_archipelago = [
    'Luzon', 'Mindanao', 'Negros', 'Samar', 'Palawan', 
    'Panay', 'Mindoro', 'Leyte', 'Cebu', 'Bohol',
    'Masbate',

    'Catanduanes', 'Basilan', 'Marinduque', 'Busuanga',
    'Jolo', 'Dinagat', 'Polillo', 'TawiTawi', 'Guimaras', // 605 sq km
    'Biliran', // 555 sq km
// 21 so far - in order of size (area)
  
    'Sibuyan', // 445 sq km (172 sq mi)
    'Siargao', // 437 sq km
  'Burias', // 424 sq km
 'Tablas', // ? ~400 ?

   'Culion', // 389 sq km
  'Siquijor', // 337 sq km  
    'Ticao', // 334 sq km
   'Dumaran', // ? ~300 sq km ?
    'Camiguin', // 238 sq km

  // 30 so far
  
 // smaller than 200 sq km

/*  'Philippines_Alabat', // 192 sq km 
  'Philippines_Patnanongan', // 139 sq km
  'Philippines_Bucas_Grande', // 128 sq km
  'Philippines_Lubang', // 125 sq km */
// 34 so far

// smaller
//  Philippines_Babuyan, // 2 outlines
//  Philippines_Panaon,
 // Philippines_Homonhon, // small
//  Philippines_38etc, // 4
 //   Philippines_20,
 //   Philippines_23
];


var Indonesia_Islands_Big_or_Populous = [ // 25 islands.
// > 100000 km^2
    'New_Guinea', 'Borneo', 'Sumatra', 'Sulawesi', 'Java',
// 20000 - 100000
    'Timor',
//  10000 - 20000 km^2
    'Halmahera', 'Seram', 'Sumbawa', 'Flores', 'Yos_Sudarso',
    'Bangka', 'Sumba',
//  5000 - 10000 km^2
    'Buru', // 8.5 thousand km^2
    'Bali', // 5.4 thousand km^2
// 2500 - 5000 km^2
    'Lombok', 'Belitung', 'Madura', 'Buton', 'Nias',
    'Siberut', 'Wetar', // Wetar: 3600 km^2
// Populous islands not found in the above
    'Ambon', 'Batam', 'Bintan',
];

var Canada_Islands_Arctic = [
    'Baffin_Island', 'Victoria_Island', 'Ellesmere_Island', 'Banks_Island', 'Devon_Island',
    'Axel_Heiberg_Island', 'Melville_Island', 'Southampton_Island', 'Prince_of_Wales_Island', 'Somerset_Island',
    'Bathurst_Island', 'Prince_Patrick_Island', 'King_William_Island', 'Ellef_Ringnes_Island', 'Bylot_Island',
];

var Arctic_Islands =  [
    'Greenland',
    'Baffin_Island', 'Victoria_Island', 'Ellesmere_Island', 'Banks_Island', 'Devon_Island', 'Iceland',
    'Axel_Heiberg_Island', 'Melville_Island', 'Southampton_Island', 'Prince_of_Wales_Island', 'Somerset_Island',
    'Bathurst_Island', 'Prince_Patrick_Island', 'King_William_Island', 'Ellef_Ringnes_Island', 'Bylot_Island',
    'Spitsbergen', 'Nordaustlandet', 
    'Yuzhny_Island', 'Severny_Island', 'Kotelny_Island', 'October_Revolution_Island', 'Bolshevik_Island',
];



// Arrays of island names

// Islands of U.S.
var US_Islands = [
    // 14 with area > 2500 square km:
    'Hawaii', 'Kodiak', 'Puerto Rico', 'Prince of Wales Island', 'Chichagof', 
    'St. Lawrence', 'Admiralty', 'Nunivak', 'Unimak', 'Baranof', 
    'Long Island', 'Revillagigedo', 'Kupreanof', 'Unalaska',
// 8 with population > 100000
    // 'Long Island', // 7449 kilopeople
    // 'Puerto Rico', //3809 kp
    'Manhattan', // 1537 kilopeople
    'Oahu', // 876 kp
    'Staten Island', // 444 kp
    'Guam', // 155 kp
  //  'Hawaii', // 149 kp
    'Maui', // 118 kp
// 50000 < Population < 100000 
    'Saipan', // 62 kp (N. Marianas)
    'Aquidneck Island, RI', // 61 kp 
    'Kauai', // 58.3 kp
    'Whidbey', // 58.2 kp
    'Galveston Island', // 58.2 kp
    'Tutuila', // 55.9 (Am. Samoa)
    'St. Croix', // 53.2 kp
    'St. Thomas', // 51.2 kp
];

// Islands of Canada
var Canada_Islands = [
// many arctic islands -- see above
    'Prince Edward Island', 'Newfoundland', 'Cape Breton Island',
    'Anticosti Island', 'Vancouver Island', 'Manitoulin Island'
];
    
// various islands / archipelagoes
var Various_Islands = [
// Atlantic
    'Bermuda', 'Tristan da Cunha', 'St. Helena', 'Ascension Island', 'Falkland Islands',
    
    'Faroe Islands', 'Azores', 'Canary Islands', 'Madeira',
// Pacific
    'Galapagoes Islands', 'Kuril Islands', 'Ryukyu Islands',
    'Easter Island',
// Indian
    'Reunion', 'Mauritius', 'Comoros',
    'Kerguelen', 'Crozet Island', 'Seychelles', 'Maldives',
    'Andaman Islands',
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

var MediterraneanIslands = [

'Sicily', 'Sardinia', 'Corsica', 'Cyprus', 'Crete', 'Euboea', 'Malta', 'Rhodes', 'Majorca', 'Lesbos', 'Elba', 'Ibiza', 'Minorca'

    //	 'Cyclades, Greece',
    //	'Dodecanese, Greece',
    //	'Balearic Islands',
//			    Sicily, Sardinia, Corsica, Cyprus, Crete, Euboea, Malta, Rhodes, Majorca, Lesbos, Elba, Ibiza, Minorca
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


var World_Islands_Big_or_Populous_hash = new Object;
var World_Islands_Big_or_Populous = [];
for(var i in World_Islands_Big){
    var the_island = World_Islands_Big[i];
    World_Islands_Big_or_Populous_hash[the_island.name] =the_island;
}
for(var i in World_Islands_Populous){
    var the_island = World_Islands_Populous[i];
    World_Islands_Big_or_Populous_hash[the_island.name] = the_island;
}
for(var name in World_Islands_Big_or_Populous_hash){
    World_Islands_Big_or_Populous.push(World_Islands_Big_or_Populous_hash[name]);
  //  console.log("an island: " + name);
}