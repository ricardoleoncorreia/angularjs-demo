app.component('appMessages', {
  templateUrl: 'app/components/messages/messages.component.html',
  controller: ['$scope', 'MessagesService', function messagesController($scope, MessagesService){
    $scope.messages = MessagesService.messages;
    $scope.clear = function(){
      MessagesService.clear();
      $scope.messages = MessagesService.messages;
    }
  }]
});