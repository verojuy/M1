"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro
   del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS)
   en cualquiera de sus variantes, según se indique por parámetro ("post-order", 
   "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el 
   recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen
   bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
      this.value = value;
      this.right = null;
      this.left = null;


}

BinarySearchTree.prototype.size = function (){// nodo hoja (sin hijos)
  if(!this.left && !this.right) {           //si no tenes izquiera ni dereche tu valor es 1
          return 1 ;
  }
  if(!this.left){                          //nodo con un solo hijo... la izq esta vacia?
    return 1 + this.right.size()            // si entra es porque tiene un solo hijo y le da a su hijo la funcion para que aplique tb
  }
 
  if(!this.right){
    return 1 + this.left.size()
  }
  return 1 +this.left.size() + this.right.size();




}
BinarySearchTree.prototype.insert = function (value){
   if(value > this.value){            //el valor es mayor al root de mi arbol?
     if(!this.right) {               //si entra es porque es mayor y pregunta esta libre el lugar o esta ocupado?
      this.right = new BinarySearchTree(value);//si entra es porque esta libre y lo agrega
     
    }else {                                 // si esta ocupada entra aca
     this.right.insert(value)               //le pide al hijo que haga lo mismo y aplique la funcion insert..... o sea recurcion
    }
    }else {                                 // debaria ir a la izquierda ...es mas chico
      if( !this.left){                      // esta libre izquierda?
           this.left = new BinarySearchTree(value)   //si entro es porque esta libre y lo agrega
      }else{
        this.left.insert(value);              // si llega aca es porque no esta libre y le dice al hijo que haga lo mismo y lo agregue mas abajo ...recurcion
      }
    }
  


}
BinarySearchTree.prototype.contains = function( value){
      if( value === this.value){               // el valor es iguAL a this value ..si...retorna true
        return true;
      }                                   
      if(value > this.value){                  // entra y pregunta el valor es > a el valor
        if(!this.right){                       // si entra es porque es mayor y se va a la derecha .... y pregunta si la dereche esta vacia
          return false                         // si entro es porque esta vacia entonces retorna false porque no esta el valor
        } else{
          return this.right.contains(value)    // no esta vacia y le pide a los hijos de la izquierda que sigan buscando el valor con la misma funcion ( recurciva)   
        } 
                                              //pone return para que cuando termine la funcion y retorne un valor le retorne ese valor
      }if( value < this.value){
        if(!this.left){                       // si esta vacio return false porque no esta el elemento
          return false;
        } else{
           return this.left.contains(value);// si hay algo a la izquierda le pide a los hijos de la izquierda que sigan buscando el valor y le retorne
                                            // el return es para que retorne el valor retornado por los hijos
        }                     
      
      }
}
BinarySearchTree.prototype.depthFirstForEach= function(cb,order){            //recorro de mamera lineal de arriba para abajo
//in order
if(!order || order=== "in-order"){
  if(this.left) this.left.depthFirstForEach(cb,order);         /// primero voy a la mas bajo de lado izquierdo y recorro , subo y reccoro y voy subiendo a medida que recorro primero lo izquierdo 
   cb(this.value);
  if(this.right) this.right.depthFirstForEach(cb,order);
  }else if( order === "pre-order"){
    cb(this.value);
    if(this.left) this.left.depthFirstForEach(cb,order);       //primero recorro donde estoy y despues bajo para seguir recorriendo

    if(this.right)this.right.depthFirstForEach(cb,order);
   
  }else {
      if(this.left)this.left.depthFirstForEach(cb,order);       //primero bajo y por ultimo recorro
      if(this.right) this.right.depthFirstForEach(cb,order);
      cb(this.value);
    }
}


BinarySearchTree.prototype.breadthFirstForEach = function(cb, array = []){   // pasa como argumento el array para que lo use al que tiene y no cree uno nuevo en cada recurcion
cb( this.value);                                 // recorrer la ciudad
if(this.left) array.push(this.left)              // si tiene izquierda que lo guarde en el array (lista)
if(this.right) array.push(this.right)              //si tiene dereche que la sume a la lista ,array

if(array.length>0){
  array.shift().breadthFirstForEach(cb,array)
} 
//array.shift.breadthFirstForEach(cb , array = [])    // pregunta si queda algo en la lista y si queda algo por recorrer que lo saque de la lista y lo recorra... o sea aplica otra vez l a funcion

}



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
