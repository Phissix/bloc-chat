(function() {
    function ModalCtrl($scope, Room, $uibModalInstance) {
        //changed whole logic of code (included ModalInstance here instead of seperate file) for cleaner code
        //will add code docstring later
        $scope.createRoom = function(name) {
            if(name !== undefined) {
                Room.makeRoom({
                    name: name,
                    date: new Date()
                });
                $uibModalInstance.close();
            }
            else if(name === undefined) {
                $uibModalInstance.close();
            }
        }

        $scope.cancelRoom = function() {
            $uibModalInstance.close();
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl',['$scope', 'Room', '$uibModalInstance', ModalCtrl]);
})();
