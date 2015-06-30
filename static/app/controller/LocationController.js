/**
 * Created by chanaka on 6/30/15.
 */
function LocationController($scope, locationService) {

    $scope.new_lat = "";
    $scope.new_long = "";

    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(52.463219, 13.285061),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById('map1'), mapOptions);
    var map = $scope.map;
    $scope.markers = [];

    var infoWindow = new google.maps.InfoWindow();

    google.maps.event.addListener(map, 'click', function (e) {

        console.log("GET LOCATION ACTIVATED !!!!");
        alert("Latitude: " + e.latLng.lat() + "\r\nLongitude: " + e.latLng.lng());
        $scope.new_lat = e.latLng.lat();
        $scope.new_long = e.latLng.lng();
//        Adding marker
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(customer_lat, customer_lag),
            title: 'Selected Location'
        });
        marker.content = '<div class="infoWindowContent">' + 'Oil Company' + '</div>';

        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });

        $scope.markers.push(marker);
//        Ending marker
    });

    $scope.openInfoWindow = function (e, selectedMarker) {
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    };

}