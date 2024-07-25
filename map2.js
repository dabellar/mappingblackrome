// Map 3
var map3 = L.map('map3').setView([41.894821, 12.482500], 17); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map3);


var viaBottegheOscureCoor = [41.894821, 12.478080];
var viaBottegheOscureMarker = L.marker(viaBottegheOscureCoor).addTo(map3);
viaBottegheOscureMarker.bindPopup("<b>Via delle Botteghe Oscure, 32</b><br>Ben Johnson");


// Map 4
var map4 = L.map('map4').setView([41.89100, 12.471000], 17); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map4);


var folkstudioCoor = [41.891040, 12.466650];
var folkstudioMarker = L.marker(folkstudioCoor).addTo(map4);
folkstudioMarker.bindPopup("<b>Folkstudio</b><br>Harold Bradley");