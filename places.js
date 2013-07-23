
var default_zoom = 8;
//var init_relprob = 4;
var init_age = 5;
var default_radius = 8000;
function Place(obj) {
    this.name = obj.name;
    this.zoom = obj.zoom || default_zoom;
//    this.relprob = obj.relprob || init_relprob;
    this.age = obj.age || init_age;
    this.last_answer_correct = obj.last_answer_correct || true;
    this.lat = obj.lat;
    this.lng = obj.lng;
    this.frame_center = obj.frame_center;
    this.marker_position = obj.marker_position || obj.frame_center;
    //    this.marker_position = obj.marker_position;
    this.radius = obj.radius || default_radius
};


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
