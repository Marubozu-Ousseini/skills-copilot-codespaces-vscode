function skillsMember() {
    return {
        restrict: 'E'
        templateUrl: 'modules/skills/views/member.html',
        controler: 'skillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}