/*
 * Example 1 - Using Angular JS $http promises
 * */
function getUsers() {
  return $http.get("/users");
}

getUsers().then(function(res) {
  $scope.users = res.users;
});
