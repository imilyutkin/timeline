module timeline {

  export class TimelineApp {
    constructor() {
      var timelineApp = angular.module('timeline', [])
        .controller('startCtrl', ['$scope'], StartCtrl);
    }
  }
}
