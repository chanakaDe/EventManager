/**
 * Created by chanaka on 6/28/15.
 */
function SessionController($scope, sessionService) {

    $scope.AllSessions = [];

    sessionService.all().then(function (data) {
        console.log(data);
        $scope.AllSessions = data;
    });

    $scope.addSession = function () {

        var session = $scope.session;

        sessionService.saveSession(session).then(function (data) {
            console.log(data);
        });
    }

}