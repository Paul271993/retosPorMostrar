var matriz = new Array(10);
var matriz2 = new Array(10);

for (let i = 0; i < matriz.length; i++) {
  matriz[i] = new Array(10);
  for (let j = 0; j < matriz.length; j++) {
    matriz[i][j] = Math.round(Math.random() * 50);
  }
}

console.log("\n" + "PRIMERA MATRIZ" + "\n");
console.log(matriz);

for (let i = 0; i < matriz2.length; i++) {
  matriz2[i] = new Array(10);
  for (let j = 0; j < matriz2.length; j++) {
    matriz2[i][j] = Math.round(Math.random() * 50);
  }
}

console.log("\n" + "SEGUNDA MATRIZ" + "\n");
console.log(matriz2);

var matrizTotal = new Array(10);
for (let i = 0; i < matrizTotal.length; i++) {
  matrizTotal[i] = new Array(10);
  for (let j = 0; j < matrizTotal.length; j++) {
    matrizTotal[i][j] = matriz[i][j] + matriz2[i][j];
    // console.log(matriz);
  }
}
console.log("\n" + "TOTAL DE LA SUMA  MATRIZ + MATRIZ 2" + "\n");
console.log(matrizTotal);

for (let i = 0; i < 10; i++) {
  //   console.log(i);

  var aleatorio = Math.round(Math.random() * 10);
}
console.log("\n" + "NUMERO ALEATORIO" + "\n");
console.log(aleatorio);

var matrizAleatoria = new Array(10);

for (let i = 0; i < matrizAleatoria.length; i++) {
  // console.log(matrizAleatoria);
  matrizAleatoria[i] = new Array(10);
  for (let j = 0; j < matrizAleatoria.length; j++) {
    matrizAleatoria[i][j] = matrizTotal[i][j] * aleatorio;
  }
}
console.log("\n" + "RESULTADO DE LA MULTIPLICACION" + "\n");
console.log(matrizAleatoria);
