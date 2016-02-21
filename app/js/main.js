var timeline;
(function (timeline) {
    var TimelineApp = (function () {
        function TimelineApp() {
            var timelineApp = angular.module('timeline', [])
                .controller('startCtrl', ['$scope'], timeline.StartCtrl);
        }
        return TimelineApp;
    })();
    timeline.TimelineApp = TimelineApp;
})(timeline || (timeline = {}));
var timeline;
(function (timeline) {
    var StartCtrl = (function () {
        function StartCtrl($scope) {
            $scope.Name = "Ivan";
        }
        return StartCtrl;
    })();
    timeline.StartCtrl = StartCtrl;
})(timeline || (timeline = {}));
