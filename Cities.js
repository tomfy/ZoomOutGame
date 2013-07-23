

var EuropeCities = [ // Usually one per country, either capital or largest;
    'London', 'Dublin', 'Edinburgh', 'Oslo', 'Stockholm', 'Helsinki', 'St. Petersburg, Russia', 'Moscow', 'Warsaw', 'Berlin', 'Hamburg', 'Munich', 'Cologne/Dusseldorf', 'Copenhagen', 'Amsterdam', 'Brussels', 'Paris', 'Marseille', 'Lyon', 'Madrid', 'Barcelona', 'Milan', 'Rome', 'Naples', 'Venice', 'Bologna', 'Florence', 'Vienna', 'Prague', 'Budapest', 'Bratislava', 'Ljubljana', 'Zagreb', 'Belgrade', 'Tirana', 'Skopje', 'Athens', 'Sofia', 'Bucharest', 'Kiev', 'Istanbul', 'Lisbon', 'Zurich', 'Geneva', 'Vilnius', 'Riga', 'Talinn', 'Minsk', 'Chisinau', 'Sarajevo'
];

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

var GBcities = [];
GBcities.push(new Place({
    name: 'London',
    zoom: 10.0,
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
    frame_center: {lat: 53.79964,
		   lng: -1.54942},
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

