// <<<Siempre hambriento>>>

function siempreHambriento(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "comida") {
      console.log("delicioso");
    }
  }
}
siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
siempreHambriento([4, 1, 5, 7, 2]);

// <<<Filtro paso alto>>>

function pasoAlto(arr, cutoff) {
  let arrFiltrado = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > cutoff) {
      arrFiltrado.push(arr[i]);
    }
  }
  return arrFiltrado;
}
let resultPA = pasoAlto([6, 8, 3, 10, -2, 5, 9], 5);
console.log(resultPA);

// <<<Mejor que el promedio>>>

function mejorQueElPromedio(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let promedio = sum / arr.length;
  let cont = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > promedio) {
      cont++;
    }
  }
  return cont;
}
let resultado = mejorQueElPromedio([6, 8, 3, 10, -2, 5, 9]);
console.log(resultado);

// <<<Arreglo invertido>>>

function invertir(arr) {
  let inicio = 0;
  let final = arr.length -1;
  let aux;
  while(inicio < final){
    aux = arr[inicio];
    arr[inicio] = arr[final];
    arr[final] = aux;
    inicio++;
    final--;
  }  
  return arr;
}
 
let resultIn = invertir(["a", "b", "c", "d", "e"]);
console.log(resultIn);

// <<<Arreglo de fibonacci

function arregloFibonacci(n) {
  let fibArr = [0, 1];
  let next;
  for(let i=2;i<n; i++){
    next = fibArr[i-2] + fibArr[i-1];
    fibArr[i] = next;
  }
  return fibArr;
}
 
var resultAF = arregloFibonacci(10);
console.log(resultAF);
