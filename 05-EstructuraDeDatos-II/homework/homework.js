"use strict";

const { prototype } = require("@11ty/eleventy");

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor
   (tener en cuenta el caso particular de una lista de un solo nodo y de una 
    lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, 
  con una particularidad: el parámetro puede ser un valor o un callback. 
  En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado;
   en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del
    callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por
   parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
this.head = null;
}
LinkedList.prototype.add = function (value){
var newNode = new Node( value)
 if( !this.head) {                    //esta vacia la lista?
   this.head = newNode;               //si entra aca es porque esta vacia y porngo el nuevo nodo
 }  else{                    //si entra aca es porque no esta vacia
   var current =  this.head; // le digo que guarde la posicion de referencia y 
   while (current .next){     // lo recorro con while ...hay uno atras tuyo? 
     current = current.next;  // current se mueve hasta el proximo y pregunta lo mismo hasta el ultimo
   }                           // si llegamos aca es porque llegamos al ultimo y el proximo es null
    current.next = newNode      // ya podemos agregar en el ultimo lugar
 }
    
} 
LinkedList.prototype.remove = function(){
  if(!this.head){                      /// esta la lista vacia?
    return null                       // en ese caso retorna null
  }
  if( this.head.next === null){       // si tengo un solo elemento
                                       // solo entra si el proximo del primero es null o sea 1 solo elemento
   var value = this.head.value         // guarda en un auxiliar el valor..porque voy a borrarlo
   this.head = null                    // borro el elemento y queda null
   return value                          // retorno el valor que guarde
  }
 var current = this.head;                //defino desde donde me paro
  while (current.next.next) {              // pregunta si su proximo tiene un proximo osea hay un elemento mas ..no es null
 current = current.next                  // me posiciono y sale del while porque estoy en el penultimo
}
  var value =current.next.value           // guardo el valor para poder borrarlo y no perderlo
 current.next = null                     //pongo null 
 return value; 
}


LinkedList.prototype.search = function(arg){
  var current = this.head ////posiciona el current en la cabeza
  if(!current)   return null               //pregunta si no tengo nada
                                          //si esta vacia returna null
    
  while( current){       // para recorrerla
       if( typeof arg === "function" ){  /// pregunta si el tipo de datos es una funcion
        if( arg(current.value)){        // ejecuta la funcion con el valor del current 
          return current.value          //si el valor es = al valor de la funcion ...o se a lo que busco 
       }
      }else {     
        if(current.value === arg)  return arg // el valor del current es = al arg?
      }
        current = current. next    /// para pasar al siguiente
        }    
    
    return null;
}



function Node(value) {
  this.value = value;
  this.next = null; 

} 

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets
 (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar
   la información), donde guardaremos datos en formato clave-valor
    (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets
 (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio
   adicional, pueden modificar un poco la clase para que reciba la cantidad de
    buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. 
  Recibe un input alfabético, suma el código numérico de cada caracter del input
   (investigar el método charCodeAt de los strings) y calcula el módulo de ese 
   número total por la cantidad de buckets; de esta manera determina la posición
    de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos),
   hashea la clave invocando al método hash, y almacena todo el conjunto en el
    bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el 
  bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en 
  la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero
 puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora';
  luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un 
  bucket específico (determinado al hashear la clave)
*/

function HashTable() {
this.numBuckets = 35;
this.buckets= [];       // hace un arreglo para poder guardar 
}
 
HashTable.prototype.hash= function(key){// re correr para sacar el codigo de cada indice
 var contador=0;
  for( var i =0; i< key.length; i ++){
  contador = contador + key.charCodeAt(i)///te da el codigo del indice y se suma
  }
  return  contador % this.numBuckets      // se saca el modulo para que caiga dentro del tamaño de la hashtable
}

HashTable.prototype.set = function( key, value){      //para guardar
 if( typeof key !== "string") throw new TypeError ( 'Keys must be strings');  // si la tipo de dato de la key no es string que tire ese error
  var index = this.hash(key)                          ////le aplique la funcion hash a mi key y me dice donde guardarla
  if( !this.buckets[index]) {                        /// pregunta esta vacio el lugar que me diste?
    this.buckets[index] ={};                         // si esta vacio ahora lo hago un pbjet para tener lugar a guardar mas .... perchero
  }                       
  this.buckets[index][key] = value ;   // guardo el valor dentro del objeto por eso uso bracketnotation ... guardo la remera en una percha
}

HashTable.prototype.get = function(key){                  // para saber donde busco si quiero sacar la remera
  var index = this.hash(key);                          //lugar donde me indico la funcion de hash
  return this.buckets[index][key]                          //lugar donde lo guarde
}
HashTable.prototype.hasKey = function(key){
  var index = this.hash(key);
  return this.buckets[index].hasOwnProperty(key)       // pregutna si hay una propiedad key en ese lugar
 // return !!this.buckets[index][key] devuelve el valor booleano
}





// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
