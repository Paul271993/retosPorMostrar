function createVector(cantidad, numeroAleatorio) {
  var vector1 = Array();
  for (i = 0; i < cantidad; i++) {
    vector1[i] = Math.round(Math.random() * numeroAleatorio);
    // console.log(vector1);
  }
  return vector1;
}
var vector1 = createVector(5, 6);
var vector2 = createVector(5, 6);
console.log(vector1);
console.log(vector2);

// SUMA

function suma(vector1, vector2) {
  var sumaArray = [];

  if (vector1.length == vector2.length) {
    for (var i = 0; i < vector1.length; i++) {
      sumaArray[i] = vector1[i] + vector2[i];
    }
    return sumaArray;
  }
}
console.log(suma(vector1, vector2));

// RESTA

function resta(vector1, vector2) {
  var restaArray = [];

  if (vector1.length == vector2.length) {
    for (var i = 0; i < vector1.length; i++) {
      restaArray[i] = vector1[i] - vector2[i];
    }
    return restaArray;
  }
}
console.log(resta(vector1, vector2));

// DIVISION

function div(vector1, vector2) {
  var divArray = [];

  if (vector1.length == vector2.length) {
    for (var i = 0; i < vector1.length; i++) {
      divArray[i] = vector1[i] / vector2[i];
    }
    return divArray;
  }
}
console.log(div(vector1, vector2));

// MULTIPLICACION

function product(vector1, vector2) {
  var productArray = [];

  if (vector1.length == vector2.length) {
    for (var i = 0; i < vector1.length; i++) {
      productArray[i] = vector1[i] * vector2[i];
    }
    return productArray;
  }
}
console.log(product(vector1, vector2));

// MULTIPLICACION POR N

function productArra2(n, vector1) {
  var vector3 = Array();

  for (let i = 0; i < vector1.length; i++) {
    // console.log(i);
    vector3[i] = vector1[i] * n;
  }
  return vector3;
}
console.log(productArra2(5, vector1));

module.exports = { suma, resta, div, product };
