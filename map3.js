// Map 6: American Academy in Rome
var map6 = L.map('map6').setView([41.887989, 12.4673000], 17); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map6);


var americanAcademyCoor = [41.887989, 12.462850];
var americanAcademyMarker = L.marker(americanAcademyCoor).addTo(map6);
americanAcademyMarker.bindPopup("<b>American Academy in Rome</b><br>Many Artist").openPopup();


// Map 7: RAI Studios
var map7 = L.map('map7').setView([41.917590, 12.468720], 17); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map7);


var RAIstudiosCoor = [41.917590, 12.463920];
var RAIstudiosMarker = L.marker(RAIstudiosCoor).addTo(map7);
RAIstudiosMarker.bindPopup("<b>RAI Studios</b><br>William Demby").openPopup();