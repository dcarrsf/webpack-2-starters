
const StartRoute = ($scope, Model) => {
  // -------------------------
  // Initialize:
  $scope.title = 'Start';
  $scope.subtitle = 'Get started...';
};
// Dependency annotations
StartRoute.$inject = ['$scope', 'Model'];

export default StartRoute;
