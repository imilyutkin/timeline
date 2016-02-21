module timeline {
  export class StartCtrl  {
    constructor($scope: IStartScope){
      $scope.Name = "Ivan";
    }
  }

  export interface IStartScope extends ng.IScope {
    Name: string;
  }
}
