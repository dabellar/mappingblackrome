// Map 5
var map5 = L.map('map5').setView([41.887989, 12.4673000], 17); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map5);


var americanAcademyCoor = [41.887989, 12.462850];
var americanAcademyMarker = L.marker(americanAcademyCoor).addTo(map5);
americanAcademyMarker.bindPopup("<b>American Academy in Rome</b><br>Many Artist").openPopup();


// Map 6
var map6 = L.map('map6').setView([41.917590, 12.468720], 17); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map6);


var RAIstudiosCoor = [41.917590, 12.463920];
var RAIstudiosMarker = L.marker(RAIstudiosCoor).addTo(map6);
RAIstudiosMarker.bindPopup("<b>RAI Studios</b><br>William Demby").openPopup();