// Map 4: Botteghe Oscure
var map4 = L.map('map4').setView([41.894821, 12.482500], 17); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map4);


var viaBottegheOscureCoor = [41.894821, 12.478080];
var viaBottegheOscureMarker = L.marker(viaBottegheOscureCoor).addTo(map4);
viaBottegheOscureMarker.bindPopup("<b>Via delle Botteghe Oscure, 32</b><br>Ben Johnson");


// Map 5: Folkstudio
var map5 = L.map('map5').setView([41.89100, 12.471000], 17); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map5);


var folkstudioCoor = [41.891040, 12.466650];
var folkstudioMarker = L.marker(folkstudioCoor).addTo(map5);
folkstudioMarker.bindPopup("<b>Folkstudio</b><br>Harold Bradley");