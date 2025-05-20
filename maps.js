// Map : Piazza del Popolo
// Initialize the map
var map2 = L.map('map2').setView([41.9100, 12.4845], 16); // Set center to Piazza del Popolo
        
// Add a tile layer to the map (you can use any tile provider)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map2);

// Add a marker for Piazza del Popolo
var piazzaDelPopoloCoor = [41.9109, 12.4763];
var piazzaDelPopoloMarker = L.marker(piazzaDelPopoloCoor).addTo(map2);
piazzaDelPopoloMarker.bindPopup("<b>Piazza del Popolo</b><br>William Demby").openPopup();

// Marker for Rosati
var rosatiMarker = L.marker([41.9100, 12.4760]).addTo(map2);
rosatiMarker.bindPopup("<b>Rosati Cafe</b><br>Where many artists worked and shared ideas");

// Marker for Canova
var canovaMarker = L.marker([41.9103, 12.4771]).addTo(map2);
canovaMarker.bindPopup("<b>Canova Cafe</b><br>Where many artists worked and shared ideas");

// Villa Borghese
var villaBorgheseCoor = [41.9140, 12.488];

// Via delle Botteghe Oscure, 32
var viaBottegheOscureCoor = [41.8975, 12.4799];

// American Academy in Rome
var americanAcademy = [41.887556, 12.462936];

// Add a polyline
var latlngs = [
  piazzaDelPopoloCoor,
  villaBorgheseCoor,
];
var polyline = L.polyline(latlngs, {color: 'red', dashArray: '5, 10'}).addTo(map2);


// var locations = [
//   {lat: 41.9109, lng: 12.4763, name: "Piazza del Popolo", section: "#map1"},
//   {lat: 41.9085, lng: 12.488, name: "Villa Borghese", section: "#map2"}
//   // {lat: 41.90268, lng: 12.45414, name: "Vatican", section: "#section3"},
//   // {lat: 41.9311111, lng: 12.456389, name: "Foro", section: "#section4"}
// ];

// // Add markers to the map with clickable popups
// locations.forEach(function(location) {
//   var marker = L.marker([location.lat, location.lng]).addTo(map);
//   marker.bindPopup('<b>' + location.name + '</b><br><a href="' + location.section + '">Go to section</a>');
// });

// Map 3: Villa Borghese
// Initialize the map
var map3 = L.map('map3').setView([41.9135, 12.4995], 15); 
        
// Add a tile layer to the map (you can use any tile provider)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map3);

// Marker for Villa Borghese
var villaMarker = L.marker(villaBorgheseCoor).addTo(map3);
villaMarker.bindPopup("<b>Villa Borghese</b><br>Some artist");

// Via delle Botteghe Oscure, 32
var viaBottegheOscureMarker = L.marker(viaBottegheOscureCoor).addTo(map3);
viaBottegheOscureMarker.bindPopup("<b>Via delle Botteghe Oscure, 32</b><br>Ben Johnson");

// American Academy in Rome
var americanAcademyMarker = L.marker(americanAcademyCoor).addTo(map3);
americanAcademyMarker.bindPopup("<b>American Academy in Rome</b><br>Many artists");

