var map = L.map('map').setView([34.9677, 135.7792], 7);
var marker = L.marker([34.9677, 135.7792]).addTo(map);
var marker = L.marker([35.3606, 138.7271]).addTo(map);
var marker = L.marker([35.03935743038964, 135.7292476622747]).addTo(map);
var marker = L.marker([35.659463908087375, 139.70050439544764]).addTo(map);
var marker = L.marker([34.39262490280143, 132.45225395452914]).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var map = L.map('mapIndex').setView([34.9677, 135.7792], 7);
var marker = L.marker([34.9677, 135.7792]).addTo(mapIndex);
var marker = L.marker([35.3606, 138.7271]).addTo(mapIndex);
var marker = L.marker([35.03935743038964, 135.7292476622747]).addTo(mapIndex);
var marker = L.marker([35.659463908087375, 139.70050439544764]).addTo(mapIndex);
var marker = L.marker([34.39262490280143, 132.45225395452914]).addTo(mapIndex);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapIndex);