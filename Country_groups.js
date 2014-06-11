var Asia = [
    'Russia', 'Uzbekistan', 'Turkmenistan', 'Kazakhstan', 
    'Iran', 'Pakistan', 'Afghanistan', 'Kyrgyzstan', 'Tajikistan',
    'India', 'Nepal', 'Bhutan', 'Myanmar', 'Bangladesh', 'Sri_Lanka',
    'Thailand', 'Cambodia', 'Vietnam', 'Laos', 'Malaysia',
    'Indonesia', 'Philippines', 'China', 'Taiwan', // 'Singapore',
    'Saudi_Arabia', 'Yemen', 'Oman', 'United_Arab_Emirates', 'Qatar',
    'Kuwait', 'Iraq', 'Jordan', 'Syria', 'Lebanon', 'Israel', 'Turkey',
    'Armenia', 'Georgia', 'Azerbaijan', 
    'North_Korea', 'South_Korea', 'Japan', 'Mongolia',
];  

/* var EuropeCountries = [
'France', 'Germany', 'Italy', 'Spain', 'Belgium', 
'Netherlands', 'Denmark', 'Poland', 'Czech Republic', 'Slovakia', 
'Hungary', 'Romania', 'Serbia', 'Bosnia', 'Croatia', 
'Slovenia', 'Portugal', 'Austria', 'Albania', 'Macedonia', 

'Bulgaria', 'Greece', 'Turkey', 'Moldova', 'Ukraine', 
'Russia', 'Lithuania', 'Latvia', 'Estonia', 'Finland', 
'Sweden', 'Norway', 'United Kingdom', 'Ireland', 'Iceland', 
'Luxembourg', 'Switzerland',
]; */

var Europe = [
    'United_Kingdom', 'France', 'Ireland', 'Belgium', 'Luxembourg',
    'Netherlands', 'Spain', 'Switzerland', 'Italy', 'Germany',
    'Poland', 'Czech_Republic', 'Slovakia', 'Hungary', 'Slovenia',
    'Lithuania', 'Latvia', 'Estonia', 'Norway', 'Sweden',

    'Denmark', 'Finland', 'Belarus', 'Moldova', 'Ukraine', 
    'Romania', 'Austria', 'Bulgaria', 'Croatia', 'Bosnia_and_Herzegovina', 
    'Serbia', 'Montenegro', 'Macedonia', 'Albania', 'Greece', 
    'Portugal', 'Turkey', 'Russia', 'Cyprus',
   // 'Iceland', 
];

var Mediterranean = [
    // These actually border the mediterranean sea or the black sea
    'Morocco', 'Algeria', 'Tunisia', 'Libya', 'Egypt',
    'Israel', 'Lebanon', 'Syria', 'Turkey', 'Georgia',
    'Russia', 'Ukraine', 'Romania', 'Bulgaria', 'Greece', 
    'Albania', 'Montenegro', 'Bosnia_and_Herzegovina', 'Croatia', 'Slovenia',
    'Italy', 'France', 'Spain', 'Cyprus', // 'Malta' 
// other neighboring countries
    'Portugal', 'Serbia', 'Switzerland', 'Austria', 'Hungary', 
    'Germany', 'Poland', 'Luxembourg', 'Belgium', 
    'Slovakia', 'Czech_Republic', 'Moldova', 'Macedonia',
    'Jordan', 'Saudi_Arabia', 'Armenia', 'Iraq', 'West_Bank',
];

var SouthAmerica = [
    'Chile', 'Bolivia', 'Peru', 'Ecuador', 'Colombia',
    'Venezuela', 'Guyana', 'Suriname', 'French_Guiana', 'Brazil',
    'Uruguay', 'Argentina', 'Paraguay',
];

var NorthAmerica = [
    'Canada', 'United_States', 'Mexico', 'Guatemala', 'Belize',
    'Honduras', 'Nicaragua', 'El_Salvador', 'Costa_Rica', 'Panama',
];

var CentralAmerica = [
    'United_States', 'Mexico', 'Guatemala', 'Belize',
    'Honduras', 'Nicaragua', 'El_Salvador', 'Costa_Rica', 'Panama',
    'Colombia', 'Venezuela', 'Guyana', 'Suriname', // 'French_Guiana',
    'Ecuador', 'Peru', 'Brazil',
];

