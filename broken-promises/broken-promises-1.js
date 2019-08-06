/*
 * Example 1 - Using Angular JS $http promises
 * */
function getUsers(callback) {
  $http.get("/users").then(function(res) {
    callback(res);
  });
}

getUsers(function(res) {
  $scope.users = res.users;
});
