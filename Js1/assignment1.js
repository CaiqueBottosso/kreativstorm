/* find the diagonal*/
function diagonalOfSquare(sideLength) {
  return sideLength * Math.sqrt(2);
}

let sideLength = 9;
console.log("Diagonal of the square is: " + diagonalOfSquare(sideLength).toFixed(2));

/*area of a triangle*/

function areaOfTriangle(a, b, c) {
  let s = (a + b + c) / 2; // Semi-perimeter
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

let a = 5, b = 6, c = 7;
console.log("Area of the triangle is: " + areaOfTriangle(a, b, c).toFixed(2));

/* Circumference and Surface Area of a Circle*/

function circumferenceOfCircle(radius) {
  return 2 * Math.PI * radius;
}

function areaOfCircle(radius) {
  return Math.PI * Math.pow(radius, 2);
}

let radius = 4;
console.log("Circumference of the circle is: " + circumferenceOfCircle(radius).toFixed(2));
console.log("Area of the circle is: " + areaOfCircle(radius).toFixed(2));