var Africa = [
    'Morocco', 'Algeria', 'Tunisia', 'Libya', 'Egypt',
    'Sudan', 'Chad', 'Niger', 'Mali', 'Mauritania', 

    'Western_Sahara', 'Senegal', 'The_Gambia', 'Sierra_Leone', 
    'Liberia', 'Ivory_Coast', 'Ghana', 'Benin', 'Togo', // 

    'Nigeria', 'Cameroon', 'Guinea', 'Burkina_Faso', 'Guinea_Bissau',
    'Central_African_Republic', 'Gabon', 'Rep_Congo', 'Dem_Rep_Congo', 'Ethiopia',

    'Eritrea', 'Djibouti', 'Somalia', 'Kenya', 'Tanzania', 
    'Uganda', 'Rwanda', 'Burundi', 'Angola', 'Malawi',

    'Mozambique', 'Equatorial_Guinea', 'Zambia', 'Zimbabwe', 'Namibia',
    'South_Africa', 'Botswana', 'Lesotho', 'Swaziland', 'Madagascar',
];


var BigAreaCountries = [ // top 50
    'Russia', 'Canada', 'China', 'United_States', 'Brazil',
    'Australia', 'India', 'Argentina', 'Kazakhstan', 'Algeria',

    'Dem_Rep_Congo', 'Greenland', 'Saudi_Arabia', 'Mexico', 'Indonesia', 
    'Sudan', // not including S. Sudan
    'Libya', 'Iran', 'Mongolia', 'Peru', 

    'Chad', 'Niger', 'Angola', 'Mali', 'South_Africa', 
    'Colombia', 'Ethiopia', 'Bolivia', 'Mauritania', 'Egypt',

 //   'United_Republic_of_Tanzania', // Official 'name', apparently
// /* 
   'Tanzania', 'Nigeria', 'Venezuela', 'Pakistan', 'Namibia',
    'Mozambique', 'Turkey', 'Chile', 'Zambia', 'Myanmar',

    'Afghanistan', 'France', 'Somalia', 'Central_African_Republic', // 'South_Sudan',
    'Madagascar', 'Botswana', 'Kenya', 'Ukraine', 'Yemen', //  */
];

var BigPopulationCountries = [ // top 50
    'China', 'India', 'United_States', 'Indonesia', 'Brazil',
    'Pakistan', 'Nigeria', 'Bangladesh', 'Russia', 'Japan',

    'Mexico', 'Philippines', 'Vietnam', 'Ethiopia', 'Egypt',
    'Germany', 'Iran', 'Turkey', 'Dem_Rep_Congo', 'Thailand',

    'France', 'United_Kingdom', 'Italy', 'Myanmar', 'South_Africa',
    'South_Korea', 'Colombia', 'Spain', 'Ukraine', 'Tanzania',
// /*
    'Kenya', 'Argentina', 'Algeria', 'Poland', 'Sudan',
    'Uganda', 'Canada', 'Iraq', 'Morocco', 'Peru',

    'Uzbekistan', 'Malaysia', 'Saudi_Arabia', 'Venezuela', 'Nepal',
    'Afghanistan', 'Yemen', 'North_Korea', 'Ghana', 'Mozambique', // */
];

var BigGdpCountries = [ // IMF 2012 PPP top 50
    'United_States', 'China', 'India', 'Japan', 'Germany',
    'Russia', 'Brazil', 'United_Kingdom', 'France', 'Italy',

    'Mexico', 'South_Korea', 'Canada', 'Spain', 'Indonesia',
    'Turkey', 'Iran', 'Australia', 'Saudi_Arabia', 'Taiwan',

    'Poland', 'Argentina', 'Netherlands', 'Thailand', 'South_Africa',
    'Egypt', 'Pakistan', 'Colombia', 'Malaysia', 'Nigeria',
/*
    'Belgium', 'Philippines', 'Venezuela', 'Sweden', 'Switzerland', // Hong Kong between 'Sweden', Switzerland
    'Austria', 'Ukraine', 'Singapore', 'Peru', 'Vietnam', 

    'Chile', 'Bangladesh', 'Czech_Republic', 'Greece', 'Norway',
    'Algeria', 'Romania', 'United_Arab_Emirates', 'Israel', 'Portugal', */
];


 


    
var the_philippines = [ 'Philippines' ];

var few_european_countries = [ // a few - not too 'big', for testing purposes
    'Belgium', 'Luxembourg', 'Denmark', 'Switzerland', 'Czech_Republic',
    'France', 'Netherlands', 'Germany', // 'Poland', 'Slovakia',
    'Austria', 'Slovenia', 'Italy',
]; 

var various_countries = few_european_countries; 
    // BigGdpCountries; //BigPopulationCountries;

