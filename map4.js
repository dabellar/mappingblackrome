// Map 1: Via Margutta
var map1 = L.map('map1').setView([41.907390, 12.485720], 17); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map1);


var viaMarguttaCoor = [41.907390, 12.480960];
var viaMarguttaMarker = L.marker(viaMarguttaCoor).addTo(map1);
viaMarguttaMarker.bindPopup("<b>Via Margutta</b><br>William Demby and Edmonia Lewis").openPopup();

// Map 8: Cinecitta Studios
var map8 = L.map('map8').setView([41.849530, 12.589500], 15); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map8);


var cinecittaCoor = [41.849530, 12.574500];
var cinecittaMarker = L.marker(cinecittaCoor).addTo(map8);
cinecittaMarker.bindPopup("<b>Cinecitta</b><br>John Kitzmiller, Katherine Dunham and Ben Johnson").openPopup();