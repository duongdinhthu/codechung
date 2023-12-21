function myFunction() {
  var a = document.getElementById("demo").value;
  var b = document.getElementById("demo1").value;
  var c = document.getElementById("demo2").value;
  var d = b * b - 4 * a * c;
  if ((a >= b) & (b >= c)) {
    document.getElementById("kq1").innerHTML = a + "  " + b + "  " + c;
  } else if (c >= a && a >= b) {
    document.getElementById("kq1").innerHTML = c + "  " + a + "  " + b;
  } else if (b >= a && a >= c) {
    document.getElementById("kq1").innerHTML = b + "  " + a + "  " + c;
  } else if (a >= c && c >= b) {
    document.getElementById("kq1").innerHTML = a + "  " + c + "  " + b;
  } else if (b >= c && c >= a) {
    document.getElementById("kq1").innerHTML = b + "  " + c + "  " + a;
  } else if (c >= b && b >= a) {
    document.getElementById("kq1").innerHTML = c + "  " + b + "  " + a;
  } else if (a >= b && b >= c) {
    document.getElementById("kq1").innerHTML = c + "  " + b + "  " + a;
  }
}