var Whole_world_1 = [ // tiny 'ones', etc. commented out
//  'Aruba',
//  'Antigua_and_Barbuda',
'United_Arab_Emirates',
'Afghanistan',
'Algeria',
'Azerbaijan',
'Albania',
'Armenia',
//  'Andorra',
'Angola',
//  'American_Samoa',
'Argentina',
'Australia',
'Austria',
//  'Anguilla',
//  'Antarctica',
'Bahrain',
//  'Barbados',
'Botswana',
//  'Bermuda',
'Belgium',
'The_Bahamas',
'Bangladesh',
'Belize',
'Bosnia_and_Herzegovina',
'Bolivia',
'Myanmar',
'Benin',
'Belarus',
'Solomon_Is',
'Brazil',
'Bhutan',
'Bulgaria',
//  'Bouvet_I',
'Brunei',
'Burundi',
'Canada',
'Cambodia',
'Chad',
'Sri_Lanka',
'Rep_Congo',
'Dem_Rep_Congo',
'China',
'Chile',
//  'Cayman_Is',
//  'Cocos_Is',
'Cameroon',
//  'Comoros',
'Colombia',
//  'Northern_Mariana_Is',
'Costa_Rica',
'Central_African_Republic',
'Cuba',
//  'Cape_Verde',
//  'Cook_Is',
'Cyprus',
'Denmark',
'Djibouti',
//  'Dominica',
//  'Jarvis_I',
'Dominican_Republic',
'Ecuador',
'Egypt',
'Ireland',
'Equatorial_Guinea',
'Estonia',
'Eritrea',
'El_Salvador',
'Ethiopia',
'Czech_Republic',
'French_Guiana',
'Finland',
'Fiji',
//  'Falkland_Is',
//  'Micronesia',
//  'Faroe_Is',
//  'French_Polynesia',
//  'Baker_I',
'France',
//  'French_Southern_and_Antarctic_Lands',
'The_Gambia',
'Gabon',
'Georgia',
'Ghana',
'Gibraltar',
'Grenada',
//  'Guernsey',
'Greenland',
'Germany',
//  'Glorioso_Is',
//  'Guadeloupe',
//  'Guam',
'Greece',
'Guatemala',
'Guinea',
'Guyana',
//  'Gaza_Strip',
'Haiti',
//  'Heard_I_and_McDonald_Is',
'Honduras',
//  'Howland_I',
'Croatia',
'Hungary',
'Iceland',
'Indonesia',
//  'Isle_of_Man',
'India',
//  'British_Indian_Ocean_Territory',
'Iran',
'Israel',
'Italy',
'Cote_dIvoire',
'Iraq',
'Japan',
'Jersey',
'Jamaica',
//  'Jan_Mayen',
'Jordan',
//  'Johnston_Atoll',
//  'Juan_De_Nova_I',
'Kenya',
'Kyrgyzstan',
'North_Korea',
//  'Kiribati',
'South_Korea',
//  'Christmas_I',
'Kuwait',
'Kazakhstan',
'Laos',
'Lebanon',
'Latvia',
'Lithuania',
'Liberia',
'Slovakia',
//  'Liechtenstein',
'Lesotho',
'Luxembourg',
'Libya',
'Madagascar',
//  'Martinique',
'Moldova',
//  'Mayotte',
'Mongolia',
//  'Montserrat',
'Malawi',
'Macedonia',
'Mali',
//  'Monaco',
'Morocco',
//  'Mauritius',
//  'Midway_Is',
'Mauritania',
//  'Malta',
'Oman',
//  'Maldives',
'Montenegro',
'Mexico',
'Malaysia',
'Mozambique',
'New_Caledonia',
//  'Niue',
//  'Norfolk_I',
'Niger',
//  'Vanuatu',
'Nigeria',
'Netherlands',
'Norway',
'Nepal',
//  'Nauru',
'Suriname',
//  'Netherlands_Antilles',
'Nicaragua',
'New_Zealand',
'Paraguay',
//  'Pitcairn_Is',
'Peru',
//  'Paracel_Is',
//  'Spratly_Is',
'Pakistan',
'Poland',
'Panama',
'Portugal',
'Papua_New_Guinea',
//  'Palau',
'Guinea_Bissau',
'Qatar',
//  'Reunion',
//  'Marshall_Is',
'Romania',
'Philippines',
//  'Puerto_Rico',
'Russia',
'Rwanda',
'Saudi_Arabia',
//  'St_Pierre_and_Miquelon',
//  'St_Kitts_and_Nevis',
//  'Seychelles',
'South_Africa',
'Senegal',
//  'St_Helena',
'Slovenia',
'Sierra_Leone',
//  'San_Marino',
'Singapore',
'Somalia',
'Spain',
'Serbia',
//  'St_Lucia',
'Sudan',
//  'Svalbard',
'Sweden',
//  'South_Georgia_and_the_South_Sandwich_Is',
'Syria',
'Switzerland',
'Trinidad_and_Tobago',
'Thailand',
'Tajikistan',
//  'Turks_and_Caicos_Is',
//  'Tokelau',
'East_Timor',
//  'Tonga',
'Togo',
//  'Sao_Tome_and_Principe',
'Tunisia',
'Turkey',
//  'Tuvalu',
'Taiwan',
'Turkmenistan',
'Tanzania',
'Uganda',
'United_Kingdom',
'Ukraine',
'United_States',
'Burkina_Faso',
'Uruguay',
'Uzbekistan',
//  'St_Vincent_and_the_Grenadines',
'Venezuela',
//  'British_Virgin_Is',
'Vietnam',
//  'Virgin_Is',
//  'Vatican_City',
'Namibia',
'West_Bank',
//  'Wallis_and_Futuna',
'Western_Sahara',
//  'Wake_I',
//  'Samoa',
'Swaziland',
'Yemen',
'Zambia',
'Zimbabwe',
];

