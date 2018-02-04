// map

function initMap() {
    var uluru = { lat: 59.9342802, lng: 30.3350986 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        zoomControl: false,
        scaleControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        center: uluru
    });
    var image = '../img/content/map-marker.png';
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(59.94554327989287, 30.38935262114668),
        map: map,
        icon: image
    });

    var image = '../img/content/map-marker.png';
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(59.91142323563909, 30.50024587065841),
        map: map,
        icon: image
    });

    var image = '../img/content/map-marker.png';
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(59.88693161784606, 30.319658102103713),
        map: map,
        icon: image
    });

    var image = '../img/content/map-marker.png';
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(59.97033574821672, 30.315194906302924),
        map: map,
        icon: image
    });
}