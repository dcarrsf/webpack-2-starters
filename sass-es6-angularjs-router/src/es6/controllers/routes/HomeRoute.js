
const HomeRoute = ($scope, Model) => {
  // -------------------------
  // Initialize:
  $scope.title = 'Home';
  $scope.subtitle = 'Click start to begin...';
};
// Dependency annotations
HomeRoute.$inject = ['$scope', 'Model'];

export default HomeRoute;
