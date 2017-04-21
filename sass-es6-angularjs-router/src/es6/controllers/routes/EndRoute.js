
const EndRoute = ($scope, Model) => {
  // -------------------------
  // Initialize:
  $scope.title = 'End';
  $scope.subtitle = 'That\'s all folks!';
};
// Dependency annotations
EndRoute.$inject = ['$scope', 'Model'];

export default EndRoute;