var Whole_world = [
'Russia', 'Canada', 'China', 'United_States', 'Brazil',
'Australia', 'India', 'Argentina', 'Kazakhstan', 'Algeria',
'Dem_Rep_Congo', 'Greenland', 'Saudi_Arabia', 'Mexico', 'Indonesia',
'Sudan', 'Libya', 'Iran', 'Mongolia', 'Peru',
'Chad', 'Niger', 'Angola', 'Mali', 'South_Africa',
]; 

    /*
'Colombia', 'Ethiopia', 'Bolivia',
'Mauritania', 'Egypt', 'Tanzania', 'Nigeria', 'Venezuela',
'Pakistan', 'Namibia', 'Mozambique', 'Turkey', 'Chile',
'Zambia', 'Burma', 'Afghanistan', 'Somalia', 'Central_African_Republic',
'South_Sudan', 'Ukraine', 'Madagascar', 'Botswana', 'Kenya',

'France', 'Yemen', 'Thailand', 'Spain', 'Turkmenistan',
'Cameroon', 'Papua_New_Guinea', 'Sweden', 'Uzbekistan', 'Morocco',
'Iraq', 'Paraguay', 'Zimbabwe', 'Japan', 'Germany',
'Philippines', 'Rep_Congo', 'Finland', 'Vietnam', 'Malaysia',
'Norway', 'Ivory_Coast', 'Poland', 'Oman', 'Italy',

'Ecuador', 'Burkina_Faso', 'New_Zealand', 'Gabon', 'Western_Sahara',
'Guinea', 'United_Kingdom', 'Uganda', 'Ghana', 'Romania',
'Laos', 'Guyana', 'Belarus', 'Kyrgyzstan', 'Senegal',
'Syria', 'Cambodia', 'Uruguay', 'Suriname', 'Tunisia',
'Bangladesh', 'Nepal', 'Tajikistan', 'Greece', 'Nicaragua',
//
'North_Korea', 'Malawi', 'Eritrea', 'Benin', 'Honduras',
'Liberia', 'Bulgaria', 'Cuba', 'Guatemala', 'Iceland',
'South_Korea', 'Hungary', 'Portugal', 'Jordan', 'Serbia',
'Azerbaijan', 'Austria', 'United_Arab_Emirates', 'French_Guiana', 'Czech_Republic',
'Panama', 'Sierra_Leone', 'Ireland', 'Georgia', 'Sri_Lanka',

'Lithuania', 'Latvia', 'Togo', 'Croatia', 'Bosnia_and_Herzegovina',
'Costa_Rica', 'Slovakia', 'Dominican_Republic', 'Estonia', 'Denmark',
'Netherlands', 'Switzerland', 'Bhutan', 'Taiwan', 'Guinea_Bissau',
'Moldova', 'Belgium', 'Lesotho', 'Armenia', 'Albania',
'Equatorial_Guinea', 'Burundi', 'Haiti', 'Rwanda', 'Macedonia',
// 150
'Djibouti', 'Belize', 'El_Salvador', 'Israel', 'Slovenia', 
'Fiji', 'Kuwait', 'Swaziland', 'East_Timor', 'Bahamas',
'Montenegro', 'Vanuatu', 'Qatar', 'Gambia', 'Jamaica',
'Lebanon', 'Cyprus', 'Palestine', 'Brunei', 'Trinidad_and_Tobago',
'Cape_Verde', 'Samoa', 'Luxembourg',
// 173 in all
];
// */