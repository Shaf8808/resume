function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766
        }
    });
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    var locations = [
        { lat: 51.749398327135545, lng: -0.48264814824689567},
        { lat: 51.75426896249213, lng: -0.48904101286480073},
        { lat: 51.71912482842255, lng: -0.4371856760340313},
        { lat: 51.77499497852542, lng: -0.4279526311543814},
        { lat: 51.74407245638732, lng: -0.46809848547564586},
        { lat: 51.75450202951899, lng: -0.46685644682466737}
    ]

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        })
    })

    var markerCluster = new MarkerClusterer(map, markers, 
    {imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"})
}