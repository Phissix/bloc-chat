(function() {
    function HomeCtrl($scope, Room, $cookies, $uibModal, Message) {
        $scope.roomList = Room.all;
        $scope.messages = {};
        $scope.currentRoom = null;
        $scope.currentUser = $cookies.get('blocChatCurrentUser');

        //Set and Add methods
        $scope.setCurrentRoom = function(room) {
            $scope.currentRoom = room;
            $scope.messages = Message.getByRoomId(room.$id);
        };

        $scope.addRoomModal = function(){
      	 $uibModal.open({
        		animation: true,
  	        templateUrl: '/templates/modal.html',
  	        controller: 'ModalCtrl'
     	   })
       };

       //message and logout methods
       $scope.sendMessage = function(room){
            Message.send($scope.newMessage, room.$id);
            $scope.newMessage = null;
       };

       $scope.logOut = function() {
            $cookies.remove('blocChatCurrentUser');
            window.location.reload();
       }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl',['$scope', 'Room', '$cookies', '$uibModal', 'Message', HomeCtrl]);
})();
