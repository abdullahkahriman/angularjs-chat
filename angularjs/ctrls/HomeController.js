app.controller("SidebarCtrl", SidebarCtrl);
app.controller("ChatCtrl", ChatCtrl);

function SidebarCtrl($scope, $rootScope, ContactService) {
    $scope.activeID = 0;

    $scope.contactList = ContactService.getContacts();

    $scope.open = (id) => {
        document.querySelector("sidebar").classList.remove("opened");

        $scope.contactList.forEach(l => {
            if (l.id === id) {
                $rootScope.$broadcast('chatID', id);
                $scope.activeID = id;
                return;
            }
        });
    }
}

function ChatCtrl($scope, $rootScope, ContactService) {
    $scope.chat = {};
    $scope.$on('chatID', function (event, chatID) {
        if (chatID > 0) {
            $scope.chat = (ContactService.getContacts().filter(contact => contact.id === chatID)[0]);
        }
    });
}