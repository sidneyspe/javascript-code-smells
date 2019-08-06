/*
 * Example 2 - Using Native NodeJS promises
 * */
function getEmployees() {
  return new Promise(function(resolve, reject) {
    resolve(doSomething());
  });
}

function getData() {
  return getEmployees();
}

getData().then(function(res) {
  console.log(res.employees);
});
