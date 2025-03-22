
// Initialize OpenLayers map
var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([0, 20]), // Default center
        zoom: 2
    })
});

// Load Timezone Boundaries (GeoJSON)
var timezoneLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
        url: 'https://raw.githubusercontent.com/evansiroky/timezone-boundary-builder/master/combined.json',
        format: new ol.format.GeoJSON()
    }),
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(255, 0, 0, 0.5)',
            width: 1
        }),
        fill: new ol.style.Fill({
            color: 'rgba(255, 165, 0, 0.2)' // Light shading for timezone areas
        })
    })
});
map.addLayer(timezoneLayer);

// On map click, fetch timezone & local time
map.on('singleclick', async function(event) {
    var coordinate = ol.proj.toLonLat(event.coordinate);
    let lat = coordinate[1].toFixed(2);
    let lng = coordinate[0].toFixed(2);

    document.getElementById("lat").textContent = lat;
    document.getElementById("lng").textContent = lng;

    // Fetch timezone data from GeoNames API
    let response = await fetch(`https://api.geonames.org/timezoneJSON?lat=${lat}&lng=${lng}&username=demo`); // Replace 'demo' with your username
    let data = await response.json();

    if (data && data.timezoneId) {
        document.getElementById("city").textContent = data.countryName || "Unknown";
        document.getElementById("timezone").textContent = data.timezoneId;

        function updateClock() {
            let now = moment().tz(data.timezoneId).format("HH:mm:ss");
            document.getElementById("localtime").textContent = now;
        }

        updateClock();
        setInterval(updateClock, 1000);
    } else {
        document.getElementById("timezone").textContent = "Timezone not found";
        document.getElementById("localtime").textContent = "-";
    }
});
