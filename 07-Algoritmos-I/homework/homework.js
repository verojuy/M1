'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var div = 2;
  var array = [1];
  while(num !==1)
  if(num % div === 0){
    array.push(div);
    num= num/ div;
  }else{
    div++
  }
  return array;
  
 }

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for( let i = 0 ; i < array.length-1;i++){                   //
    for(let j = 0 ; j < array.length-1 ; j++){
      if(array[j]> array[j+1]){
        let aux =array[j];                                    //para guardar el valor de j y no perderlo
        array[j]= array [j+1];                                 // para intercambiar los lugares
        array[j+1]= aux;
      }
    }
  
    
  }
  return array;
  

}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(var i= 1 ; i< array.length; i ++){
    var j = i -1
     var aux=array[i];              //aca se va guardar el valor auxiliar
      while(j>=0 && array[j]> aux){
        array[j+1] = array[j]/// mueve el valor a la derecha
        j--;
      } 
      array[j+1] = aux;
    }
    return array;



}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for( var i = 0; i < array.length-1; i ++){
    let posmin = i;
    for( var j = i +1; j < array.length;j++){
      if(array[j] <array[posmin]){              // si el array en su posiscion j es menor que el array en su posicion posmin entonces que j se desplaze hast j
        posmin = j;                             // se desplaza j hasta donde encuentre un numero en que no se cumpla con la condicion
      }
    }
    if( i !== posmin){
      var aux = array[i];                    // guardo el valor de i 
    array[i]= array[posmin];                //invierte el lugar de los numeros  lo acomoda
    array[posmin] = aux;
    }
  }
  return array;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
