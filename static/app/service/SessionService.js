/**
 * Created by ChanakaDeSilva on 2/16/2015.
 */

module.factory('sessionService', function ($http) {

    var sessionService = {
        /**
         * Get all roles from server
         *
         * @returns {*}
         */

        saveSession: function (data) {

            return $http({
                method: "POST",
                headers: headers,
                data: data,
                url: host.session + '/save'
            }).then(function (response) {
                return response.data;
            });

        }, all: function () {
            return $http({
                method: "GET",
                headers: headers,
                url: host.session + '/getAllSessions'
            }).then(function (response) {
                return response.data;
            });
        }
    };
    return sessionService;
});