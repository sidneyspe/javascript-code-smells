var x = 1;

function fun() {
  alert(x);
  if (something) {
    var x = 42;
  }
}

fun();
