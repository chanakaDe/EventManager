/**
 * Created by chanaka on 6/30/15.
 */
module.factory('locationService', function ($http) {

    var locationService = {
        /**
         * Get all roles from server
         *
         * @returns {*}
         */

        saveSpeaker: function (data) {

            return $http({
                method: "POST",
                headers: headers,
                data: data,
                url: host.speaker + '/save'
            }).then(function (response) {
                return response.data;
            });

        }, all: function () {
            return $http({
                method: "GET",
                headers: headers,
                url: host.speaker + '/getAllSpeakers'
            }).then(function (response) {
                return response.data;
            });
        }
    };
    return locationService;
});