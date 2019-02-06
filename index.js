const en = parseInt (prompt('Enter n of Fibonacci number:'));
function fib(n) {
  let a = 1,
    b = 1;
  for (var i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

document.body.innerHTML = "<h1>The Fibonnaci number is: " + fib(en) + "</h1>";
