'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if( array.length<=1)return array     //si el arreglo tiene un solo elemento o no tiene ninguno
  var pivot = array[0];                 //elijo el pivot la posicion 0 del array
  var left = [];                        //van a estar los menores al pivot
  var right = [];                       // van a estar lo mayores al pivot 
  for( var i= 1; i< array.length; i ++){     //recorre el array
    if( (array[i])< pivot){                  //si el valor es menor al pivot 
      left.push(array[i])                       // la guardo en left
    }else {                                   // sino... lo pusheo a la derecha

      right.push(array[i])
    }
                                            //salgo del for y hago recursion
   
  }
  return quickSort(left).concat(pivot).concat(quickSort(right));
  // aca estoy concatenando el array de la izquierda con el pivot +el array de la derecha que ya estan ordenados de < a >

}

function merge(left, right){
  var leftIndex =0;
  var rightIndex = 0;
  var arrayResult = [];

  while( leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      arrayResult.push(left[leftIndex]);
      leftIndex ++
    }else{
      arrayResult.push(right[rightIndex]);
      rightIndex ++
    }
  } 
  return arrayResult.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));

  
}




function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if( array.length===1 ) return array;
  var mitad =Math.floor(array.length/2);
  var left = array.slice(0, mitad);
  var right = array.slice ( mitad);
  return merge (mergeSort(left), mergeSort(right));


}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
