(function() {
    function ModalInstanceCtrl($uibModalInstance) {
       this.confirm = function() {
            this.room = {name: ''};
            console.log(this.name);
            $uibModalInstance.close(this.name);
        };

        this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();
