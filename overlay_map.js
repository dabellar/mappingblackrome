var map = L.map('map').setView([41.9000, 12.5545], 12.5);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var imageUrl = 'imgs/europa_2560_full_crop.jpg';
var errorOverlayUrl = 'https://cdn-icons-png.flaticon.com/512/110/110686.png';
var altText = 'Image of Newark, N.J. in 1922. Source: The University of Texas at Austin, UT Libraries Map Collection.';
var latLngBounds = L.latLngBounds([[41.8614, 12.4362], [41.940, 12.55]]);

var imageOverlay = L.imageOverlay(imageUrl, latLngBounds, {
    opacity: 0.8,
    errorOverlayUrl: errorOverlayUrl,
    alt: altText,
    interactive: true
}).addTo(map);

var baseMaps = {
    "OpenStreetMap": osm
};

var overlayMaps = {
    "Image Overlay": imageOverlay
};

// Add layer control to the map
L.control.layers(baseMaps, overlayMaps, { position: 'topleft' }).addTo(map);
