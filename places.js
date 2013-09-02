var default_zoom = 8;
var init_age = 5;
var default_radius = 8000;

function Place(obj) {
    this.name = obj.name;
    this.population = obj.population || undefined;
    this.population = obj.population || undefined;
    this.zoom = obj.zoom || default_zoom;
//    this.relprob = obj.relprob || init_relprob;
    this.age = obj.age || init_age;
    this.last_answer_correct = obj.last_answer_correct || undefined;
    this.lat = obj.lat;
    this.lng = obj.lng;
    this.frame_center = obj.frame_center;
    this.marker_position = obj.marker_position || obj.frame_center;
    //    this.marker_position = obj.marker_position;
    this.radius = obj.radius || default_radius
};


// Some curious landforms ---
var Belcher_Islands = new Place({
    name: 'Belcher Islands',
    zoom: 9.0,
    frame_center: {
        lat: 56.251981,
        lng: -79.365234
    },
    marker_position: {
        lat: 56.251981,
        lng: -79.365234
    },
});
var Yenisei_Meanders = new Place({
    name: 'Meanders, Oxbows near Yenisei Delta',
    zoom: 12.0,
    frame_center: {
        lat: 70.350818,
        lng: 81.001511
    },
    marker_position: {
        lat: 70.350818,
        lng: 81.001511
    },
});
var Taz_Meanders = new Place({
    name: 'Meanders in Taz River',
    zoom: 12.0,
    frame_center: {
        lat: 67.11977,
        lng: 80.566864
    },
    marker_position: {
        lat: 67.11977,
        lng: 80.566864
    },
});
var Sakhalin_Meanders = new Place({
    name: 'Meandering River on Sakhalin Island',
    zoom: 13.0,

    frame_center: {
        lat: 49.997330,
        lng: 142.942085
    },
    marker_position: {
        lat: 49.997330,
        lng: 142.942085
    },
});
var Rano_Kau_Crater_Easter_Island = new Place({
    name: 'Rano Kau Volcanic Crater, Easter Island',
    zoom: 15.0,
    frame_center: {
        lat: -27.186713,
        lng: -109.435329
    },
    marker_position: {
        lat: -27.186713,
        lng: -109.435329
    },
});
var Volga_Delta = new Place({
    name: 'Volga Delta',
    zoom: 12.0,
    frame_center: {
        lat: 46.146934,
        lng: 47.647705
    },
    marker_position: {
        lat: 46.146934,
        lng: 47.647705
    },
});
var Ganges_Delta = new Place({
    name: 'Ganges Delta',
    zoom: 9.0,
    frame_center: {
        lat: 22.34,
        lng: 89.85
    },
    marker_position: {
        lat: 22.34,
        lng: 89.85
    },
});
var Banks_Peninsula_NZ = new Place({
    name: 'Banks Peninsula, NZ',
    zoom: 11.0,
    frame_center: {
        lat: -43.75242,
        lng: 172.897339
    },
    marker_position: {
        lat: -43.75242,
        lng: 172.897339
    },
});
var Lac_a_Leau_Claire = new Place({
name: 'Lac a Leau Claire',
    zoom: 10,
    frame_center: {lat:  56.139696, lng: -74.370286}
});
var Susquehanna_River_and_Mountains = new Place({
    name: "Susquehanna and Mountains",
    zoom: 11,
    frame_center: {lat: 40.696941, lng: -77.104797},
});
var Giant_Fingerprint = new Place({
    name: 'Giant Fingerprint',
    zoom: 13,
    frame_center: {lat: 46.993287, lng: -78.676529},
});
var StrangePlaces = [
    Belcher_Islands, Yenisei_Meanders, Taz_Meanders, Lac_a_Leau_Claire, 
    Banks_Peninsula_NZ, Ganges_Delta, Volga_Delta, Rano_Kau_Crater_Easter_Island,
    Sakhalin_Meanders,
];