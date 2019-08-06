/*
 * Example 2 - Using Native NodeJS promises
 * */
function getEmployees() {
  return new Promise(function(resolve, reject) {
    resolve(doSomething());
  });
}

function getData(callback) {
  getEmployees().then(function(res) {
    callback(res);
  });
}

getData(function(res) {
  console.log(res.employees);
});
