// Map 9: Roman Bricktop on the Via Veneto
var map9 = L.map('map9').setView([41.908340, 12.499440], 16); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map9);


var bricktopCoor = [41.908340, 12.489440];
var bricktopMarker = L.marker(bricktopCoor).addTo(map9);
bricktopMarker.bindPopup("<b>Bricktop's Via Venetto</b><br>Bricktop").openPopup();
