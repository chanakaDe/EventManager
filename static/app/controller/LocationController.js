/**
 * Created by chanaka on 6/30/15.
 */
function LocationController($scope, locationService) {

    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(1.931747, 73.541439),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById('map1'), mapOptions);
    var map = $scope.map;
    $scope.markers = [];

    var infoWindow = new google.maps.InfoWindow();

    var createOrderPoint = function (info) {

        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.latitude, info.longitude),
            title: info.label
        });
        marker.content = '<div class="infoWindowContent">' + info.city + " - " + info.label + "  -  " + info.pumpingType + '</div>';

        google.maps.event.addListener(marker, 'click', function () {

            var infoWindowHtml = ('<h2>' + marker.title + '</h2>' + marker.content);
            console.log(infoWindowHtml);
            infoWindow.setContent(infoWindowHtml);
            infoWindow.open($scope.map, marker);
        });
        $scope.markers.push(marker);
    };

    for (i = 0; i < $scope.allDeliveryPoints.length; i++) {
        createOrderPoint($scope.allDeliveryPoints[i]);
    }

    google.maps.event.addListener(map, 'click', function (e) {

        $scope.pump.latitude = "";
        $scope.pump.longitude = "";

        console.log("GET LOCATION ACTIVATED !!!!");
        alert("Latitude: " + e.latLng.lat() + "\r\nLongitude: " + e.latLng.lng());
        $scope.pump.latitude = e.latLng.lat();
        $scope.pump.longitude = e.latLng.lng();
        $scope.$apply();
        console.log(e.latLng.lat(), $scope.pump.latitude);
        console.log(e.latLng.lng(), $scope.pump.longitude);

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